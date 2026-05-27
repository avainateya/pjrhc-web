"use client";

import {
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {

  return (

    <footer
      className="
      relative overflow-hidden

      bg-gradient-to-br
      from-blue-950
      via-blue-900
      to-blue-800

      text-white
    "
    >

      {/* GLOW */}

      <div
        className="
        absolute top-[-180px] left-[-120px]

        w-[420px] h-[420px]

        bg-blue-400/10

        blur-[120px]

        rounded-full
      "
      />

      <div
        className="
        absolute bottom-[-180px] right-[-120px]

        w-[420px] h-[420px]

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

        py-14 lg:py-16
      "
      >

        {/* TOP */}

        <div
          className="
          flex flex-col lg:flex-row

          items-center lg:items-start

          justify-between

          gap-10 lg:gap-16
        "
        >

          {/* LEFT */}

          <div className="text-center lg:text-left">

            {/* TITLE */}

            <h3
              className="
              text-[clamp(28px,4vw,44px)]

              font-black

              tracking-[-0.03em]

              leading-[1.05]

              text-transparent bg-clip-text

              bg-gradient-to-r
              from-white
              via-blue-100
              to-white
            "
            >
              Dr. P. Jagan Mohan Rao
              <span
                className="
                block

                text-[clamp(18px,2vw,26px)]

                mt-2

                font-semibold

                tracking-[0.02em]

                text-yellow-300
              "
              >
                Homoeo Clinic
              </span>
            </h3>

            {/* DESCRIPTION */}

            <p
              className="
              mt-5

              text-blue-100/75

              max-w-xl

              leading-relaxed

              text-base sm:text-lg
            "
            >
              Compassionate homoeopathic care
              focused on holistic healing,
              long-term wellness, and patient trust.
            </p>

          </div>

          {/* RIGHT */}

          <div
            className="
            flex flex-col

            items-center xl:items-end

            gap-6
          "
          >

            {/* CONTACT */}

            <div className="space-y-4">

              <a
                href="tel:9948326835"

                className="
                flex items-center gap-3

                text-blue-100

                hover:text-yellow-300

                transition-all duration-300
              "
              >
                <div
                  className="
                  w-10 h-10

                  rounded-xl

                  bg-white/10

                  border border-white/10

                  flex items-center justify-center

                  shrink-0
                "
                >
                  <FaPhoneAlt className="text-sm" />
                </div>

                <span className="font-medium text-sm sm:text-base">
                  +91 99483 26835
                </span>
              </a>

              <a
                href="tel:8500263080"

                className="
                flex items-center gap-3

                text-blue-100

                hover:text-yellow-300

                transition-all duration-300
              "
              >
                <div
                  className="
                  w-10 h-10

                  rounded-xl

                  bg-white/10

                  border border-white/10

                  flex items-center justify-center

                  shrink-0
                "
                >
                  <FaPhoneAlt className="text-sm" />
                </div>

                <span className="font-medium text-sm sm:text-base">
                  +91 85002 63080
                </span>
              </a>

              <a
                href="mailto:drpjrhomoeoclinic@gmail.com"

                className="
                flex items-center gap-3

                text-blue-100

                hover:text-yellow-300

                transition-all duration-300
              "
              >
                <div
                  className="
                  w-10 h-10

                  rounded-xl

                  bg-white/10

                  border border-white/10

                  flex items-center justify-center

                  shrink-0
                "
                >
                  <FaEnvelope className="text-sm" />
                </div>

                <span className="font-medium text-sm sm:text-base break-all">
                  drpjrhomoeoclinic@gmail.com
                </span>
              </a>

            </div>

            {/* SOCIALS */}

            <div
              className="
              flex items-center gap-4

              pt-2
            "
            >

              {/* INSTAGRAM */}

              <a
                href="https://instagram.com/pjr_homoeo_clinic"

                target="_blank"

                rel="noopener noreferrer"

                className="
                w-12 h-12

                rounded-2xl

                bg-white/10

                border border-white/10

                backdrop-blur-xl

                flex items-center justify-center

                hover:bg-gradient-to-br
                hover:from-pink-500
                hover:to-orange-400

                hover:-translate-y-1

                transition-all duration-300
              "
              >
                <FaInstagram className="text-lg" />
              </a>

              {/* FACEBOOK */}

              <a
                href="#"

                className="
                w-12 h-12

                rounded-2xl

                bg-white/10

                border border-white/10

                backdrop-blur-xl

                flex items-center justify-center

                hover:bg-blue-600

                hover:-translate-y-1

                transition-all duration-300
              "
              >
                <FaFacebookF className="text-lg" />
              </a>

            </div>

          </div>

        </div>

        {/* DIVIDER */}

        <div
          className="
          mt-14

          h-px

          bg-gradient-to-r
          from-transparent
          via-white/15
          to-transparent
        "
        />

        {/* BOTTOM */}

        <div
          className="
          pt-7

          flex flex-col md:flex-row

          items-center

          justify-between

          gap-4
        "
        >

          <p
            className="
            text-sm

            text-blue-100/60

            text-center md:text-left
          "
          >
            © 2026 Dr. P. Jagan Mohan Rao Homoeo Clinic.
            All rights reserved.
          </p>

          <p
            className="
            text-sm

            text-blue-100/50

            text-center md:text-right
          "
          >
            Designed with care for holistic wellness.
          </p>

        </div>

      </div>

    </footer>

  );
}