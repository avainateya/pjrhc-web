"use client";

import { motion } from "framer-motion";
import { GiCaduceus } from "react-icons/gi";

export default function Hero() {
  return (
    <section
      className="
      relative overflow-hidden

      bg-gradient-to-br
      from-[#071739]
      via-[#0B2A63]
      to-[#103B87]

      text-white

      pt-28 lg:pt-36
      pb-20
    "
    >
      {/* BACKGROUND LIGHTS */}

      <div
        className="
        absolute top-[-250px] left-[-180px]

        w-[600px] h-[600px]

        bg-blue-400/20

        blur-[140px]

        rounded-full
      "
      />

      <div
        className="
        absolute bottom-[-250px] right-[-180px]

        w-[600px] h-[600px]

        bg-cyan-300/10

        blur-[140px]

        rounded-full
      "
      />

      {/* GRID */}

      <div
        className="
        absolute inset-0

        opacity-[0.03]

        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

        bg-[size:90px_90px]
      "
      />

      <div
        className="
        relative z-10

        max-w-7xl mx-auto

        px-6 md:px-12 lg:px-20
      "
      >
        <div
          className="
          grid lg:grid-cols-[1.05fr_0.95fr]

          gap-16 lg:gap-20

          items-center
        "
        >
          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* BADGE */}

            <div
              className="
              inline-flex items-center gap-3

              px-4 sm:px-5
              py-3

              rounded-full

              bg-white/[0.07]

              border border-white/10

              backdrop-blur-xl

              mb-8
            "
            >
              <div
                className="
                w-9 h-9 sm:w-10 sm:h-10 rounded-full

                bg-gradient-to-br
                from-yellow-300
                to-yellow-500

                flex items-center justify-center
              "
              >
                <GiCaduceus className="w-5 h-5 text-[#071739]" />
              </div>

              <span
                className="
                text-yellow-300

                uppercase

                tracking-[0.22em]

                text-[10px] sm:text-[11px]
              "
              >
                Holistic Homoeopathy
              </span>
            </div>

            {/* TITLE */}

            <h1
              className="
              text-[42px]
              xs:text-[50px]
              sm:text-[68px]
              md:text-[82px]
              lg:text-[108px]

              font-black

              leading-[0.9]

              tracking-[-0.07em]
            "
            >
              <span
                className="
                block

                text-transparent bg-clip-text

                bg-gradient-to-b
                from-white
                to-blue-100
              "
              >
                Care
              </span>

              <span className="block text-white">
                That Feels
              </span>

              <span
                className="
                block

                text-transparent bg-clip-text

                bg-gradient-to-r
                from-yellow-200
                via-yellow-400
                to-yellow-200
              "
              >
                Personal
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
              mt-7 sm:mt-8

              max-w-2xl

              text-base sm:text-lg lg:text-xl

              leading-relaxed

              text-white/70
            "
            >
              Bringing together trusted
              homoeopathic expertise,
              calm consultations, and
              thoughtful healing designed
              around every individual.
            </p>

            {/* BUTTONS */}

            <div
              className="
              flex flex-col sm:flex-row

              gap-4 sm:gap-5

              mt-10 sm:mt-12
            "
            >
              <a
                href="#appointment"
                className="
                group relative overflow-hidden

                px-8 sm:px-10
                py-4

                rounded-2xl

                bg-gradient-to-r
                from-yellow-300
                via-yellow-400
                to-yellow-300

                text-[#071739]

                font-bold

                text-sm sm:text-base

                shadow-[0_20px_60px_rgba(255,215,0,0.28)]

                hover:scale-[1.03]

                transition-all duration-500
              "
              >
                <div
                  className="
                  absolute inset-0

                  opacity-0 group-hover:opacity-100

                  bg-white/20

                  transition duration-500
                "
                />

                <span className="relative z-10">
                  Book Appointment
                </span>
              </a>

              <a
                href="#services"
                className="
                px-8 sm:px-10
                py-4

                rounded-2xl

                bg-white/[0.07]

                border border-white/10

                backdrop-blur-xl

                text-white font-medium

                text-sm sm:text-base

                hover:bg-white/[0.1]

                transition-all duration-500
              "
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="
              relative overflow-hidden

              rounded-[32px] sm:rounded-[38px]

              bg-[#0B2555]/70

              border border-blue-400/10

              backdrop-blur-3xl

              shadow-[0_35px_100px_rgba(0,0,0,0.28)]

              p-5 sm:p-6 lg:p-8
            "
            >
              {/* LIGHT */}

              <div
                className="
                absolute inset-0

                bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.10),transparent_55%)]

                pointer-events-none
              "
              />

              <div className="relative z-10">
                {/* HEADER */}

                <div
                  className="
                  flex items-center justify-between

                  mb-6 sm:mb-8
                "
                >
                  <div>
                    <p
                      className="
                      text-yellow-300

                      uppercase

                      tracking-[0.2em]

                      text-[10px] sm:text-[11px]
                    "
                    >
                      Trusted Excellence
                    </p>

                    <h3
                      className="
                      text-xl sm:text-2xl lg:text-3xl

                      font-black

                      mt-2
                    "
                    >
                      Clinic Information
                    </h3>
                  </div>
                </div>

                {/* STATS */}

                <div
                  className="
                  flex items-stretch justify-between

                  gap-3 sm:gap-5
                "
                >
                  {[
                    {
                      value: "20+",
                      label: "Years",
                      width: "flex-[0.9]",
                    },

                    {
                      value: "50K+",
                      label: "Patients",
                      width: "flex-[1.2]",
                    },

                    {
                      value: "3",
                      label: "Clinics",
                      width: "flex-[0.9]",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`
                        ${item.width}

                        relative

                        rounded-[20px] sm:rounded-[24px]

                        bg-[#081D46]/80

                        border border-blue-400/10

                        backdrop-blur-2xl

                        px-2 sm:px-3
                        py-5 sm:py-6

                        min-w-0

                        flex flex-col items-center justify-center

                        text-center

                        hover:bg-[#09214f]

                        transition-all duration-500
                      `}
                    >
                      <div
                        className="
                        absolute inset-0

                        bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.08),transparent_55%)]

                        pointer-events-none
                      "
                      />

                      <div
                        className="
                        relative z-10

                        flex flex-col items-center

                        w-full
                      "
                      >
                        <h2
                          className="
                          w-full

                          text-center

                          text-[clamp(10px,4.2vw,28px)]

                          font-black

                          leading-none

                          whitespace-nowrap

                          text-transparent bg-clip-text

                          bg-gradient-to-r
                          from-yellow-200
                          via-yellow-400
                          to-yellow-200
                        "
                        >
                          {item.value}
                        </h2>

                        <p
                          className="
                          mt-2 sm:mt-3

                          text-[8px]
                          min-[380px]:text-[9px]
                          sm:text-xs

                          uppercase

                          tracking-[0.14em]

                          text-white/65

                          leading-relaxed
                        "
                        >
                          {item.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}