import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ProcessSection } from "@/components/sections/process-section";
import { AboutSection } from "@/components/sections/about-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <ProjectsSection />
      <ProcessSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
