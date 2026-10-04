export default function AgentGrid() {
  const agents = [
    { name: "Revenue Agent", domain: "Sales", key: "sales", desc: "Pipeline analysis, lead scoring, and deal risk assessment." },
    { name: "Research Agent", domain: "Intelligence", key: "intelligence", desc: "Competitive monitoring, trend identification, and report synthesis." },
    { name: "Engineering Agent", domain: "Development", key: "development", desc: "Incident triage, code review, and deployment automation." },
    { name: "Operations Agent", domain: "Ops", key: "ops", desc: "Workflow orchestration and bottleneck detection." },
    { name: "Finance Agent", domain: "Finance", key: "finance", desc: "P&L monitoring, cash flow forecasting, and anomaly detection." },
    { name: "Support Agent", domain: "Customer", key: "customer", desc: "Ticket classification, response drafting, and escalation routing." },
    { name: "Compliance Agent", domain: "Legal", key: "legal", desc: "Contract review, risk flagging, and regulatory monitoring." },
    { name: "Marketing Agent", domain: "Growth", key: "growth", desc: "Campaign analysis and audience segmentation." },
  ];

  return (
    <section className="section section-warm" id="agents">
      <div className="section-inner">
        <div className="section-top reveal">
          <p className="eyebrow">Agent Fleet</p>
          <h2 className="heading-lg">
            A specialist for
            <br />
            every function.
          </h2>
          <p className="section-desc">
            Pre-built agents for common business functions, each configurable
            to your processes, data, and approval workflows.
          </p>
        </div>
        <div className="agent-grid">
          {agents.map((a, i) => (
            <div key={i} className={`agent-card reveal reveal-d${(i % 4) + 1}`} data-domain={a.key}>
              <div className="agent-domain">{a.domain}</div>
              <h3 className="agent-name">{a.name}</h3>
              <div className="agent-desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
