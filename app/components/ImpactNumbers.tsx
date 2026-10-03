export default function ImpactNumbers() {
  const metrics = [
    { number: "50+", label: "Enterprise Integrations" },
    { number: "< 5 min", label: "Average Deployment" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "Autonomous Operation" },
  ];

  return (
    <section className="impact-section">
      <div className="section-inner">
        <div className="impact-grid">
          {metrics.map((metric, i) => (
            <div key={i} className="impact-item">
              <div className="impact-number">{metric.number}</div>
              <div className="impact-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
