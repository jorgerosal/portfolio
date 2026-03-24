import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PillarsSection } from "@/components/pillars-section";
import { SkillsSection } from "@/components/skills-section";
import { WorkSection } from "@/components/work-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PillarsSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
