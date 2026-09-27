import CTASection from "@/app/components/sections/CTASection";
import DoctorsSection from "@/app/components/sections/DoctorsSection";
import HeroSection from "@/app/components/sections/HeroSection";
import ServicesSection from "@/app/components/sections/ServicesSection";
import TestimonialsSection from "@/app/components/sections/TestimonialsSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <DoctorsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}