import { db } from "@/lib/firebase";

import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { google }
from "googleapis";

import dayjs from "dayjs";

import customParseFormat
from "dayjs/plugin/customParseFormat";

dayjs.extend(
  customParseFormat
);


/* ======================================================
   CONFIG
====================================================== */

const MAX_PER_SLOT = 3;

const auth =
  new google.auth.GoogleAuth({
    credentials: {

      client_email:
        process.env
          .GOOGLE_CLIENT_EMAIL,

      private_key:
        process.env
          .GOOGLE_PRIVATE_KEY
          ?.replace(
            /\\n/g,
            "\n"
          ),
    },

    scopes: [
      "https://www.googleapis.com/auth/calendar",
    ],
  });

const calendar =
  google.calendar({
    version: "v3",
    auth,
  });

const CALENDAR_ID =
  process.env
    .GOOGLE_CALENDAR_ID!;


/* ======================================================
   AUTO CLEANUP OLD APPOINTMENTS
====================================================== */

const cleanupOldAppointments =
  async () => {

    try {

      const snapshot =
        await getDocs(
          collection(
            db,
            "appointments"
          )
        );

      const oneWeekAgo =
        dayjs().subtract(
          7,
          "day"
        );

      for (const item of snapshot.docs) {

        const data =
          item.data();

        if (
          !data.date
        ) {
          continue;
        }

        const appointmentDate =
          dayjs(data.date);

        if (
          appointmentDate.isBefore(
            oneWeekAgo
          )
        ) {

          // DELETE GOOGLE EVENT

          if (
            data.googleEventId
          ) {

            try {

              await calendar.events.delete({
                calendarId:
                  CALENDAR_ID,

                eventId:
                  data.googleEventId,
              });

            } catch (err) {

              console.error(
                "Calendar Cleanup Error:",
                err
              );
            }
          }

          // DELETE FIRESTORE DOC

          await deleteDoc(
            doc(
              db,
              "appointments",
              item.id
            )
          );
        }
      }

    } catch (err) {

      console.error(
        "Cleanup Error:",
        err
      );
    }
  };


/* ======================================================
   CREATE APPOINTMENT
====================================================== */

export const createAppointment =
  async (data: any) => {

    try {

      await cleanupOldAppointments();

      const {
        name,
        phone,
        date,
        time,
        branch,
      } = data;


      /* ======================================================
         VALIDATION
      ====================================================== */

      if (
        !name ||
        !phone ||
        !date ||
        !time ||
        !branch
      ) {

        return {
          success: false,

          error:
            "Please fill all fields",
        };
      }

      if (
        !/^[0-9]{10}$/.test(
          phone
        )
      ) {

        return {
          success: false,

          error:
            "Invalid phone number",
        };
      }


      /* ======================================================
         SLOT CHECK
      ====================================================== */

      const slotQuery = query(
        collection(
          db,
          "appointments"
        ),

        where(
          "date",
          "==",
          date
        ),

        where(
          "time",
          "==",
          time
        ),

        where(
          "branch",
          "==",
          branch
        )
      );

      const slotSnap =
        await getDocs(
          slotQuery
        );

      if (
        slotSnap.size >=
        MAX_PER_SLOT
      ) {

        return {
          success: false,

          error:
            "This slot is fully booked. Please choose another time.",
        };
      }


      /* ======================================================
         DUPLICATE CHECK
      ====================================================== */

      const duplicateQuery =
        query(
          collection(
            db,
            "appointments"
          ),

          where(
            "phone",
            "==",
            phone
          ),

          where(
            "date",
            "==",
            date
          )
        );

      const duplicateSnap =
        await getDocs(
          duplicateQuery
        );

      if (
        !duplicateSnap.empty
      ) {

        return {
          success: false,

          error:
            "You already booked an appointment for this date.",
        };
      }


      /* ======================================================
         CREATE DATETIME
      ====================================================== */

      const startDateTime =
        dayjs(
          `${date} ${time}`,
          "YYYY-MM-DD hh:mm A"
        );

      const endDateTime =
        startDateTime.add(
          30,
          "minute"
        );

      if (
        !startDateTime.isValid()
      ) {

        return {
          success: false,

          error:
            "Invalid appointment time.",
        };
      }


      /* ======================================================
         GOOGLE CALENDAR OVERLAP CHECK
      ====================================================== */

      const calendarEvents =
        await calendar.events.list({
          calendarId:
            CALENDAR_ID,

          timeMin:
            startDateTime
              .subtract(
                2,
                "hour"
              )
              .toISOString(),

          timeMax:
            endDateTime
              .add(
                2,
                "hour"
              )
              .toISOString(),

          singleEvents: true,

          orderBy:
            "startTime",
        });

      const conflictingEvents =
        (
          calendarEvents
            .data.items || []
        ).filter((event) => {

          if (
            event.status ===
            "cancelled"
          ) {

            return false;
          }

          if (
            !event.start
              ?.dateTime ||
            !event.end
              ?.dateTime
          ) {

            return false;
          }

          const eventStart =
            dayjs(
              event.start
                .dateTime
            );

          const eventEnd =
            dayjs(
              event.end
                .dateTime
            );

          return (
            startDateTime.isBefore(
              eventEnd
            ) &&
            endDateTime.isAfter(
              eventStart
            )
          );
        });

      if (
        conflictingEvents.length >
        0
      ) {

        return {
          success: false,

          error:
            "Doctor unavailable at this time. Please select another slot.",
        };
      }


      /* ======================================================
         CREATE GOOGLE CALENDAR EVENT
      ====================================================== */

      const calendarEvent =
        await calendar.events.insert({
          calendarId:
            CALENDAR_ID,

          requestBody: {

            summary:
              `Appointment - ${name}`,

            description: `
Patient Name: ${name}
Phone: ${phone}
Branch: ${branch}
            `,

            start: {
              dateTime:
                startDateTime.toISOString(),

              timeZone:
                "Asia/Kolkata",
            },

            end: {
              dateTime:
                endDateTime.toISOString(),

              timeZone:
                "Asia/Kolkata",
            },

            reminders: {
              useDefault: false,

              overrides: [
                {
                  method:
                    "popup",

                  minutes: 60,
                },
              ],
            },
          },
        });


      /* ======================================================
         SAVE FIRESTORE
      ====================================================== */

      const docRef =
        await addDoc(
          collection(
            db,
            "appointments"
          ),

          {
            name:
              name.trim(),

            phone,

            date,

            time,

            branch,

            status:
              "confirmed",

            googleEventId:
              calendarEvent
                .data.id,

            createdAt:
              serverTimestamp(),
          }
        );


      /* ======================================================
         SUCCESS
      ====================================================== */

      return {
        success: true,

        appointmentId:
          docRef.id,

        calendarEventId:
          calendarEvent
            .data.id,
      };

    } catch (err: any) {

      console.error(
        "Appointment Error:",
        err
      );

      return {
        success: false,

        error:
          err.message ||
          "Server error",
      };
    }
  };