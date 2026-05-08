import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { JourneySection } from "@/components/JourneySection";
import { Navbar } from "@/components/Navbar";
import { ProjectHighlightSection } from "@/components/ProjectHighlightSection";
import { TechStackSection } from "@/components/TechStackSection";
import { WorkSection } from "@/components/WorkSection";
import {
  caseStudies,
  journeyStops,
  strengths,
  technologies,
} from "@/data/portfolio";

export default function PortfolioLandingPage() {
  return (
    <main className="portfolio-page">
      <Navbar />
      <HeroSection strengths={strengths} />
      <AboutSection />
      <JourneySection journeyStops={journeyStops} />
      <WorkSection caseStudies={caseStudies} />
      <TechStackSection technologies={technologies} />
      <ProjectHighlightSection />
      <ContactSection />
      <Footer />
    </main>
  );
}