import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ArchitectureSection from "./components/ArchitectureSection";
import PlatformSection from "./components/PlatformSection";
import AgentGrid from "./components/AgentGrid";
import UseCases from "./components/UseCases";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import ScrollAnimations from "./components/ScrollAnimations";

export default function Home() {
  return (
    <main id="main">
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav />
      <Hero />
      <ArchitectureSection />
      <PlatformSection />
      <AgentGrid />
      <UseCases />
      <HowItWorks />
      <FAQ />
      <CTASection />
      <Footer />
      <ScrollAnimations />
    </main>
  );
}
