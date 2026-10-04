import DemoDashboard from "./DemoDashboard";
import TrustBar from "./TrustBar";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-top">
        <p className="hero-eyebrow">Super Intelligence</p>
        <h1>Squadly SI.</h1>
        <p className="hero-subtitle" data-type="Agents that think. Systems that act." aria-label="Agents that think. Systems that act.">
        </p>
        <p className="hero-body">
          Autonomous AI agents that reason through complexity, integrate
          with your systems, and execute — continuously, reliably, at scale.
        </p>
        <div className="hero-actions">
          <a href="mailto:team@squadly.si?subject=Squadly%20SI%20—%20Access%20Request" className="btn-primary">
            Request early access
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a href="#architecture" className="btn-ghost">Explore the architecture</a>
        </div>
      </div>

      <DemoDashboard />
      <TrustBar />
    </section>
  );
}
