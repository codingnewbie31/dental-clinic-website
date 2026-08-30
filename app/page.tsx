import DoctorsSection from "./components/sections/DoctorsSection";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/servicesSection"
import TestimonialsSection from "./components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <DoctorsSection />
      <TestimonialsSection />
      {/* Testimonials, CTA sections go here next */}
    </main>
  );
}