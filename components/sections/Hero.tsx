"use client";

import { motion } from "framer-motion";
import { GiCaduceus } from "react-icons/gi";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Hero() {
  return (
    <section
      className="
      relative overflow-hidden

      min-h-screen

      flex items-center

      bg-gradient-to-br
      from-[#071739]
      via-[#0B2A63]
      to-[#103B87]

      text-white

      py-20
      sm:py-24
      lg:py-16
      xl:py-20
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

      {/* CONTAINER */}

      <div
        className="
        relative z-10

        w-full

        px-5
        sm:px-8
        md:px-12
        lg:px-16
        xl:px-24
        2xl:px-32
      "
      >
        <div
          className="
          grid

          lg:grid-cols-[1.15fr_0.85fr]

          gap-10
          lg:gap-12
          xl:gap-20

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
              py-2.5

              rounded-full

              bg-white/[0.07]

              border border-white/10

              backdrop-blur-xl

              mb-6
            "
            >
              <div
                className="
                w-8 h-8 sm:w-9 sm:h-9 rounded-full

                bg-gradient-to-br
                from-yellow-300
                to-yellow-500

                flex items-center justify-center
              "
              >
                <GiCaduceus className="w-4 h-4 text-[#071739]" />
              </div>

              <span
                className="
                text-yellow-300

                uppercase

                tracking-[0.22em]

                text-[9px] sm:text-[10px]
              "
              >
                Trusted Homoeopathic Care
              </span>
            </div>

            {/* TITLE */}

            <h1
              className="
              leading-[0.9]

              tracking-[-0.045em]

              text-[clamp(38px,6vw,108px)]

              font-[800]
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
                Trusted
              </span>

              <span
                className="
                block

                text-white
              "
              >
                Care That
              </span>

              <span
                className={`
                  block

                  italic

                  font-[600]

                  tracking-[-0.03em]

                  text-transparent bg-clip-text

                  bg-gradient-to-r
                  from-yellow-100
                  via-yellow-300
                  to-yellow-100

                  ${playfair.className}
                `}
              >
                Feels Personal
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
              mt-5

              max-w-2xl

              text-sm
              sm:text-base
              lg:text-lg
              xl:text-[20px]

              leading-relaxed

              text-white/72
            "
            >
              Providing trusted homoeopathic care
              through personalized consultations,
              natural healing, and compassionate
              long-term treatment focused on every
              individual’s well-being.
            </p>

            {/* BUTTONS */}

            <div
              className="
              flex flex-col sm:flex-row

              gap-3 sm:gap-4

              mt-7
            "
            >
              <a
                href="#appointment"
                className="
                group relative overflow-hidden

                px-7 sm:px-9
                py-3.5

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
                  Book Consultation
                </span>
              </a>

              <a
                href="#services"
                className="
                px-7 sm:px-9
                py-3.5

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
                Explore Treatments
              </a>
            </div>

            {/* TRUST LINE */}

            <p
              className="
              mt-4

              text-sm sm:text-base

              text-white/55

              leading-relaxed
            "
            >
              Trusted by thousands of patients for
              compassionate and personalized
              homoeopathic care.
            </p>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
            w-full
            max-w-[560px]
            xl:max-w-[680px]

            ml-auto
          "
          >
            <div
              className="
              relative overflow-hidden

              rounded-[30px]

              bg-[#0B2555]/70

              border border-blue-400/10

              backdrop-blur-3xl

              shadow-[0_35px_100px_rgba(0,0,0,0.28)]

              p-5 sm:p-6 lg:p-6 xl:p-7
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

                <div className="mb-5 sm:mb-6">
                  <p
                    className="
                    text-yellow-300

                    uppercase

                    tracking-[0.2em]

                    text-[10px]
                  "
                  >
                    Trusted Excellence
                  </p>

                  <h3
                    className="
                    text-xl sm:text-2xl lg:text-[28px]

                    font-black

                    mt-2
                  "
                  >
                    Clinic Information
                  </h3>
                </div>

                {/* STATS */}

                <div
                  className="
                  flex items-stretch justify-between

                  gap-3
                "
                >
                  {[
                    {
                      value: "20+",
                      label: "Years Experience",
                      width: "flex-[1]",
                    },

                    {
                      value: "50K+",
                      label: "Patients Treated",
                      width: "flex-[1.2]",
                    },

                    {
                      value: "3",
                      label: "Branches",
                      width: "flex-[1]",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`
                        ${item.width}

                        relative

                        rounded-[20px]

                        bg-[#081D46]/80

                        border border-blue-400/10

                        backdrop-blur-2xl

                        px-2 py-4 sm:py-5

                        min-w-0

                        flex flex-col items-center justify-center

                        text-center
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

                          text-[clamp(15px,3vw,34px)]

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
                          mt-2

                          text-[8px]
                          sm:text-[10px]

                          uppercase

                          tracking-[0.12em]

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