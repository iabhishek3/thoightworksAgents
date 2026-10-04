export default function HowItWorks() {
  const steps = [
    { n: "01", title: "Map your systems", desc: "Connect your existing tools through pre-built connectors with auth and data residency handled from day one." },
    { n: "02", title: "Define agent objectives", desc: "Describe goals in plain language — the platform handles orchestration, tool selection, and guardrails." },
    { n: "03", title: "Launch with observability", desc: "Every decision and action is auditable in the dashboard, with human-in-the-loop approvals where you need them." },
    { n: "04", title: "Learn and expand", desc: "Agents improve from feedback and outcomes — add new agents per function at compute cost, not headcount." },
  ];

  return (
    <section className="how-section" id="how">
      <div className="section-inner">
        <div className="how-layout">
          <div className="how-left reveal">
            <p className="eyebrow">Process</p>
            <h2 className="heading-lg">
              From setup to
              <br />
              production in days,
              <br />
              not months.
            </h2>
            <p className="section-desc" style={{ margin: 0 }}>
              Our engineering team works alongside yours to connect, configure,
              and deploy — with full support through launch and beyond.
            </p>
          </div>
          <div className="how-right">
            {steps.map((s, i) => (
              <div key={i} className={`how-step reveal reveal-d${i + 1}`}>
                <div className="how-num">{s.n}</div>
                <div>
                  <h3 className="how-title">{s.title}</h3>
                  <div className="how-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
