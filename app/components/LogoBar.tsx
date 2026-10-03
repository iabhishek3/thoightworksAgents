export default function LogoBar() {
  const tools = [
    "Salesforce", "HubSpot", "Slack", "Teams", "Jira", "GitHub",
    "Snowflake", "BigQuery", "PagerDuty", "Zendesk", "Notion", "AWS",
  ];

  return (
    <section className="logo-bar">
      <div className="logo-bar-inner">
        <div className="logo-bar-label">Integrates with</div>
        <div className="logo-grid">
          <div className="logo-grid-track">
            {tools.map((tool, i) => (
              <span key={i} className="logo-pill">{tool}</span>
            ))}
            {/* Duplicate for seamless loop */}
            {tools.map((tool, i) => (
              <span key={`dup-${i}`} className="logo-pill" aria-hidden="true">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
