"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Playfair_Display } from "next/font/google";

import {
  faUserDoctor,
  faLeaf,
  faHandsHoldingCircle,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

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
      desc: "Natural wellness-focused treatments supporting complete mind and body wellness.",
    },

    {
      title: "Personalized Care",
      icon: faHandsHoldingCircle,
      iconColor: "text-yellow-400",
      accent: "bg-yellow-400",
      desc: "Every consultation and treatment plan is carefully tailored for every patient.",
    },

    {
      title: "3 Clinic Branches",
      icon: faHospital,
      iconColor: "text-violet-400",
      accent: "bg-violet-400",
      desc: "Accessible healthcare services across trusted clinic locations.",
    },
  ];

  return (
    <section
      id="why choose us"
      className="
      relative overflow-hidden

      py-28 lg:py-36

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

        opacity-[0.03]

        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

        bg-[size:90px_90px]
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
        {/* TOP */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
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

              tracking-[0.22em]

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
            leading-[0.95]

            tracking-[-0.04em]

            text-[clamp(40px,6vw,84px)]

            font-[800]
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
              Trusted Care
            </span>

            <span
              className={`
                block mt-2

                italic

                bg-gradient-to-r
                from-yellow-200
                via-yellow-400
                to-yellow-200

                bg-clip-text
                text-transparent

                ${playfair.className}
              `}
            >
              Excellence
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            mt-6

            max-w-3xl mx-auto

            text-base sm:text-lg lg:text-xl

            text-white/70

            leading-relaxed
          "
          >
            Delivering trusted homoeopathic care through compassionate
            consultations, holistic wellness, and years of medical expertise.
          </p>
        </motion.div>

        {/* CARDS */}

        <div
          className="
          mt-16 lg:mt-20

          grid
          sm:grid-cols-2
          xl:grid-cols-4

          gap-5 lg:gap-7
        "
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div
                className="
                group

                relative overflow-hidden

                min-h-[360px]

                rounded-[36px]

                bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]

                border border-blue-400/20

                backdrop-blur-2xl

                p-7 lg:p-8

                flex flex-col

                shadow-[0_15px_60px_rgba(0,0,0,0.28)]

                hover:border-blue-300/40

                transition-all duration-500
              "
              >
                <div
                  className="
                  absolute inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition duration-500

                  bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_55%)]
                "
                />

                {/* ICON */}

                <div
                  className="
                  relative z-10

                  w-[72px] h-[72px]

                  rounded-[24px]

                  bg-white

                  flex items-center justify-center

                  shadow-[0_10px_40px_rgba(255,255,255,0.16)]
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

                    text-[15px]

                    leading-[1.8]

                    text-white/72

                    flex-1
                  "
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}