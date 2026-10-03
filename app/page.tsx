import Nav from "./components/Nav";
import Hero from "./components/Hero";
import LogoBar from "./components/LogoBar";
import ArchitectureSection from "./components/ArchitectureSection";
import ImpactNumbers from "./components/ImpactNumbers";
import PlatformSection from "./components/PlatformSection";
import AgentGrid from "./components/AgentGrid";
import UseCases from "./components/UseCases";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="main">
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav />
      <Hero />
      <LogoBar />
      <ArchitectureSection />
      <ImpactNumbers />
      <PlatformSection />
      <AgentGrid />
      <UseCases />
      <HowItWorks />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
