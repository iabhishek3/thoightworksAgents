import IntegrationGrid from "./IntegrationGrid";

export default function PlatformSection() {
  const cards = [
    { label: "Multi-Agent Orchestration", body: "The platform coordinates specialist agents that share context, delegate sub-tasks, and converge on unified outcomes — much like a well-run team.", wide: true },
    { label: "Reasoning Engine", body: "Each agent decomposes objectives into sub-tasks, plans execution paths, and adapts when conditions change — genuine problem-solving, not scripts." },
    { label: "Full Observability", body: "Audit trail of every decision and action. Human-in-the-loop controls when you need them. Nothing runs in a black box." },
    { label: "50+ Integrations", body: "CRMs, data warehouses, issue trackers, communication tools. Connect your existing stack through secure, pre-built connectors." },
    { label: "Enterprise Security", body: "SOC 2 Type II. End-to-end encryption. Role-based access. Data residency controls. Your data never leaves your boundaries." },
    { label: "Continuous Learning", body: "Agents improve from feedback and outcomes over time — refining their approach without retraining or manual tuning." },
  ];

  return (
    <section className="section" id="platform">
      <div className="section-inner">
        <div className="section-top">
          <p className="eyebrow">Platform</p>
          <h2 className="heading-lg">
            Built for enterprise
            <br />
            complexity.
          </h2>
        </div>
        <div className="bento">
          {cards.map((c, i) => (
            <div key={i} className={`bento-card${c.wide ? " bento-wide" : ""}`}>
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
