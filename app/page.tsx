import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Doctor from "@/components/sections/Doctor";
import Team from "@/components/sections/Team";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Clinics from "@/components/sections/Clinics";
import Appointments from "@/components/sections/Appointments";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Doctor />
      <Team />
      <WhyChooseUs />
      <Clinics />
            <Appointments />

      <Footer />
    </>
  );
}