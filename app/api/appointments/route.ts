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


// GET APPOINTMENTS

export async function GET() {

  try {

    const q = query(
      collection(db, "appointments"),
      orderBy("createdAt", "desc")
    );

    const snapshot =
      await getDocs(q);

    const data =
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

    return NextResponse.json(data);

  } catch (err) {

    return NextResponse.json(
      {
        error:
          "Failed to fetch",
      },

      {
        status: 500,
      }
    );
  }
}


// CREATE APPOINTMENT

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
      !/^[6-9]\d{9}$/.test(phone)
    ) {

      return NextResponse.json(
        {
          error:
            "Invalid phone number",
        },

        {
          status: 400,
        }
      );
    }


    // SAVE APPOINTMENT

    const id =
      await createAppointment(body);


    // SEND WHATSAPP

    await sendWhatsApp(body);


    return NextResponse.json({
      success: true,
      id,

      message:
        "Appointment booked",
    });

  } catch (err: any) {

    console.error(err);

    if (
      err.message ===
      "Slot full"
    ) {

      return NextResponse.json(
        {
          error:
            "Slot full. Choose another time.",
        },

        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        error:
          "Server error",
      },

      {
        status: 500,
      }
    );
  }
}