export default function AgentGrid() {
  const agents = [
    { name: "Revenue Agent", domain: "Sales", key: "sales", desc: "Pipeline analysis, lead scoring, deal risk assessment, forecast generation." },
    { name: "Research Agent", domain: "Intelligence", key: "intelligence", desc: "Market analysis, competitive monitoring, trend identification, report synthesis." },
    { name: "Engineering Agent", domain: "Development", key: "development", desc: "Code review, test generation, incident triage, deployment automation." },
    { name: "Operations Agent", domain: "Ops", key: "ops", desc: "Workflow orchestration, bottleneck detection, resource allocation." },
    { name: "Finance Agent", domain: "Finance", key: "finance", desc: "P&L monitoring, expense categorization, cash flow forecasting, anomaly detection." },
    { name: "Support Agent", domain: "Customer", key: "customer", desc: "Ticket classification, response drafting, escalation routing." },
    { name: "Compliance Agent", domain: "Legal", key: "legal", desc: "Contract review, risk flagging, regulatory monitoring, policy enforcement." },
    { name: "Marketing Agent", domain: "Growth", key: "growth", desc: "Campaign analysis, content optimization, audience segmentation." },
  ];

  return (
    <section className="section section-warm" id="agents">
      <div className="section-inner">
        <div className="section-top">
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
            <div key={i} className="agent-card" data-domain={a.key}>
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
