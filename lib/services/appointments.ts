// lib/appointments.ts

import { db } from "@/lib/firebase";

import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { google } from "googleapis";
import dayjs from "dayjs";

/* ======================================================
   CONFIG
====================================================== */

const MAX_PER_SLOT = 3;

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,

    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(
      /\\n/g,
      "\n"
    ),
  },

  scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({
  version: "v3",
  auth,
});

/* ======================================================
   CREATE APPOINTMENT
====================================================== */

export const createAppointment = async (data: any) => {
  try {
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
      throw new Error("Please fill all fields");
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      throw new Error("Invalid phone number");
    }

    /* ======================================================
       CHECK SLOT LIMIT
    ====================================================== */

    const q = query(
      collection(db, "appointments"),

      where("date", "==", date),

      where("time", "==", time),

      where("branch", "==", branch)
    );

    const snapshot = await getDocs(q);

    if (snapshot.size >= MAX_PER_SLOT) {
      throw new Error("Slot full");
    }

    /* ======================================================
       PREVENT DUPLICATE BOOKING
    ====================================================== */

    const duplicateQuery = query(
      collection(db, "appointments"),

      where("phone", "==", phone),

      where("date", "==", date)
    );

    const duplicateSnap = await getDocs(
      duplicateQuery
    );

    if (!duplicateSnap.empty) {
      throw new Error(
        "You already booked for this date"
      );
    }

    /* ======================================================
       CREATE DATE TIME
    ====================================================== */

    const startDateTime = dayjs(
      `${date} ${time}`
    );

    const endDateTime = startDateTime.add(
      30,
      "minute"
    );

    /* ======================================================
       CHECK GOOGLE CALENDAR CONFLICTS
    ====================================================== */

    const calendarEvents =
      await calendar.events.list({
        calendarId: "primary",

        timeMin: startDateTime.toISOString(),

        timeMax: endDateTime.toISOString(),

        singleEvents: true,

        orderBy: "startTime",
      });

    const conflictingEvents =
      calendarEvents.data.items || [];

    if (conflictingEvents.length > 0) {
      throw new Error(
        "Doctor unavailable at this time"
      );
    }

    /* ======================================================
       CREATE GOOGLE CALENDAR EVENT
    ====================================================== */

    const calendarEvent =
      await calendar.events.insert({
        calendarId: "primary",

        requestBody: {
          summary: `Appointment - ${name}`,

          description: `
Patient Name: ${name}
Phone: ${phone}
Branch: ${branch}
          `,

          start: {
            dateTime:
              startDateTime.toISOString(),

            timeZone: "Asia/Kolkata",
          },

          end: {
            dateTime:
              endDateTime.toISOString(),

            timeZone: "Asia/Kolkata",
          },

          reminders: {
            useDefault: false,

            overrides: [
              {
                method: "popup",
                minutes: 60,
              },
            ],
          },
        },
      });

    /* ======================================================
       SAVE TO FIRESTORE
    ====================================================== */

    const docRef = await addDoc(
      collection(db, "appointments"),
      {
        name: name.trim(),

        phone,

        date,

        time,

        branch,

        status: "confirmed",

        googleEventId:
          calendarEvent.data.id,

        createdAt: serverTimestamp(),
      }
    );

    /* ======================================================
       SUCCESS
    ====================================================== */

    return {
      success: true,

      appointmentId: docRef.id,

      calendarEventId:
        calendarEvent.data.id,
    };

  } catch (error: any) {
    console.error(
      "Appointment Error:",
      error
    );

    return {
      success: false,

      error: error.message,
    };
  }
};

/* ======================================================
   RESCHEDULE APPOINTMENT
====================================================== */

export const rescheduleAppointment =
  async ({
    appointmentId,
    newDate,
    newTime,
  }: any) => {
    try {
      console.log(
        "Reschedule:",
        appointmentId,
        newDate,
        newTime
      );

      // later:
      // update firestore
      // update google calendar event
      // send whatsapp msg

      return {
        success: true,
      };

    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  };