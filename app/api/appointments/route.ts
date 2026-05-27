import { NextResponse } from "next/server";

import { createAppointment }
from "@/lib/services/appointments";

import { sendWhatsApp }
from "@/lib/whatsapp";

import { db } from "@/lib/firebase";

import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";


// ======================================================
// GET APPOINTMENTS
// ======================================================

export async function GET() {

  try {

    const q = query(
      collection(
        db,
        "appointments"
      ),

      orderBy(
        "createdAt",
        "desc"
      )
    );

    const snapshot =
      await getDocs(q);

    const data =
      snapshot.docs.map(
        (doc) => ({
          id: doc.id,
          ...doc.data(),
        })
      );

    return NextResponse.json(
      data
    );

  } catch (err) {

    console.error(err);

    return NextResponse.json(
      {
        success: false,

        error:
          "Failed to fetch appointments",
      },

      {
        status: 500,
      }
    );
  }
}


// ======================================================
// CREATE APPOINTMENT
// ======================================================

export async function POST(
  req: Request
) {

  try {

    const body =
      await req.json();

    const {
      name,
      phone,
      date,
      time,
      branch,
    } = body;


    // VALIDATION

    if (
      !name ||
      !phone ||
      !date ||
      !time ||
      !branch
    ) {

      return NextResponse.json(
        {
          success: false,

          error:
            "All fields required",
        },

        {
          status: 400,
        }
      );
    }


    // PHONE VALIDATION

    if (
      !/^[6-9]\d{9}$/.test(
        phone
      )
    ) {

      return NextResponse.json(
        {
          success: false,

          error:
            "Invalid phone number",
        },

        {
          status: 400,
        }
      );
    }


    // CREATE APPOINTMENT

    const result =
      await createAppointment(
        body
      );


    // FAILED

    if (!result.success) {

      return NextResponse.json(
        {
          success: false,

          error:
            result.error ||
            "Appointment failed",
        },

        {
          status: 400,
        }
      );
    }


    // SEND WHATSAPP

    try {

      await sendWhatsApp(
        body
      );

    } catch (
      whatsappError
    ) {

      console.error(
        "WhatsApp Error:",
        whatsappError
      );
    }


    // SUCCESS

    return NextResponse.json({
      success: true,

      id:
        result.appointmentId,

      calendarEventId:
        result.calendarEventId,

      message:
        "Appointment booked successfully",
    });

  } catch (err: any) {

    console.error(
      "API Error:",
      err
    );

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