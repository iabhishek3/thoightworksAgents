export default function IntegrationGrid() {
  const categories = [
    { name: "CRM & Sales", tools: ["Salesforce", "HubSpot", "Pipedrive"] },
    { name: "Data & Analytics", tools: ["Snowflake", "BigQuery", "Databricks", "Redshift"] },
    { name: "DevOps & Engineering", tools: ["GitHub", "GitLab", "Jira", "PagerDuty", "Linear"] },
    { name: "Communication", tools: ["Slack", "Microsoft Teams", "Email (SMTP)"] },
    { name: "Support", tools: ["Zendesk", "Intercom", "Freshdesk"] },
    { name: "Documents & Knowledge", tools: ["Notion", "Confluence", "Google Drive", "SharePoint"] },
    { name: "Cloud & Infrastructure", tools: ["AWS", "GCP", "Azure"] },
  ];

  return (
    <div className="integration-section">
      <div className="integration-header reveal">
        <p className="eyebrow">Integrations</p>
        <h3 className="heading-md">Connect your existing stack.</h3>
      </div>
      <div className="integration-grid">
        {categories.map((cat, i) => (
          <div key={i} className={`integration-category reveal reveal-d${i + 1}`}>
            <div className="integration-cat-label">{cat.name}</div>
            <div className="integration-pills">
              {cat.tools.map((tool, j) => (
                <span key={j} className="integration-pill">{tool}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
