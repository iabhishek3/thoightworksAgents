export default function ImpactNumbers() {
  const metrics = [
    { countTo: "50", suffix: "+", label: "Enterprise Integrations" },
    { display: "< 5 min", label: "Average Deployment" },
    { countTo: "99.9", suffix: "%", label: "Uptime SLA" },
    { display: "24/7", label: "Autonomous Operation" },
  ];

  return (
    <section className="impact-section">
      <div className="section-inner">
        <div className="impact-grid">
          {metrics.map((metric, i) => (
            <div key={i} className={`impact-item reveal reveal-d${i + 1}`}>
              {"countTo" in metric ? (
                <div className="impact-number" data-count-to={metric.countTo} data-count-suffix={metric.suffix}>0</div>
              ) : (
                <div className="impact-number">{metric.display}</div>
              )}
              <div className="impact-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
