import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/servicesSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      {/* Doctors, Testimonials, CTA sections go here next */}
    </main>
  );
}