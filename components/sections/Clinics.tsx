"use client";

import { motion } from "framer-motion";

export default function Clinics() {

  const clinics = [
    {
      name: "Rethibowli",

      embed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30459.487009408615!2d78.39416841083984!3d17.390857600000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb971d6788bb07%3A0x9eb5f068fa732eb4!2sP%20Jagan%20Mohan%20Rao%20Homoeo%20Clinic!5e0!3m2!1sen!2sin!4v1776079489680!5m2!1sen!2sin",

      link:
        "https://maps.app.goo.gl/e18DzTJpeBFiifVk7",
    },

    {
      name: "Narsingi",

      embed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30459.608672817896!2d78.34422348552343!3d17.390126899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9500638b9509%3A0x4bf3168c2353714c!2sDr.%20P%20Jagan%20Mohan%20Rao%20Homoeo%20Clinic!5e0!3m2!1sen!2sin!4v1776079002783!5m2!1sen!2sin",

      link:
        "https://maps.app.goo.gl/yYLQACaALpSUD8f38",
    },

    {
      name: "Kachiguda",

      embed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.4440056832527!2d78.48828152390595!3d17.390467002718903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99cf9a706d95%3A0x8e6867e70f8356d9!2sSai%20Clinic%20Ayurvedic%20And%20Homoeopathy!5e0!3m2!1sen!2sin!4v1776079550952!5m2!1sen!2sin",

      link:
        "https://www.google.com/maps?q=17.3904670,78.4882815",
    },
  ];

  return (

    <section
      id="clinics"

      className="
      relative overflow-hidden

      py-28 lg:py-36

      bg-gradient-to-b
      from-white
      via-blue-50
      to-white

      scroll-mt-24
    "
    >

      {/* BACKGROUND GLOWS */}

      <div
        className="
        absolute top-[-220px] left-[-180px]

        w-[520px] h-[520px]

        bg-blue-300/20

        blur-[130px]

        rounded-full
      "
      />

      <div
        className="
        absolute bottom-[-220px] right-[-180px]

        w-[520px] h-[520px]

        bg-yellow-200/20

        blur-[130px]

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

        px-6 md:px-12 lg:px-20
      "
      >

        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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

          className="text-center mb-20"
        >

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
            ✨ Our Healthcare Centers
          </div>

          <h2
            className="
            text-5xl md:text-6xl

            font-black

            tracking-tight

            text-transparent bg-clip-text

            bg-gradient-to-r
            from-blue-950
            via-blue-800
            to-blue-950
          "
          >
            Our Clinics
          </h2>

          <p
            className="
            text-gray-600

            mt-6

            max-w-2xl

            mx-auto

            text-lg

            leading-relaxed
          "
          >
            Experience trusted homoeopathic
            care across our thoughtfully
            designed clinic locations focused
            on comfort, accessibility, and
            holistic wellness.
          </p>

        </motion.div>

        {/* CLINIC CARDS */}

        <div
          className="
          grid grid-cols-2 md:grid-cols-3

          gap-5 lg:gap-8

          items-stretch
        "
        >

          {clinics.map((clinic, i) => (

            <motion.div
              key={i}

              initial={{
                opacity: 0,
                y: 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.7,
                delay: i * 0.15,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -12,
              }}

              className={`
              ${
                i === 2
                  ? "col-span-2 md:col-span-1 flex justify-center"
                  : ""
              }
            `}
            >

              <div
                className="
                group

                relative overflow-hidden

                rounded-[36px]

                bg-gradient-to-br
                from-blue-200/30
                via-white/40
                to-yellow-100/20

                p-[1px]

                h-full w-full

                shadow-[0_25px_80px_rgba(0,0,0,0.12)]

                transition-all duration-500

                ${
                  i === 2
                    ? "max-w-[48%] sm:max-w-[49%] md:max-w-none"
                    : ""
                }
              "
              >

                {/* GLOW */}

                <div
                  className="
                  absolute inset-0

                  opacity-0 group-hover:opacity-100

                  transition duration-700

                  bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.18),transparent_50%)]
                "
                />

                {/* CARD */}

                <div
                  className="
                  relative z-10

                  h-full

                  bg-white/75

                  backdrop-blur-2xl

                  rounded-[36px]

                  overflow-hidden

                  border border-white/40

                  flex flex-col
                "
                >

                  {/* MAP */}

                  <div className="relative">

                    <iframe
                      src={clinic.embed}

                      className="
                      w-full h-64

                      border-0

                      grayscale-[0.15]

                      group-hover:grayscale-0

                      transition duration-700
                    "

                      loading="lazy"
                    />

                    {/* OVERLAY */}

                    <div
                      className="
                      absolute inset-0

                      bg-gradient-to-t
                      from-black/50
                      via-black/10
                      to-transparent
                    "
                    />

                    {/* MAP BUTTON */}

                    <a
                      href={clinic.link}

                      target="_blank"

                      className="
                      absolute bottom-5 left-1/2

                      -translate-x-1/2

                      px-5 py-2.5

                      rounded-full

                      bg-white/90

                      backdrop-blur-xl

                      text-blue-900

                      text-sm font-semibold

                      border border-white/60

                      shadow-xl

                      hover:scale-105

                      transition-all duration-300
                    "
                    >
                      View in Maps
                    </a>

                  </div>

                  {/* CONTENT */}

                  <div
                    className="
                    p-7 text-center

                    flex-1 flex items-center justify-center
                  "
                  >

                    <h3
                      className="
                      text-2xl font-bold

                      text-blue-950

                      tracking-tight
                    "
                    >
                      {clinic.name}
                    </h3>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}
