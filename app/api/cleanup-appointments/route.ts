import { NextResponse }
from "next/server";

import { db }
from "@/lib/firebase";

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { google }
from "googleapis";

import dayjs from "dayjs";


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


export async function GET() {

  try {

    const snapshot =
      await getDocs(
        collection(
          db,
          "appointments"
        )
      );

    let deletedCount = 0;

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

      const oneWeekAgo =
        dayjs().subtract(
          7,
          "day"
        );

      // DELETE IF OLDER THAN 7 DAYS

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

        deletedCount++;
      }
    }

    return NextResponse.json({
      success: true,

      deletedCount,
    });

  } catch (err: any) {

    console.error(err);

    return NextResponse.json(
      {
        success: false,

        error:
          err.message ||
          "Cleanup failed",
      },

      {
        status: 500,
      }
    );
  }
}