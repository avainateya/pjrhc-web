import { NextResponse }
from "next/server";

import { db }
from "@/lib/firebase";

import {
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";

import { google }
from "googleapis";


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


export async function POST(
  req: Request
) {

  try {

    const body =
      await req.json();

    const {
      appointmentId,
    } = body;

    if (
      !appointmentId
    ) {

      return NextResponse.json(
        {
          success: false,

          error:
            "Appointment ID required",
        },

        {
          status: 400,
        }
      );
    }

    const appointmentRef =
      doc(
        db,
        "appointments",
        appointmentId
      );

    const appointmentSnap =
      await getDoc(
        appointmentRef
      );

    if (
      !appointmentSnap.exists()
    ) {

      return NextResponse.json(
        {
          success: false,

          error:
            "Appointment not found",
        },

        {
          status: 404,
        }
      );
    }

    const appointment =
      appointmentSnap.data();

    // DELETE GOOGLE EVENT

    if (
      appointment.googleEventId
    ) {

      try {

        await calendar.events.delete({
          calendarId:
            CALENDAR_ID,

          eventId:
            appointment.googleEventId,
        });

      } catch (calendarError) {

        console.error(
          "Calendar Delete Error:",
          calendarError
        );
      }
    }

    // DELETE FIRESTORE DOC

    await deleteDoc(
      appointmentRef
    );

    return NextResponse.json({
      success: true,

      message:
        "Appointment deleted successfully",
    });

  } catch (err: any) {

    console.error(err);

    return NextResponse.json(
      {
        success: false,

        error:
          err.message ||
          "Server error",
      },

      {
        status: 500,
      }
    );
  }
}