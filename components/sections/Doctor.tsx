"use client";

import { motion } from "framer-motion";

export default function Doctor() {
  const highlights = [
    "20+ Years Experience",
    "Trusted by Thousands",
    "Holistic Healing Approach",
    "3 Clinic Locations",
  ];

  return (
    <section
      id="our physician"
      className="
      relative overflow-hidden

      py-24 lg:py-36

      bg-gradient-to-b
      from-white
      via-[#f8fbff]
      to-white
    "
    >
      {/* BACKGROUND GLOWS */}

      <div
        className="
        absolute top-[-180px] left-[-120px]

        w-[450px] h-[450px]

        bg-blue-200/30

        blur-[120px]

        rounded-full
      "
      />

      <div
        className="
        absolute bottom-[-180px] right-[-120px]

        w-[420px] h-[420px]

        bg-yellow-100/30

        blur-[120px]

        rounded-full
      "
      />

      {/* GRID */}

      <div
        className="
        absolute inset-0

        opacity-[0.03]

        bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)]

        bg-[size:90px_90px]
      "
      />

      <div
        className="
        relative z-10

        max-w-7xl mx-auto

        px-5 sm:px-6 md:px-12 lg:px-20
      "
      >
        <div
          className="
          flex flex-col lg:flex-row

          items-start

          gap-14 lg:gap-24
        "
        >
          {/* LEFT SIDE */}

          <div
            className="
            w-full lg:w-1/2

            flex justify-center lg:justify-center
          "
          >
            <div
              className="
              relative

              w-full

              flex justify-center
            "
            >
              {/* BACK GLOW */}

              <div
                className="
                absolute

                top-10

                w-[260px] h-[260px]

                sm:w-[320px] sm:h-[320px]

                lg:w-[420px] lg:h-[420px]

                rounded-full

                bg-blue-200/30

                blur-[90px]
              "
              />

              {/* GOLD GLOW */}

              <div
                className="
                absolute

                bottom-0 right-2

                w-24 h-24

                lg:w-32 lg:h-32

                rounded-full

                bg-yellow-200/40

                blur-3xl
              "
              />

              {/* MAIN FRAME */}

              <div
                className="
                relative

                p-[1.5px]

                rounded-[38px]

                bg-gradient-to-br
                from-blue-200
                via-white
                to-yellow-200

                shadow-[0_35px_100px_rgba(0,0,0,0.14)]
              "
              >
                <div
                  className="
                  relative overflow-hidden

                  rounded-[38px]

                  bg-white/75

                  backdrop-blur-2xl

                  border border-white/40
                "
                >
                  {/* IMAGE */}

                  <img
                    src="/doctor.jpg"
                    alt="Dr. P. Sri Ramana"
                    className="
                    w-[260px] h-[340px]

                    sm:w-[320px] sm:h-[420px]

                    lg:w-[420px] lg:h-[540px]

                    object-cover

                    object-top

                    transition duration-700

                    hover:scale-[1.03]
                  "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div
            className="
            w-full lg:w-1/2

            text-center lg:text-left

            lg:pt-4
          "
          >
            {/* TOP BADGE */}

            <div
              className="
              inline-flex items-center gap-2

              px-5 py-2

              rounded-full

              bg-blue-50

              border border-blue-100

              text-blue-800

              text-sm font-medium

              shadow-lg

              mb-7
            "
            >
              ✨ Medical Excellence
            </div>

            {/* TITLE */}

            <h2
  className="
  w-full

  min-w-0

  text-center lg:text-left

  text-[clamp(18px,4vw,72px)]

  font-black

  leading-[1]

  tracking-[-0.06em]

  text-transparent bg-clip-text

  bg-gradient-to-r
  from-blue-950
  via-blue-800
  to-blue-950

  whitespace-nowrap
"
>
  Dr. P. Sri Ramana
</h2>
            {/* SUBTITLE */}

            <div className="mt-6">
              <p
                className="
                text-lg sm:text-xl

                font-semibold

                text-blue-800
              "
              >
                BHMS, MD General Medicine
              </p>

              <p
                className="
                mt-2

                text-yellow-600

                font-semibold

                tracking-wide
              "
              >
                Renowned Homoeopathy Practitioner
              </p>
            </div>

            {/* AWARD */}

            <div
              className="
              mt-8

              relative overflow-hidden

              rounded-[28px]

              bg-white/70

              backdrop-blur-xl

              border border-white/50

              shadow-[0_20px_60px_rgba(0,0,0,0.06)]

              p-6
            "
            >
              <div
                className="
                absolute inset-y-0 left-0

                w-1.5

                bg-gradient-to-b
                from-yellow-400
                to-yellow-500
              "
              />

              <p
                className="
                text-lg

                font-bold

                text-blue-950
              "
              >
                Zee Health Conclave Awardee
              </p>

              <p
                className="
                mt-2

                text-gray-600

                leading-relaxed
              "
              >
                The only homoeopathy doctor in Telangana
                to receive this prestigious recognition
                for clinical excellence and patient care.
              </p>
            </div>

            {/* DESCRIPTION */}

            <p
              className="
              mt-8

              text-gray-600

              leading-relaxed

              text-base sm:text-lg
            "
            >
              With decades of clinical excellence,
              Dr. P. Sri Ramana has been at the
              forefront of personalized homoeopathic
              care, focusing on root-cause healing,
              long-term wellness, and compassionate
              treatment approaches tailored for every
              patient.
            </p>

            {/* HIGHLIGHTS */}

            <div
              className="
              mt-10

              grid grid-cols-1 sm:grid-cols-2

              gap-4
            "
            >
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="
                  flex items-center gap-3

                  rounded-2xl

                  bg-white/70

                  backdrop-blur-xl

                  border border-blue-100

                  px-5 py-4

                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]

                  hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]

                  transition-all duration-300
                "
                >
                  <div
                    className="
                    w-8 h-8

                    rounded-full

                    flex items-center justify-center

                    bg-gradient-to-br
                    from-blue-700
                    to-blue-900

                    text-white

                    text-sm

                    shrink-0
                  "
                  >
                    ✓
                  </div>

                  <p
                    className="
                    text-sm font-semibold

                    text-blue-950
                  "
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-10">
              <a
                href="#appointment"
                className="
                inline-flex items-center justify-center

                w-full sm:w-auto

                px-8 py-4

                rounded-2xl

                bg-gradient-to-r
                from-blue-900
                via-blue-800
                to-blue-900

                text-white

                font-semibold

                shadow-[0_20px_50px_rgba(37,99,235,0.25)]

                hover:scale-[1.02]

                transition-all duration-300
              "
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}