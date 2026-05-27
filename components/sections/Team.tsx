"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export default function Team() {
  const team: TeamMember[] = [
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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        relative overflow-hidden

        py-28 md:py-32 lg:py-36

        bg-gradient-to-b
        from-blue-50
        via-white
        to-blue-50
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
        {/* HEADER */}

        <div className="text-center mb-18 lg:mb-24">
          <div
            className="
              inline-flex items-center gap-2

              px-5 py-2.5

              rounded-full

              bg-blue-100/70

              border border-blue-200

              text-blue-800

              text-sm font-medium

              shadow-lg

              mb-7
            "
          >
            ✨ Medical Experts
          </div>

          <h2
            className="
              leading-[0.95]

              tracking-[-0.04em]

              text-[clamp(38px,6vw,84px)]

              font-[800]

              text-blue-950
            "
          >
            <span className="block">
              Meet Our
            </span>

            <span
              className={`
                block

                italic

                text-transparent bg-clip-text

                bg-gradient-to-r
                from-blue-900
                via-blue-700
                to-blue-900

                ${playfair.className}
              `}
            >
              Medical Experts
            </span>
          </h2>
        </div>

        {/* MOBILE HYBRID LAYOUT */}

        <div className="md:hidden">
          {/* TOP TWO */}

          <div
            className="
              grid grid-cols-2

              gap-5

              max-w-[560px]

              mx-auto
            "
          >
            {team.slice(0, 2).map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="
                  group relative

                  w-full
                "
              >
                <Card member={member} mobile />
              </motion.div>
            ))}
          </div>

          {/* THIRD CENTERED */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="
              group relative

              mt-5

              w-[48%]

              min-w-[170px]

              mx-auto
            "
          >
            <Card member={team[2]} mobile />
          </motion.div>
        </div>

        {/* DESKTOP */}

        <div
          className="
            hidden md:grid

            md:grid-cols-3

            gap-8
            lg:gap-10
            xl:gap-14

            justify-items-center
          "
        >
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
                group relative

                w-full

                max-w-[360px]
                xl:max-w-[400px]
              "
            >
              <Card member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/* CARD */

function Card({
  member,
  mobile = false,
}: {
  member: TeamMember;
  mobile?: boolean;
}) {
  return (
    <>
      {/* CARD GLOW */}

      <div
        className="
          absolute inset-0

          rounded-[36px]

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

          rounded-[36px]

          bg-white/80

          backdrop-blur-2xl

          border border-white/60

          shadow-[0_20px_60px_rgba(0,0,0,0.08)]

          hover:shadow-[0_35px_90px_rgba(0,0,0,0.14)]

          transition-all duration-500

          h-full
        "
      >
        {/* TOP LIGHT */}

        <div
          className="
            absolute top-0 left-0

            w-full h-28

            bg-gradient-to-b
            from-white/70
            to-transparent

            pointer-events-none
          "
        />

        {/* GOLD LIGHT */}

        <div
          className="
            absolute

            top-[-40px]
            right-[-20px]

            w-32 h-32

            rounded-full

            bg-yellow-100/40

            blur-3xl
          "
        />

        <div
          className={`
            relative z-10

            text-center

            ${
              mobile
                ? "px-4 py-5"
                : "px-7 py-9 lg:px-8 lg:py-10"
            }
          `}
        >
          {/* IMAGE */}

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

                shadow-2xl
              "
            >
              <img
                src={member.image}
                alt={member.name}
                className={`
                  ${
                    mobile
                      ? "w-24 h-24"
                      : "w-32 h-32 xl:w-36 xl:h-36"
                  }

                  rounded-full

                  object-cover

                  border-[4px] border-white

                  shadow-[0_15px_40px_rgba(0,0,0,0.12)]

                  transition duration-700

                  group-hover:scale-[1.05]
                `}
              />
            </div>
          </div>

          {/* NAME */}

          <div
            className="
              min-h-[56px]

              flex items-center justify-center
            "
          >
            <h4
              className={`
                ${
                  mobile
                    ? "mt-5 text-[17px]"
                    : "mt-7 text-2xl"
                }

                font-bold

                tracking-[-0.03em]

                leading-snug

                text-blue-950
              `}
            >
              {member.name}
            </h4>
          </div>

          {/* ROLE */}

          <div
            className={`
              ${
                mobile
                  ? "mt-3 text-sm px-4 py-2"
                  : "mt-4 text-sm px-5 py-2.5"
              }

              inline-flex items-center justify-center

              rounded-full

              bg-blue-50

              border border-blue-100

              text-blue-700

              font-semibold
            `}
          >
            {member.role}
          </div>

          {/* LINE */}

          <div
            className="
              mt-6 mx-auto

              h-[2px]

              w-16

              rounded-full

              bg-gradient-to-r
              from-blue-400
              via-yellow-300
              to-blue-400

              group-hover:w-28

              transition-all duration-500
            "
          />
        </div>
      </div>
    </>
  );
}