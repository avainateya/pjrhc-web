"use client";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
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

      <div
        className="
        relative z-10

        max-w-7xl mx-auto

        px-6 md:px-10 lg:px-16

        py-14
      "
      >

        {/* TOP */}

        <div
          className="
          flex flex-col lg:flex-row

          items-center lg:items-start

          justify-between

          gap-12
        "
        >

          {/* LEFT */}

          <div className="text-center lg:text-left">

            <h3
              className="
              text-3xl

              font-black

              tracking-tight
            "
            >
              Dr. P. Jagan Mohan Rao Homoeo Clinic
            </h3>

            <p
              className="
              mt-4

              text-blue-100/75

              max-w-md

              leading-relaxed
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

            items-center lg:items-end

            gap-5
          "
          >

            {/* CONTACT */}

            <div className="space-y-3">

              <a
                href="tel:9948326835"

                className="
                flex items-center gap-3

                text-blue-100

                hover:text-yellow-300

                transition
              "
              >
                <FaPhoneAlt className="text-sm" />
                <span className="font-medium">
                  +91 99483 26835
                </span>
              </a>

              <a
                href="tel:8500263080"

                className="
                flex items-center gap-3

                text-blue-100

                hover:text-yellow-300

                transition
              "
              >
                <FaPhoneAlt className="text-sm" />
                <span className="font-medium">
                  +91 85002 63080
                </span>
              </a>

              <a
                href="mailto:drpjrhomoeoclinic@gmail.com"

                className="
                flex items-center gap-3

                text-blue-100

                hover:text-yellow-300

                transition
              "
              >
                <FaEnvelope className="text-sm" />
                <span className="font-medium">
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

              <a
                href="#"

                className="
                w-11 h-11

                rounded-2xl

                bg-white/10

                border border-white/10

                backdrop-blur-xl

                flex items-center justify-center

                hover:bg-white/20
                hover:-translate-y-1

                transition-all duration-300
              "
              >
                <FaInstagram className="text-lg" />
              </a>

              <a
                href="#"

                className="
                w-11 h-11

                rounded-2xl

                bg-white/10

                border border-white/10

                backdrop-blur-xl

                flex items-center justify-center

                hover:bg-white/20
                hover:-translate-y-1

                transition-all duration-300
              "
              >
                <FaFacebookF className="text-lg" />
              </a>

              <a
                href="#"

                className="
                w-11 h-11

                rounded-2xl

                bg-white/10

                border border-white/10

                backdrop-blur-xl

                flex items-center justify-center

                hover:bg-white/20
                hover:-translate-y-1

                transition-all duration-300
              "
              >
                <FaYoutube className="text-lg" />
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div
          className="
          mt-12 pt-6

          border-t border-white/10

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
          "
          >
            © 2026 PJR Homoeo Clinic. All rights reserved.
          </p>

          <p
            className="
            text-sm

            text-blue-100/50
          "
          >
            Designed with care for holistic wellness.
          </p>

        </div>

      </div>

    </footer>

  );
}