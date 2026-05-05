import { HeroSection } from "../../components/hero/HeroSection";
import { ServicesSection } from "../../components/services/ServicesSection";
import { ProjectsSection } from "../../components/projects/ProjectsSection";
import { WhySection } from "../../components/why/WhySection";
import { ProcessSection } from "../../components/process/ProcessSection";
import { ContactCta } from "../../components/contactCta/ContactCta";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <WhySection />
      <ProcessSection />
      <ContactCta />
    </>
  );
};
