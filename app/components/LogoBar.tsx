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
          {tools.map((tool, i) => (
            <span key={i} className="logo-pill">{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
