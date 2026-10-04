export default function UseCases() {
  const useCases = [
    {
      eyebrow: "Revenue Operations",
      title: "Pipeline risk identified before quarterly review",
      body: "Revenue Agent analyzed 142 open deals, flagged 3 at-risk opportunities worth $2.4M, and drafted recovery actions before the pipeline call.",
      metric: "3 hrs → 12 min",
      metricLabel: "Time saved",
      borderColor: "#2563eb",
    },
    {
      eyebrow: "Engineering",
      title: "Incident root cause found while on-call sleeps",
      body: "Engineering Agent detected elevated error rates at 2:47 AM, correlated logs across 4 services, and drafted a rollback PR before the on-call engineer woke up.",
      metric: "MTTR reduced 74%",
      metricLabel: "Resolution improvement",
      borderColor: "#16a34a",
    },
    {
      eyebrow: "Market Intelligence",
      title: "Competitive landscape report generated weekly",
      body: "Research Agent monitors 847 sources and synthesizes a weekly intelligence brief that used to take an analyst 2 days.",
      metric: "2 days → automated",
      metricLabel: "Fully automated",
      borderColor: "#7c3aed",
    },
  ];

  return (
    <section className="usecase-section" id="use-cases">
      <div className="section-inner">
        <div className="section-top reveal">
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

      </div>
        <div className="usecase-track">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`usecase-card reveal reveal-d${index + 1}`}
              style={{ borderLeftColor: useCase.borderColor }}
            >
              <p className="usecase-eyebrow">{useCase.eyebrow}</p>
              <h3 className="usecase-title">{useCase.title}</h3>
              <p className="usecase-body">{useCase.body}</p>
              <div className="usecase-metric-wrapper">
                <div className="usecase-metric">{useCase.metric}</div>
                <p className="usecase-metric-label">{useCase.metricLabel}</p>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
