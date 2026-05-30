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

import moment from "moment-timezone";


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
        moment()
          .tz("Asia/Kolkata")
          .subtract(
            7,
            "days"
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
          moment.tz(
            data.date,
            "YYYY-MM-DD",
            "Asia/Kolkata"
          );

        if (
          appointmentDate.isBefore(
            oneWeekAgo
          )
        ) {

          // DELETE CALENDAR EVENT

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
         CREATE IST DATETIME
      ====================================================== */

      const startDateTime =
        moment.tz(
          `${date} ${time}`,
          "YYYY-MM-DD hh:mm A",
          "Asia/Kolkata"
        );

      const endDateTime =
        startDateTime
          .clone()
          .add(
            30,
            "minutes"
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
              .clone()
              .subtract(
                2,
                "hours"
              )
              .toISOString(),

          timeMax:
            endDateTime
              .clone()
              .add(
                2,
                "hours"
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
            moment.tz(
              event.start
                .dateTime,
              "Asia/Kolkata"
            );

          const eventEnd =
            moment.tz(
              event.end
                .dateTime,
              "Asia/Kolkata"
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
            "Doctor is unavailable at this time. Please select another slot.",
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
                startDateTime.format(
                  "YYYY-MM-DDTHH:mm:ss"
                ),

              timeZone:
                "Asia/Kolkata",
            },

            end: {
              dateTime:
                endDateTime.format(
                  "YYYY-MM-DDTHH:mm:ss"
                ),

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