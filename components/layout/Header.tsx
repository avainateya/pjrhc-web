"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GiCaduceus } from "react-icons/gi";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Header() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [active, setActive] =
    useState<string>("");

  const navItems = [
    "Our Physician",
    "Team",
    "Why Choose Us",
    "Clinics",
  ];

  const isAtHero = () =>
    window.scrollY < 100;

  useEffect(() => {
    const sections =
      document.querySelectorAll(
        "section[id]"
      );

    const handleScroll = () => {
      if (isAtHero()) setActive("");
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting
            ) {
              setActive(
                entry.target.id
              );
            }
          });
        },

        {
          rootMargin:
            "-45% 0px -45% 0px",

          threshold: 0,
        }
      );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <header className="fixed w-full z-50">
      {/* DESKTOP NAVBAR */}

      <div
        className="
        hidden min-[900px]:block

        bg-white/85

        backdrop-blur-2xl

        border-b border-blue-100/80

        shadow-[0_10px_40px_rgba(0,0,0,0.06)]
      "
      >
        <div
          className="
          w-full

          flex items-center justify-between

          px-5
          sm:px-8
          md:px-12
          lg:px-20
          xl:px-28
          2xl:px-36
          3xl:px-44

          py-3
        "
        >
          {/* LOGO */}

          <a
            href="#"
            className="
            flex items-center gap-4

            shrink-0
          "
          >
            <div
              className="
              relative

              w-12 h-12

              rounded-full

              flex items-center justify-center

              bg-gradient-to-br
              from-blue-50
              to-white

              border border-blue-200

              text-blue-700

              shadow-md
            "
            >
              <div
                className="
                absolute inset-0

                rounded-full

                bg-gradient-to-br
                from-blue-400/10
                to-transparent
              "
              />

              <GiCaduceus className="w-7 h-7 relative z-10" />
            </div>

            <div className="leading-tight">
              <span
                className={`
                ${playfair.className}

                block

                text-lg xl:text-[22px]

                font-semibold

                tracking-[0.3px]

                text-[#071739]

                whitespace-nowrap
              `}
              >
                Dr. P. Jagan Mohan Rao
              </span>

              <span
                className="
                block

                text-[11px]

                text-blue-700

                tracking-[3px]

                uppercase

                font-medium
              "
              >
                Homoeo Clinic
              </span>
            </div>
          </a>

          {/* NAVIGATION */}

          <nav
            className="
            flex items-center

            gap-4
            xl:gap-6
            2xl:gap-8

            text-gray-700

            font-medium
          "
          >
            {navItems.map((item) => {
              const id =
                item ===
                "Why Choose Us"
                  ? "why choose us"
                  : item.toLowerCase();

              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`
                  relative

                  text-[15px]
                  xl:text-[16px]
                  2xl:text-[17px]

                  transition-all duration-300

                  hover:text-blue-700

                  whitespace-nowrap

                  ${
                    active === id
                      ? "text-blue-700 font-semibold"
                      : ""
                  }
                `}
                >
                  {item}

                  <span
                    className={`
                    absolute left-0 -bottom-1

                    h-[2px]

                    bg-gradient-to-r
                    from-blue-600
                    to-blue-800

                    transition-all duration-300

                    ${
                      active === id
                        ? "w-full"
                        : "w-0 hover:w-full"
                    }
                  `}
                  />
                </a>
              );
            })}

            {/* CTA */}

            <a
              href="#appointment"
              className="
              ml-2

              bg-gradient-to-r
              from-blue-700
              to-blue-900

              hover:from-blue-800
              hover:to-blue-950

              text-white

              text-[15px]

              py-2.5
              px-5

              rounded-2xl

              whitespace-nowrap

              shadow-[0_10px_30px_rgba(37,99,235,0.25)]

              transition-all duration-300
            "
            >
              Book Appointment
            </a>
          </nav>
        </div>
      </div>

      {/* MOBILE + TABLET NAVBAR */}

      <div className="min-[900px]:hidden px-3 pt-3">
        <div
          className="
          flex items-center justify-between

          bg-white/85

          backdrop-blur-2xl

          rounded-2xl

          border border-white/40

          px-4 py-3

          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        "
        >
          {/* LEFT */}

          <div className="flex items-center gap-3">
            <div
              className="
              w-10 h-10

              flex items-center justify-center

              rounded-full

              border border-blue-200

              bg-gradient-to-br
              from-blue-50
              to-white

              text-blue-700
            "
            >
              <GiCaduceus className="w-5 h-5" />
            </div>

            <div>
              <p
                className={`
                ${playfair.className}

                text-sm

                font-semibold

                text-[#071739]
              `}
              >
                Dr. P. Jagan Mohan Rao
              </p>

              <p
                className="
                text-[10px]

                text-blue-700

                uppercase

                tracking-[2px]
              "
              >
                Homoeo Clinic
              </p>
            </div>
          </div>

          {/* MENU BUTTON */}

          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="
            p-2.5

            rounded-xl

            bg-blue-50

            text-blue-700

            border border-blue-100
          "
          >
            {menuOpen ? (
              <HiXMark className="w-5 h-5" />
            ) : (
              <HiBars3 className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={
            menuOpen
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: -20,
                }
          }
          transition={{
            duration: 0.25,
          }}
          className="mt-3"
        >
          {menuOpen && (
            <div
              className="
              bg-white/95

              backdrop-blur-2xl

              rounded-2xl

              border border-white/40

              shadow-[0_20px_50px_rgba(0,0,0,0.08)]

              p-4

              space-y-2
            "
            >
              {navItems.map((item) => {
                const id =
                  item ===
                  "Why Choose Us"
                    ? "why choose us"
                    : item.toLowerCase();

                return (
                  <a
                    key={item}
                    href={`#${id}`}
                    onClick={() => {
                      setMenuOpen(
                        false
                      );

                      setActive(id);
                    }}
                    className={`
                    block

                    text-center

                    py-3

                    rounded-xl

                    transition-all duration-300

                    ${
                      active === id
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "text-gray-700 hover:bg-blue-50"
                    }
                  `}
                  >
                    {item}
                  </a>
                );
              })}

              <a
                href="#appointment"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="
                block

                text-center

                bg-gradient-to-r
                from-blue-700
                to-blue-900

                text-white

                py-3

                rounded-xl

                font-medium

                shadow-[0_10px_30px_rgba(37,99,235,0.2)]
              "
              >
                Book Appointment
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </header>
  );
}