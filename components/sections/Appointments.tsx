"use client";

import { useState } from "react";

export default function Appointments() {

  const getSlots = (branch: string, date: string) => {
    if (!branch || !date) return [];

    const day = new Date(date).getDay();

    if (branch === "Online") {
      return ["9:00 AM", "11:00 AM", "2:00 PM", "6:00 PM"];
    }

    if (day === 0) {
      if (branch === "Retibowli") {
        return ["6:00 PM", "7:00 PM", "8:00 PM"];
      }
      return [];
    }

    if (day === 5 && branch === "Kachiguda") return [];

    const slotsByBranch: Record<string, string[]> = {
      Narsing: ["10:30 AM", "11:30 AM", "12:30 PM"],
      Retibowli: ["1:30 PM", "2:00 PM", "7:30 PM", "8:30 PM", "9:00 PM"],
      Kachiguda: ["4:30 PM", "5:30 PM", "6:30 PM"],
    };

    return slotsByBranch[branch] || [];
  };

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    branch: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [branchOpen, setBranchOpen] =
    useState(false);

  const [timeOpen, setTimeOpen] =
    useState(false);

  const branches = [
    "Narsing",
    "Retibowli",
    "Kachiguda",
    "Online",
  ];

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.phone ||
      !form.date ||
      !form.time ||
      !form.branch
    ) {
      alert("Please fill all details");
      return;
    }

    setLoading(true);

    setStatus("idle");

    try {

      const res = await fetch("/api/appointments", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {

        setStatus("success");

        setForm({
          name: "",
          phone: "",
          date: "",
          time: "",
          branch: "",
        });

        setBranchOpen(false);

        setTimeOpen(false);

      } else {
        setStatus("error");
      }

    } catch (err) {

      console.error(err);

      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section
      id="appointment"
      className="
      py-24
      bg-gradient-to-br
      from-blue-950
      via-blue-900
      to-blue-800
    "
    >
      <div className="max-w-6xl mx-auto px-4">

        <div
          className="
bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-blue-950/90
          border border-yellow-400/10
          rounded-[36px]
          p-8 md:p-12
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(0,0,0,0.5)]
        "
        >

          {/* HEADER */}

          <div className="text-center mb-10">

            <div
              className="
              inline-block
              px-4 py-1.5
              rounded-full
              bg-yellow-400/10
              border border-yellow-400/20
              text-yellow-300
              text-sm
              tracking-wide
              mb-4
            "
            >
              Premium Consultation
            </div>

            <h2
              className="
              text-4xl sm:text-5xl
              font-bold
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-yellow-200
              via-yellow-400
              to-yellow-200
            "
            >
              Book Appointment
            </h2>

            <p className="text-white/70 mt-4 max-w-xl mx-auto">
              Secure your appointment with our
              specialists in just a few clicks.
            </p>

          </div>

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="grid gap-6 md:grid-cols-2"
          >

            {/* NAME */}

            <div>
              <label className="text-sm text-white/80">
                Full Name
              </label>

              <input
                className="
                w-full mt-2 p-4 rounded-2xl
                bg-blue-900
                border border-blue-700
                text-white
                placeholder-white/50
                hover:bg-blue-800
                focus:outline-none
                focus:ring-2
                focus:ring-yellow-400/60
                transition-all duration-300
              "
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                placeholder="Enter your name"
              />
            </div>

            {/* PHONE */}

            <div>
              <label className="text-sm text-white/80">
                Phone Number
              </label>

              <input
                className="
                w-full mt-2 p-4 rounded-2xl
                bg-blue-900
                border border-blue-700
                text-white
                placeholder-white/50
                hover:bg-blue-800
                focus:outline-none
                focus:ring-2
                focus:ring-yellow-400/60
                transition-all duration-300
              "
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
                placeholder="Enter phone number"
              />
            </div>

            {/* DATE */}

           {/* DATE */}

<div>
  <label className="text-sm text-white/80">
    Appointment Date
  </label>

  <div className="relative mt-2">

    <input
      type="date"
      min={
        new Date()
          .toISOString()
          .split("T")[0]
      }
      className="
      w-full p-4 rounded-2xl
      bg-blue-900
      border border-blue-700
      text-white
      focus:outline-none
      focus:ring-2
      focus:ring-yellow-400/60
      hover:bg-blue-800
      transition-all duration-300

      [color-scheme:dark]
    "
      value={form.date}
      onChange={(e) =>
        setForm({
          ...form,
          date: e.target.value,
          time: "",
        })
      }
    />

    

  </div>
</div>

            {/* BRANCH */}

            <div className="relative">

              <label className="text-sm text-white/80">
                Select Branch
              </label>

              <div
                onClick={() =>
                  setBranchOpen(!branchOpen)
                }
                className="
                mt-2 p-4 rounded-2xl
                bg-blue-900
                border border-blue-700
                text-white
                flex justify-between items-center
                cursor-pointer
                hover:bg-blue-800
                hover:border-yellow-400/40
                transition-all duration-300
              "
              >
                {form.branch || "Choose branch"}

                <span
                  className={`transition-transform ${
                    branchOpen
                      ? "rotate-180"
                      : ""
                  }`}
                >
                  ▼
                </span>
              </div>

              {branchOpen && (
                <div
                  className="
                  absolute z-50 w-full mt-2
                  rounded-2xl
                  overflow-hidden
                  bg-blue-950
                  border border-blue-800
                  shadow-2xl
                "
                >
                  {branches.map((b) => (
                    <div
                      key={b}
                      onClick={() => {
                        setForm({
                          ...form,
                          branch: b,
                          time: "",
                        });

                        setBranchOpen(false);
                      }}
                      className="
                      px-5 py-4
                      text-white
                      hover:bg-blue-800
                      hover:text-yellow-300
                      cursor-pointer
                      transition-all duration-300
                    "
                    >
                      {b}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* TIME SLOT */}

            <div className="md:col-span-2 relative">

              <label className="text-sm text-white/80">
                Time Slot
              </label>

              <div
                onClick={() => {
                  if (
                    form.branch &&
                    form.date
                  ) {
                    setTimeOpen(!timeOpen);
                  }
                }}
                className={`
                mt-2 p-4 rounded-2xl
                bg-blue-900
                border border-blue-700
                text-white
                flex justify-between items-center
                transition-all duration-300
                ${
                  !form.branch ||
                  !form.date
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer hover:bg-blue-800 hover:border-yellow-400/40"
                }
              `}
              >
                {form.time ||
                  "Select Time Slot"}

                <span
                  className={`transition-transform ${
                    timeOpen
                      ? "rotate-180"
                      : ""
                  }`}
                >
                  ▼
                </span>
              </div>

              {timeOpen && (
                <div
                  className="
                  absolute z-50 w-full mt-2
                  rounded-2xl
                  overflow-hidden
                  bg-blue-950
                  border border-blue-800
                  shadow-2xl
                "
                >
                  {getSlots(
                    form.branch,
                    form.date
                  ).length === 0 ? (

                    <div className="px-5 py-4 text-white/50">
                      No slots available
                    </div>

                  ) : (

                    getSlots(
                      form.branch,
                      form.date
                    ).map((slot) => (

                      <div
                        key={slot}
                        onClick={() => {
                          setForm({
                            ...form,
                            time: slot,
                          });

                          setTimeOpen(false);
                        }}
                        className="
                        px-5 py-4
                        text-white
                        hover:bg-blue-800
                        hover:text-yellow-300
                        cursor-pointer
                        transition-all duration-300
                      "
                      >
                        {slot}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="
              md:col-span-2 mt-4
              py-4 rounded-full
              font-semibold text-lg
              text-blue-950
              bg-gradient-to-r
              from-yellow-400
              via-yellow-300
              to-yellow-400
              shadow-[0_15px_50px_rgba(255,215,0,0.35)]
              hover:scale-[1.02]
              hover:shadow-[0_20px_60px_rgba(255,215,0,0.45)]
              active:scale-[0.98]
              transition-all duration-300
            "
            >
              {loading
                ? "Booking Appointment..."
                : "Confirm Appointment"}
            </button>

          </form>

          {/* SUCCESS */}

          {status === "success" && (
            <div className="mt-8 flex justify-center animate-fadeIn">

              <div
                className="
                relative overflow-hidden
                bg-gradient-to-br
                from-blue-900
                via-blue-800
                to-blue-950
                border border-yellow-400/20
                rounded-[32px]
                px-8 py-7
                text-center
                shadow-[0_20px_80px_rgba(0,0,0,0.6)]
                backdrop-blur-2xl
                max-w-lg w-full
              "
              >

                <div
                  className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-yellow-400/10
                  via-transparent
                  to-yellow-400/10
                "
                />

                <div className="relative z-10 flex justify-center">

                  <div
                    className="
                    w-20 h-20 rounded-full
                    bg-gradient-to-br
                    from-yellow-300
                    to-yellow-500
                    flex items-center justify-center
                    shadow-[0_10px_40px_rgba(255,215,0,0.35)]
                  "
                  >
                    <span className="text-4xl text-blue-950">
                      ✓
                    </span>
                  </div>

                </div>

                <h3
                  className="
                  relative z-10
                  mt-5
                  text-2xl font-bold
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-yellow-200
                  via-yellow-400
                  to-yellow-200
                "
                >
                  Appointment Successfully Booked
                </h3>

                <p
                  className="
                  relative z-10
                  text-white/80
                  text-sm
                  mt-3
                  leading-relaxed
                "
                >
                  Your appointment has been
                  confirmed successfully.
                  A confirmation message and
                  booking details will be
                  shared with you shortly.
                </p>

                <div
                  className="
                  relative z-10
                  mt-5
                  bg-white/5
                  border border-white/10
                  rounded-2xl
                  p-4
                "
                >
                  <p className="text-yellow-300 text-sm font-medium">
                    ✨ Thank you for choosing
                    our clinic
                  </p>

                  <p className="text-white/60 text-xs mt-1">
                    Please arrive 10 minutes
                    before your appointment
                    time.
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* ERROR */}

          {status === "error" && (
            <div className="mt-6 text-center">

              <div
                className="
                inline-flex items-center gap-2
                bg-red-500/10
                border border-red-400/20
                text-red-300
                px-5 py-3
                rounded-2xl
              "
              >
                ❌ Something went wrong.
                Please try again.
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}