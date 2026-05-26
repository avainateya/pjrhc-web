"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUserDoctor,
  faLeaf,
  faHandsHoldingCircle,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseUs() {
  const items = [
    {
      title: "20+ Years Experience",
      icon: faUserDoctor,
      iconColor: "text-blue-500",
      accent: "bg-blue-400",
      desc: "Trusted homoeopathic expertise with decades of compassionate patient care.",
    },

    {
      title: "Holistic Healing",
      icon: faLeaf,
      iconColor: "text-emerald-400",
      accent: "bg-emerald-400",
      desc: "Natural wellness-focused treatments that support complete mind and body balance.",
    },

    {
      title: "Personalized Care",
      icon: faHandsHoldingCircle,
      iconColor: "text-yellow-400",
      accent: "bg-yellow-400",
      desc: "Every consultation and treatment plan is tailored carefully for each patient.",
    },

    {
      title: "3 Clinic Branches",
      icon: faHospital,
      iconColor: "text-violet-400",
      accent: "bg-violet-400",
      desc: "Accessible healthcare services across multiple trusted clinic locations.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="
      relative overflow-hidden

      py-20 sm:py-28 lg:py-36

      bg-gradient-to-br
      from-[#06152f]
      via-[#0a2c67]
      to-[#0d3b87]

      text-white
    "
    >
      {/* GRID */}

      <div
        className="
        absolute inset-0

        opacity-[0.04]

        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

        bg-[size:55px_55px]
        sm:bg-[size:90px_90px]
      "
      />

      {/* GLOWS */}

      <div
        className="
        absolute top-[-180px] left-[-180px]

        w-[420px] h-[420px]

        bg-blue-500/20

        rounded-full

        blur-[120px]
      "
      />

      <div
        className="
        absolute bottom-[-180px] right-[-180px]

        w-[420px] h-[420px]

        bg-yellow-400/10

        rounded-full

        blur-[120px]
      "
      />

      {/* CONTENT */}

      <div
        className="
        relative z-10

        max-w-7xl mx-auto

        px-4 sm:px-8 lg:px-16
      "
      >
        {/* TOP */}

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
            duration: 0.7,
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

            px-4 py-2.5
            sm:px-5 sm:py-3

            rounded-full

            bg-white/[0.07]

            border border-white/10

            backdrop-blur-xl

            mb-8
          "
          >
            <div
              className="
              w-9 h-9
              sm:w-10 sm:h-10

              rounded-full

              bg-gradient-to-br
              from-yellow-300
              to-yellow-500

              flex items-center justify-center
            "
            >
              <FontAwesomeIcon
                icon={faLeaf}
                className="text-[#071739] text-xs"
              />
            </div>

            <span
              className="
              text-yellow-300

              uppercase

              tracking-[0.25em]

              text-[9px]
              sm:text-[11px]
            "
            >
              Why Patients Trust Us
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
            text-[42px]
            sm:text-6xl
            lg:text-7xl

            font-extrabold

            leading-[1.2]

            pb-4
          "
          >
            <span
              className="
              block

              bg-gradient-to-b
              from-white
              to-blue-100

              bg-clip-text
              text-transparent
            "
            >
              Thoughtful
            </span>

            <span
              className="
              block mt-2 sm:mt-4

              bg-gradient-to-r
              from-yellow-200
              via-yellow-400
              to-yellow-200

              bg-clip-text
              text-transparent
            "
            >
              Care & Healing
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            mt-6

            max-w-2xl mx-auto

            text-lg sm:text-xl

            text-white/70

            leading-relaxed
          "
          >
            Delivering trusted homoeopathic care through compassionate
            consultations, holistic wellness, and years of expertise.
          </p>
        </motion.div>

        {/* TABLET + DESKTOP */}

        <div
          className="
          hidden md:grid

          md:grid-cols-2
          xl:grid-cols-4

          gap-5 lg:gap-7

          mt-16 sm:mt-20
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

                min-h-[420px]

                rounded-[36px]

                bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]

                border border-blue-400/20

                backdrop-blur-2xl

                p-8

                flex flex-col

                shadow-[0_15px_60px_rgba(0,0,0,0.28)]

                hover:border-blue-300/40

                transition-all duration-500
              "
              >
                {/* glow */}

                <div
                  className="
                  absolute inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition duration-500

                  bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_55%)]
                "
                />

                {/* top line */}

                <div
                  className="
                  absolute top-0 left-0

                  w-full h-[1px]

                  bg-gradient-to-r
                  from-transparent
                  via-blue-300/40
                  to-transparent
                "
                />

                {/* icon */}

                <div
                  className="
                  relative z-10

                  w-[72px] h-[72px]

                  rounded-[24px]

                  bg-white

                  flex items-center justify-center

                  shadow-[0_10px_40px_rgba(255,255,255,0.16)]

                  group-hover:scale-105

                  transition duration-500
                "
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`${item.iconColor} text-[30px]`}
                  />
                </div>

                {/* CONTENT */}

                <div className="relative z-10 mt-8 flex-1 flex flex-col">
                  <h3
                    className="
                    text-[24px]

                    font-bold

                    leading-[1.15]
                  "
                  >
                    {item.title}
                  </h3>

                  {/* accent */}

                  <div
                    className={`
                    mt-4

                    h-[4px] w-10

                    rounded-full

                    ${item.accent}
                  `}
                  />

                  <p
                    className="
                    mt-5

                    text-sm

                    leading-[1.8]

                    text-white/72

                    flex-1
                  "
                  >
                    {item.desc}
                  </p>
                </div>

                {/* FOOTER */}

                <div
                  className="
                  relative z-10

                  flex items-center gap-3

                  pt-6
                "
                >
                  <div
                    className="
                    h-[3px] w-16

                    rounded-full

                    bg-gradient-to-r
                    from-yellow-300
                    to-yellow-300/10
                  "
                  />

                  <div
                    className="
                    w-3 h-3

                    rounded-full

                    bg-yellow-300

                    shadow-[0_0_18px_rgba(255,215,0,0.8)]
                  "
                  />

                  <div
                    className="
                    w-1.5 h-1.5

                    rounded-full

                    bg-yellow-300/70
                  "
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE */}

        <div
          className="
          md:hidden

          mt-14

          space-y-5
        "
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              viewport={{
                once: true,
              }}
            >
              <div
                className="
                relative overflow-hidden

                rounded-[28px]

                bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]

                border border-blue-400/20

                backdrop-blur-2xl

                p-5

                shadow-[0_10px_45px_rgba(0,0,0,0.24)]
              "
              >
                {/* glow */}

                <div
                  className="
                  absolute inset-0

                  bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_55%)]
                "
                />

                {/* top line */}

                <div
                  className="
                  absolute top-0 left-0

                  w-full h-[1px]

                  bg-gradient-to-r
                  from-transparent
                  via-blue-300/40
                  to-transparent
                "
                />

                <div className="relative z-10 flex gap-4">
                  {/* icon */}

                  <div
                    className="
                    w-[72px] h-[72px]

                    rounded-[24px]

                    bg-white

                    flex items-center justify-center

                    shadow-[0_10px_35px_rgba(255,255,255,0.14)]

                    shrink-0
                  "
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={`${item.iconColor} text-[28px]`}
                    />
                  </div>

                  {/* content */}

                  <div className="flex-1 min-w-0">
                    <h3
                      className="
                      text-[22px]

                      font-black

                      leading-[1.08]
                    "
                    >
                      {item.title}
                    </h3>

                    {/* accent */}

                    <div
                      className={`
                      mt-3

                      h-[4px] w-10

                      rounded-full

                      ${item.accent}
                    `}
                    />

                    <p
                      className="
                      mt-4

                      text-[15px]

                      leading-[1.7]

                      text-white/72
                    "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* footer */}

                <div
                  className="
                  relative z-10

                  flex items-center gap-2

                  mt-5
                "
                >
                  <div
                    className="
                    h-[3px] w-14

                    rounded-full

                    bg-gradient-to-r
                    from-yellow-300
                    to-yellow-300/10
                  "
                  />

                  <div
                    className="
                    w-3 h-3

                    rounded-full

                    bg-yellow-300

                    shadow-[0_0_18px_rgba(255,215,0,0.8)]
                  "
                  />

                  <div
                    className="
                    w-1.5 h-1.5

                    rounded-full

                    bg-yellow-300/70
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