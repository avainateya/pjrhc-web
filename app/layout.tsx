import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata = {
  title:
    "Dr. P. Jagan Mohan Rao Homoeo Clinic | Trusted Homoeopathy Care in Hyderabad",

  description:
    "Dr. P. Jagan Mohan Rao Homoeo Clinic offers trusted homoeopathic treatment in Hyderabad with personalized care, holistic healing, and experienced medical expertise.",

  keywords: [
    "Dr P Jagan Mohan Rao Homoeo Clinic",
    "Homoeopathy clinic Hyderabad",
    "Best homeopathy doctor Hyderabad",
    "Dr P Sri Ramana",
    "Homeopathy clinic Rethibowli",
    "Homeopathy clinic Narsingi",
    "Homeopathy clinic Kachiguda",
  ],

  authors: [{ name: "PJR Homoeo Clinic" }],

  openGraph: {
    title:
      "Dr. P. Jagan Mohan Rao Homoeo Clinic",

    description:
      "Trusted homoeopathic care with personalized healing.",

    url: "https://drpjrhomoeoclinic.com",

    siteName:
      "Dr. P. Jagan Mohan Rao Homoeo Clinic",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_IN",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}