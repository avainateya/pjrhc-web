"use client";

import { useState } from "react";

export default function Appointments() {
  const filterPastTimes = (
    selectedDate: string,
    slots: string[]
  ) => {
    const now = new Date();

    const today = now
      .toISOString()
      .split("T")[0];

    if (selectedDate !== today) {
      return slots;
    }

    return slots.filter((slot) => {
      const [time, modifier] =
        slot.split(" ");

      let [hours, minutes] = time
        .split(":")
        .map(Number);

      if (
        modifier === "PM" &&
        hours !== 12
      ) {
        hours += 12;
      }

      if (
        modifier === "AM" &&
        hours === 12
      ) {
        hours = 0;
      }

      const slotTime = new Date();

      slotTime.setHours(
        hours,
        minutes,
        0,
        0
      );

      return slotTime > now;
    });
  };

  const getSlots = (
    branch: string,
    date: string
  ) => {
    if (!branch || !date) return [];

    const day = new Date(date).getDay();

    if (branch === "Online") {
      return filterPastTimes(date, [
        "9:00 AM",
        "11:00 AM",
        "2:00 PM",
        "6:00 PM",
      ]);
    }

    if (day === 0) {
      if (branch === "Retibowli") {
        return filterPastTimes(date, [
          "6:00 PM",
          "7:00 PM",
          "8:00 PM",
        ]);
      }

      return [];
    }

    if (
      day === 5 &&
      branch === "Kachiguda"
    ) {
      return [];
    }

    const slotsByBranch: Record<
      string,
      string[]
    > = {
      Narsing: [
        "10:30 AM",
        "11:30 AM",
        "12:30 PM",
      ],

      Retibowli: [
        "1:30 PM",
        "2:00 PM",
        "7:30 PM",
        "8:30 PM",
        "9:00 PM",
      ],

      Kachiguda: [
        "4:30 PM",
        "5:30 PM",
        "6:30 PM",
      ],
    };

    return filterPastTimes(
      date,
      slotsByBranch[branch] || []
    );
  };

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    branch: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [status, setStatus] =
    useState<
      "idle" | "success" | "error"
    >("idle");

  const [errorMessage, setErrorMessage] =
    useState("");

  const [branchOpen, setBranchOpen] =
    useState(false);

  const [timeOpen, setTimeOpen] =
    useState(false);

  const today = new Date()
    .toISOString()
    .split("T")[0];

  const branches = [
    "Narsing",
    "Retibowli",
    "Kachiguda",
    "Online",
  ];

  const handleSubmit = async (
    e: any
  ) => {
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

    setErrorMessage("");

    try {
      const res = await fetch(
        "/api/appointments",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      console.log(data);

      if (data.success) {
        setStatus("success");

        setErrorMessage("");

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
        setErrorMessage(
          data.error ||
            "Something went wrong"
        );

        setStatus("error");
      }
    } catch (err) {
      console.error(err);

      setErrorMessage(
        "Server error. Please try again."
      );

      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section
      id="appointment"
      className="
      relative overflow-hidden

      py-20 lg:py-24

      bg-gradient-to-br
      from-blue-950
      via-blue-900
      to-blue-800
    "
    >
      {/* GLOWS */}

      <div
        className="
        absolute top-[-200px] left-[-160px]

        w-[420px] h-[420px]

        bg-blue-400/20

        blur-[120px]

        rounded-full
      "
      />

      <div
        className="
        absolute bottom-[-200px] right-[-160px]

        w-[420px] h-[420px]

        bg-yellow-300/10

        blur-[120px]

        rounded-full
      "
      />

      {/* CONTAINER */}

      <div
        className="
        relative z-10

        w-full

        px-5
        sm:px-8
        md:px-12
        lg:px-20
        xl:px-28
        2xl:px-36
        3xl:px-44
      "
      >
        <div
          className="
          relative

          overflow-visible

          max-w-5xl

          mx-auto

          bg-gradient-to-br
          from-blue-950/90
          via-blue-900/80
          to-blue-950/90

          border border-yellow-400/10

          rounded-[40px]

          p-6
          sm:p-8
          md:p-10
          lg:p-12
          xl:p-14

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
              text-[clamp(38px,5vw,68px)]

              font-bold

              tracking-[-0.04em]

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

            <p
              className="
              text-white/70

              mt-4

              max-w-2xl mx-auto

              text-base sm:text-lg

              leading-relaxed
            "
            >
              Secure your appointment with our
              specialists in just a few clicks.
            </p>
          </div>

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="
            relative z-20

            grid gap-5 lg:gap-6 md:grid-cols-2
          "
          >
            {/* NAME */}

            <div>
              <label className="text-sm text-white/80">
                Full Name
              </label>

              <input
                className="
                w-full mt-2 p-4 rounded-2xl

                bg-blue-950/70

                border border-blue-700/60

                text-white

                placeholder-white/50

                hover:bg-blue-900

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

                bg-blue-950/70

                border border-blue-700/60

                text-white

                placeholder-white/50

                hover:bg-blue-900

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

            <div>
              <label className="text-sm text-white/80">
                Appointment Date
              </label>

              <div
                className="
                relative mt-2

                rounded-2xl

                overflow-hidden
              "
              >
                <input
                  type="date"

                  min={today}

                  onClick={(e: any) => {
                    e.target.showPicker?.();

                    setBranchOpen(false);

                    setTimeOpen(false);
                  }}

                  className="
                  w-full p-4 rounded-2xl

                  bg-blue-950/70

                  border border-blue-700/60

                  text-white

                  focus:outline-none
                  focus:ring-2
                  focus:ring-yellow-400/60

                  hover:bg-blue-900

                  transition-all duration-300

                  cursor-pointer

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

                <div
                  className="
                  absolute right-4 top-1/2
                  -translate-y-1/2

                  pointer-events-none

                  text-white/70
                "
                >
                  📅
                </div>
              </div>
            </div>

            {/* BRANCH */}

            <div className="relative z-50">
              <label className="text-sm text-white/80">
                Select Branch
              </label>

              <div
                onClick={() => {
                  setBranchOpen(
                    !branchOpen
                  );

                  setTimeOpen(false);
                }}

                className="
                mt-2 p-4 rounded-2xl

                bg-blue-950/70

                border border-blue-700/60

                text-white

                flex justify-between items-center

                cursor-pointer

                hover:bg-blue-900

                hover:border-yellow-400/40

                transition-all duration-300
              "
              >
                {form.branch ||
                  "Choose branch"}

                <span
                  className={`
                    transition-all duration-300

                    ${
                      branchOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                >
                  ▼
                </span>
              </div>

              <div
                className={`
                absolute z-[100] w-full mt-2

                max-h-[260px]

                overflow-y-auto

                rounded-2xl

                bg-blue-950

                border border-blue-800

                shadow-2xl

                transition-all duration-300

                origin-top

                ${
                  branchOpen
                    ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                }
              `}
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
            </div>

            {/* TIME SLOT */}

            <div className="md:col-span-2 relative z-40">
              <label className="text-sm text-white/80">
                Time Slot
              </label>

              <div
                onClick={() => {
                  if (
                    form.branch &&
                    form.date
                  ) {
                    setTimeOpen(
                      !timeOpen
                    );

                    setBranchOpen(false);
                  }
                }}

                className={`
                mt-2 p-4 rounded-2xl

                bg-blue-950/70

                border border-blue-700/60

                text-white

                flex justify-between items-center

                transition-all duration-300

                ${
                  !form.branch ||
                  !form.date
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer hover:bg-blue-900 hover:border-yellow-400/40"
                }
              `}
              >
                {form.time ||
                  "Select Time Slot"}

                <span
                  className={`
                    transition-all duration-300

                    ${
                      timeOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                >
                  ▼
                </span>
              </div>

              <div
                className={`
                absolute z-[100] w-full mt-2

                max-h-[260px]

                overflow-y-auto

                rounded-2xl

                bg-blue-950

                border border-blue-800

                shadow-2xl

                transition-all duration-300

                origin-top

                ${
                  timeOpen
                    ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                }
              `}
              >
                {getSlots(
                  form.branch,
                  form.date
                ).length === 0 ? (
                  <div
                    className="
                    px-5 py-4

                    text-white/50
                  "
                  >
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
            </div>

            {/* BUTTON */}

            <button
              type="submit"

              disabled={loading}

              className="
              md:col-span-2 mt-4

              py-4

              rounded-2xl

              font-semibold text-lg

              text-blue-950

              bg-gradient-to-r
              from-yellow-400
              via-yellow-300
              to-yellow-400

              shadow-[0_15px_50px_rgba(255,215,0,0.35)]

              hover:scale-[1.01]

              hover:shadow-[0_20px_60px_rgba(255,215,0,0.45)]

              active:scale-[0.98]

              transition-all duration-300
            "
            >
              {loading
                ? "Booking Appointment..."
                : "Confirm Appointment"}
            </button>

            {/* SUCCESS */}

            {status === "success" && (
              <div
                className="
                md:col-span-2

                mt-2

                rounded-2xl

                border border-emerald-400/20

                bg-emerald-400/10

                px-5 py-4

                text-center

                text-emerald-200

                backdrop-blur-xl
              "
              >
                <p className="font-semibold text-lg">
                  Appointment Booked Successfully ✨
                </p>

                <p className="mt-1 text-sm text-emerald-100/80">
                  Our team will contact you shortly.
                </p>
              </div>
            )}

            {/* ERROR */}

            {status === "error" && (
              <div
                className="
                md:col-span-2

                mt-2

                rounded-2xl

                border border-red-400/20

                bg-red-400/10

                px-5 py-4

                text-center

                text-red-200

                backdrop-blur-xl
              "
              >
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}