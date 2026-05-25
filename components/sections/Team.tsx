"use client";

import { motion } from "framer-motion";

export default function Team() {

  const team = [
    {
      name: "Dr. P. Sailaputhri",
      role: "BHMS",
      image: "/team/doc1.jpg",
    },

    {
      name: "Dr. Swathi Malathi",
      role: "BHMS",
      image: "/team/doc2.jpg",
    },

    {
      name: "Dr. Ananth",
      role: "BHMS",
      image: "/team/doc3.jpg",
    },
  ];

  return (

    <motion.section
      id="team"

      initial={{
        opacity: 0,
        y: 60,
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
        margin: "-100px",
      }}

      className="
      relative overflow-hidden

      py-28 lg:py-32

      bg-gradient-to-b
      from-blue-50
      via-white
      to-blue-50

      scroll-mt-24
    "
    >

      {/* BACKGROUND GLOWS */}

      <div
        className="
        absolute top-[-180px] left-[-120px]

        w-[420px] h-[420px]

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

        px-5 sm:px-6 md:px-10 lg:px-16
      "
      >

        {/* HEADER */}

        <div className="text-center mb-20">

          <div
            className="
            inline-flex items-center gap-2

            px-5 py-2

            rounded-full

            bg-blue-100/70

            border border-blue-200

            text-blue-800

            text-sm font-medium

            shadow-lg

            mb-6
          "
          >
            ✨ Medical Team
          </div>

          <h2
            className="
            text-4xl md:text-5xl lg:text-6xl

            font-black

            tracking-tight

            text-transparent bg-clip-text

            bg-gradient-to-r
            from-blue-950
            via-blue-800
            to-blue-950
          "
          >
            Supporting Medical Team
          </h2>

          <p
            className="
            mt-6

            text-gray-600

            max-w-2xl

            mx-auto

            leading-relaxed

            text-lg
          "
          >
            A compassionate team dedicated to
            delivering personalized homoeopathic
            care with professionalism, precision,
            and patient-centered healing.
          </p>

        </div>

        {/* TEAM GRID */}

        <div
          className="
          grid grid-cols-2 md:grid-cols-3

          gap-5 md:gap-8 lg:gap-10

          justify-items-center
        "
        >

          {team.map((member, i) => {

            const isLastOdd =
              team.length % 2 !== 0 &&
              i === team.length - 1;

            return (

              <motion.div
                key={i}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                }}

                viewport={{
                  once: true,
                }}

                whileHover={{
                  y: -10,
                }}

                className={`
                group relative

                w-full max-w-[290px]

                ${
                  isLastOdd
                    ? "col-span-2 md:col-span-1"
                    : ""
                }
              `}
              >

                {/* CARD GLOW */}

                <div
                  className="
                  absolute inset-0

                  rounded-[34px]

                  bg-gradient-to-br
                  from-blue-200/40
                  via-white/20
                  to-yellow-100/40

                  blur-2xl

                  opacity-0

                  group-hover:opacity-100

                  transition duration-700
                "
                />

                {/* CARD */}

                <div
                  className="
                  relative overflow-hidden

                  rounded-[34px]

                  bg-white/75

                  backdrop-blur-2xl

                  border border-white/50

                  p-6 md:p-7

                  text-center

                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]

                  hover:shadow-[0_30px_80px_rgba(0,0,0,0.14)]

                  transition-all duration-500
                "
                >

                  {/* TOP LIGHT */}

                  <div
                    className="
                    absolute top-0 left-0

                    w-full h-24

                    bg-gradient-to-b
                    from-white/60
                    to-transparent

                    pointer-events-none
                  "
                  />

                  {/* IMAGE FRAME */}

                  <div className="flex justify-center">

                    <div
                      className="
                      relative

                      p-[2px]

                      rounded-full

                      bg-gradient-to-br
                      from-blue-200
                      via-white
                      to-yellow-200

                      shadow-xl
                    "
                    >

                      <img
                        src={member.image}

                        alt={member.name}

                        className="
                        w-28 h-28

                        md:w-32 md:h-32

                        rounded-full

                        object-cover

                        border-[5px] border-white

                        shadow-[0_15px_40px_rgba(0,0,0,0.12)]

                        transition duration-700

                        group-hover:scale-[1.04]
                      "
                      />

                    </div>

                  </div>

                  {/* NAME */}

                  <h4
                    className="
                    mt-6

                    text-lg md:text-xl

                    font-bold

                    tracking-tight

                    text-blue-950
                  "
                  >
                    {member.name}
                  </h4>

                  {/* ROLE */}

                  <div
                    className="
                    mt-3

                    inline-flex items-center justify-center

                    px-4 py-2

                    rounded-full

                    bg-blue-50

                    border border-blue-100

                    text-blue-700

                    text-sm

                    font-semibold
                  "
                  >
                    {member.role}
                  </div>

                  {/* BOTTOM LINE */}

                  <div
                    className="
                    mt-6 mx-auto

                    h-[2px]

                    w-14

                    rounded-full

                    bg-gradient-to-r
                    from-blue-400
                    via-yellow-300
                    to-blue-400

                    group-hover:w-24

                    transition-all duration-500
                  "
                  />

                </div>

              </motion.div>

            );
          })}

        </div>

      </div>

    </motion.section>

  );
}