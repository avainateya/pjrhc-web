"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUserMd,
  faLeaf,
  faHandsHelping,
  faClinicMedical,
} from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseUs() {

  const items = [
    {
      title: "20+ Years Experience",
      icon: faUserMd,
      color: "text-blue-500",
    },

    {
      title: "Holistic Healing",
      icon: faLeaf,
      color: "text-emerald-400",
    },

    {
      title: "Personalized Care",
      icon: faHandsHelping,
      color: "text-yellow-400",
    },

    {
      title: "3 Clinic Branches",
      icon: faClinicMedical,
      color: "text-violet-400",
    },
  ];

  return (

    <section
      id="why choose us"

      className="
      relative overflow-hidden

      py-24 lg:py-32

      bg-gradient-to-br
      from-[#071739]
      via-[#0B2A63]
      to-[#103B87]

      text-white
    "
    >

      {/* BACKGROUND LIGHTS */}

      <div
        className="
        absolute top-[-200px] left-[-180px]

        w-[500px] h-[500px]

        bg-blue-400/20

        blur-[120px]

        rounded-full
      "
      />

      <div
        className="
        absolute bottom-[-220px] right-[-180px]

        w-[500px] h-[500px]

        bg-yellow-300/10

        blur-[120px]

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

        {/* TOP SECTION */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}

          className="text-center"
        >

          {/* BADGE */}

          <div
            className="
            inline-flex items-center gap-3

            px-5 py-3

            rounded-full

            bg-white/[0.06]

            border border-white/10

            backdrop-blur-xl

            mb-8
          "
          >

            <div
              className="
              w-10 h-10 rounded-full

              bg-gradient-to-br
              from-yellow-300
              to-yellow-500

              flex items-center justify-center
            "
            >

              <FontAwesomeIcon
                icon={faLeaf}
                className="text-[#071739] text-sm"
              />

            </div>

            <span
              className="
              text-yellow-300

              uppercase

              tracking-[0.25em]

              text-[11px]
            "
            >
              Why Patients Trust Us
            </span>

          </div>

          {/* TITLE */}

          <h2
            className="
            text-5xl sm:text-6xl lg:text-7xl

            font-black

            leading-[1.08]

            tracking-[-0.06em]
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
              Thoughtful
            </span>

            <span
              className="
              block mt-3

              text-transparent bg-clip-text

              bg-gradient-to-r
              from-yellow-200
              via-yellow-400
              to-yellow-200
            "
            >
              Care & Healing
            </span>

          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            mt-8

            max-w-2xl mx-auto

            text-base sm:text-lg

            text-white/70

            leading-relaxed
          "
          >
            Delivering trusted homoeopathic
            care through compassionate
            consultations, holistic wellness,
            and years of expertise.
          </p>

        </motion.div>

        {/* CARDS */}

        <div
          className="
          mt-16

          grid grid-cols-2
          lg:grid-cols-4

          gap-4 sm:gap-6
        "
        >

          {items.map((item, i) => (

            <motion.div
              key={i}

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -10,
              }}
            >

              <div
                className="
                group

                relative overflow-hidden

                h-full min-h-[240px] sm:min-h-[260px]

                rounded-[32px]

                bg-gradient-to-b
                from-white/[0.09]
                to-white/[0.04]

                border border-white/10

                backdrop-blur-3xl

                p-5 sm:p-6

                flex flex-col
                justify-between

                shadow-[0_25px_80px_rgba(0,0,0,0.22)]

                hover:-translate-y-2
                hover:border-yellow-300/20

                transition-all duration-500
              "
              >

                {/* GLOW */}

                <div
                  className="
                  absolute inset-0

                  opacity-0 group-hover:opacity-100

                  bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.12),transparent_55%)]

                  transition duration-500

                  pointer-events-none
                "
                />

                {/* TOP LIGHT */}

                <div
                  className="
                  absolute top-0 left-0

                  w-full h-[1px]

                  bg-gradient-to-r
                  from-transparent
                  via-yellow-300/40
                  to-transparent
                "
                />

                {/* ICON */}

                <div className="relative z-10">

                  <div
                    className="
                    w-[58px] h-[58px]
                    sm:w-[64px] sm:h-[64px]

                    rounded-[22px]

                    bg-gradient-to-br
                    from-white
                    to-blue-100

                    flex items-center justify-center

                    shadow-[0_15px_40px_rgba(255,255,255,0.12)]

                    group-hover:scale-110
                    group-hover:rotate-3

                    transition duration-500
                  "
                  >

                    <FontAwesomeIcon
                      icon={item.icon}
                      className={`${item.color} text-xl sm:text-2xl`}
                    />

                  </div>

                </div>

                {/* CONTENT */}

                <div className="relative z-10 mt-7">

                  <h3
                    className="
                    text-[18px]
                    sm:text-[22px]
                    lg:text-[24px]

                    font-bold

                    leading-[1.25]
                  "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                    mt-3

                    text-white/65

                    leading-relaxed

                    text-xs sm:text-sm
                  "
                  >
                    Providing compassionate,
                    thoughtful, and trusted
                    healthcare experiences
                    tailored to every patient.
                  </p>

                </div>

                {/* FOOTER */}

                <div
                  className="
                  relative z-10

                  mt-6

                  flex items-center gap-3
                "
                >

                  <div
                    className="
                    h-[2px] w-14

                    rounded-full

                    bg-gradient-to-r
                    from-yellow-300
                    to-transparent
                  "
                  />

                  <div
                    className="
                    w-2 h-2

                    rounded-full

                    bg-yellow-300
                  "
                  />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}
