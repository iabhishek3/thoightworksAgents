export default function HowItWorks() {
  const steps = [
    { n: "01", title: "Map your systems", desc: "We connect your CRM, data warehouse, ticketing, and communication tools through MCP servers and pre-built connectors. Auth, permissions, and data residency handled from day one." },
    { n: "02", title: "Define agent objectives", desc: "Describe what each agent should accomplish in plain language. The platform decomposes goals into orchestration plans, tool selections, and guardrail boundaries — no prompt engineering required." },
    { n: "03", title: "Launch with observability", desc: "Agents run inside isolated harnesses with full trace logging. Every LLM call, tool invocation, and decision point is auditable in the dashboard. Human-in-the-loop approvals where you need them." },
    { n: "04", title: "Learn and expand", desc: "Agents improve from feedback loops and outcome data. Add new agents per function, extend to additional teams. Each agent costs compute, not headcount." },
  ];

  return (
    <section className="how-section" id="how">
      <div className="section-inner">
        <div className="how-layout">
          <div className="how-left">
            <p className="eyebrow-light">Process</p>
            <h2 className="heading-lg-light">
              From setup to
              <br />
              production in days,
              <br />
              not months.
            </h2>
            <p className="arch-desc" style={{ margin: 0 }}>
              Our engineering team works alongside yours to connect, configure,
              and deploy — with full support through launch and beyond.
            </p>
          </div>
          <div className="how-right">
            {steps.map((s, i) => (
              <div key={i} className="how-step">
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
