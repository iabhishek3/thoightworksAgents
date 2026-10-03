export default function DemoDashboard() {
  const agents = [
    { name: "Research", cls: "da-research" },
    { name: "Revenue", cls: "da-revenue" },
    { name: "Ops", cls: "da-ops" },
    { name: "Support", cls: "da-support" },
  ];

  const feedItems = [
    { color: "var(--green)", text: "Research scanning 847 data sources", cls: "df-1" },
    { color: "var(--blue)", text: "Revenue pulling CRM pipeline data", cls: "df-2" },
    { color: "var(--green)", text: "Research found 23 relevant reports", cls: "df-3" },
    { color: "var(--purple)", text: "LLM cross-referencing findings", cls: "df-4" },
    { color: "var(--blue)", text: "Revenue flagged 3 at-risk deals", cls: "df-5" },
    { color: "var(--amber)", text: "Ops generating recovery actions", cls: "df-6" },
    { color: "var(--accent)", text: "Orchestrator compiling final report", cls: "df-7" },
    { color: "var(--green)", text: "Report delivered to stakeholders", cls: "df-8" },
  ];

  return (
    <div className="demo-wrap" role="img" aria-label="Animated demo of Superintelligence showing agents analyzing a pipeline and generating a risk report">
      <div className="demo">
        {/* Title bar */}
        <div className="demo-titlebar">
          <div className="demo-dots">
            <span className="demo-dot demo-dot-r" />
            <span className="demo-dot demo-dot-y" />
            <span className="demo-dot demo-dot-g" />
          </div>
          <span className="demo-title">Superintelligence</span>
          <div className="demo-live">
            <span className="demo-live-dot" />
            Live
          </div>
        </div>

        <div className="demo-body">
          {/* Left: Agent sidebar */}
          <div className="demo-sidebar">
            <div className="demo-sidebar-label">Agents</div>
            {agents.map((a, i) => (
              <div key={i} className={`demo-agent ${a.cls}`}>
                <div className="demo-agent-dot" />
                <div className="demo-agent-info">
                  <div className="demo-agent-name">{a.name}</div>
                  <div className="demo-agent-status">
                    <span className="demo-status-idle">idle</span>
                    <span className="demo-status-active">active</span>
                    <span className="demo-status-done">done</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center: Task panel */}
          <div className="demo-main">
            <div className="demo-task-header">
              <div className="demo-task-tag">Active Task</div>
              <div className="demo-task-title demo-type-in">Analyze Q3 pipeline and generate risk report</div>
            </div>

            <div className="demo-subtasks">
              <div className="demo-subtask ds-1">
                <div className="demo-check">
                  <svg className="demo-check-empty" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" /></svg>
                  <svg className="demo-check-done" width="14" height="14" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" fill="var(--green)" /><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" /></svg>
                </div>
                <span>Collect CRM data &amp; support tickets</span>
              </div>
              <div className="demo-subtask ds-2">
                <div className="demo-check">
                  <svg className="demo-check-empty" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" /></svg>
                  <svg className="demo-check-done" width="14" height="14" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" fill="var(--green)" /><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" /></svg>
                </div>
                <span>Cross-reference with market analysis</span>
              </div>
              <div className="demo-subtask ds-3">
                <div className="demo-check">
                  <svg className="demo-check-empty" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" /></svg>
                  <svg className="demo-check-done" width="14" height="14" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" fill="var(--green)" /><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" /></svg>
                </div>
                <span>Score deal risks and rank pipeline</span>
              </div>
              <div className="demo-subtask ds-4">
                <div className="demo-check">
                  <svg className="demo-check-empty" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" /></svg>
                  <svg className="demo-check-done" width="14" height="14" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" fill="var(--green)" /><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" /></svg>
                </div>
                <span>Generate executive risk report</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="demo-progress-wrap">
              <div className="demo-progress-labels">
                <span>Progress</span>
                <span className="demo-progress-pct" />
              </div>
              <div className="demo-progress-track">
                <div className="demo-progress-bar" />
              </div>
            </div>

            {/* Result card */}
            <div className="demo-result">
              <div className="demo-result-icon">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" fill="var(--green)" /><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" /></svg>
              </div>
              <div>
                <div className="demo-result-title">Report Ready</div>
                <div className="demo-result-body">3 at-risk deals identified. Recovery actions drafted. Sent to stakeholders.</div>
              </div>
            </div>
          </div>

          {/* Right: Activity feed */}
          <div className="demo-feed">
            <div className="demo-feed-label">Activity</div>
            <div className="demo-feed-items">
              {feedItems.map((item, i) => (
                <div key={i} className={`demo-feed-item ${item.cls}`}>
                  <span className="demo-feed-dot" style={{ background: item.color }} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Mini metrics */}
            <div className="demo-metrics">
              <div className="demo-metric">
                <div className="demo-metric-val dm-tasks">0</div>
                <div className="demo-metric-lbl">sources</div>
              </div>
              <div className="demo-metric">
                <div className="demo-metric-val dm-agents">4</div>
                <div className="demo-metric-lbl">agents</div>
              </div>
              <div className="demo-metric">
                <div className="demo-metric-val dm-time">0s</div>
                <div className="demo-metric-lbl">elapsed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
