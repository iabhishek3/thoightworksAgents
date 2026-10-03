export default function UseCases() {
  const useCases = [
    {
      eyebrow: "Revenue Operations",
      title: "Pipeline risk identified before quarterly review",
      body: "Revenue Agent analyzed 142 open deals against historical close rates, flagged 3 at-risk opportunities worth $2.4M combined, and drafted recovery actions — all before the weekly pipeline call.",
      metric: "3 hrs → 12 min",
      borderColor: "#2563eb",
    },
    {
      eyebrow: "Engineering",
      title: "Incident root cause found while on-call sleeps",
      body: "At 2:47 AM, the Engineering Agent detected elevated error rates, correlated logs across 4 services, identified a misconfigured cache TTL deployed at 11 PM, and drafted a rollback PR. The on-call engineer woke up to a solved problem.",
      metric: "MTTR reduced 74%",
      borderColor: "#16a34a",
    },
    {
      eyebrow: "Market Intelligence",
      title: "Competitive landscape report generated weekly",
      body: "Research Agent monitors 847 sources — SEC filings, patent databases, hiring posts, product changelogs — and synthesizes a weekly intelligence brief. What used to take an analyst 2 days now arrives every Monday at 8 AM.",
      metric: "2 days → automated",
      borderColor: "#7c3aed",
    },
  ];

  return (
    <section className="usecase-section" id="use-cases">
      <div className="section-inner">
        <div className="section-top">
          <p className="eyebrow">Real Outcomes</p>
          <h2 className="heading-lg">
            Agents delivering
            <br />
            measurable outcomes.
          </h2>
          <p className="section-desc" style={{ margin: '0 0 60px' }}>
            See how autonomous agents drive tangible business outcomes across enterprise teams.
          </p>
        </div>

        <div className="usecase-grid">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="usecase-card"
              style={{ borderLeftColor: useCase.borderColor }}
            >
              <p className="usecase-eyebrow">{useCase.eyebrow}</p>
              <h3 className="usecase-title">{useCase.title}</h3>
              <p className="usecase-body">{useCase.body}</p>
              <div className="usecase-metric-wrapper">
                <div className="usecase-metric">{useCase.metric}</div>
                <p className="usecase-metric-label">Time saved</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
