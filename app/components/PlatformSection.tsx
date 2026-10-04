import IntegrationGrid from "./IntegrationGrid";

export default function PlatformSection() {
  const cards = [
    { label: "Multi-Agent Orchestration", body: "Specialist agents share context, delegate sub-tasks, and converge on unified outcomes." },
    { label: "Reasoning Engine", body: "Agents decompose objectives, plan execution paths, and adapt when conditions change." },
    { label: "Full Observability", body: "Audit trail of every decision and action, with human-in-the-loop controls built in." },
    { label: "Enterprise Security", body: "SOC 2 Type II certified with end-to-end encryption and data residency controls." },
    { label: "Continuous Learning", body: "Agents improve from feedback and outcomes over time without retraining." },
  ];

  return (
    <section className="section" id="platform">
      <div className="section-inner">
        <div className="section-top reveal">
          <p className="eyebrow">Platform</p>
          <h2 className="heading-lg">
            Built for enterprise
            <br />
            complexity.
          </h2>
        </div>
        <div className="bento">
          {cards.map((c, i) => (
            <div key={i} className={`bento-card reveal reveal-d${i + 1}`}>
              <h3 className="bento-label">{c.label}</h3>
              <p className="bento-body">{c.body}</p>
            </div>
          ))}
        </div>
        <IntegrationGrid />
      </div>
    </section>
  );
}
