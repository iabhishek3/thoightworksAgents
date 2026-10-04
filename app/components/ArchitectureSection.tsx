export default function ArchitectureSection() {
  const impactMetrics = [
    { display: "< 5 min", label: "Average Deployment" },
    { countTo: "99.9", suffix: "%", label: "Uptime SLA" },
    { display: "24/7", label: "Autonomous Operation" },
  ];

  const pipelineNodes = [
    { title: "Task Input", sub: "Request or trigger", color: "var(--green)" },
    { title: "Orchestrator", sub: "Reason \u2192 Plan \u2192 Act", color: "var(--accent)" },
    { title: "LLM", sub: "Reasoning engine", color: "var(--purple)" },
    { title: "Tool Execution", sub: "APIs, code, browser", color: "var(--amber)" },
    { title: "Result", sub: "Action or response", color: "var(--blue)" },
  ];

  const infraCards = [
    { name: "Memory Layer", detail: "Short-term and long-term recall that persists across sessions.", color: "var(--purple)" },
    { name: "Tool Gateway", detail: "Secure connections to external systems via MCP servers and REST APIs.", color: "var(--amber)" },
    { name: "Session Runtime", detail: "Isolated microVM per session with its own filesystem and shell.", color: "var(--green)" },
    { name: "Guardrails", detail: "Input validation, output filtering, and human-in-the-loop controls at every decision point.", color: "var(--blue)" },
  ];

  const traceLines = [
    { ts: "00:00.000", tag: "INPUT", tagClass: "t-green", msg: 'Task received: "Analyze Q3 pipeline risks"' },
    { ts: "00:00.012", tag: "PLAN", tagClass: "t-accent", msg: "Decomposed into 3 sub-tasks" },
    { ts: "00:00.034", tag: "LLM", tagClass: "t-purple", msg: "Selected tools: CRM query, doc search" },
    { ts: "00:00.089", tag: "TOOL", tagClass: "t-amber", msg: "CRM: fetched 142 open opportunities" },
    { ts: "00:00.210", tag: "TOOL", tagClass: "t-amber", msg: "Docs: indexed 23 relevant reports" },
    { ts: "00:00.340", tag: "MEM", tagClass: "t-blue", msg: "Loaded prior Q2 analysis from long-term memory" },
    { ts: "00:00.412", tag: "LOOP", tagClass: "t-accent", msg: "Re-entering orchestration with new context" },
    { ts: "00:00.567", tag: "LLM", tagClass: "t-purple", msg: "Synthesizing findings, drafting risk report" },
    { ts: "00:00.891", tag: "OUT", tagClass: "t-green", msg: "Report ready — 3 risks, actions attached" },
  ];

  return (
    <section className="arch-section" id="architecture">
      <div className="section-inner">
        <div className="arch-header reveal">
          <p className="eyebrow-light">Architecture</p>
          <h2 className="heading-lg-light">
            Inside the agent harness.
          </h2>
          <p className="arch-desc">
            Every agent runs inside a managed harness — an isolated runtime
            with its own orchestration loop, tool connections, memory, and
            full observability.
          </p>
        </div>

        {/* Pipeline flow */}
        <div className="arch-pipeline reveal">
          <div className="arch-pipe-label">Orchestration Loop</div>
          <div className="arch-pipe-nodes">
            {pipelineNodes.map((n, i) => (
              <div key={i} className="arch-pipe-step">
                {i > 0 && (
                  <div className="arch-pipe-arrow">
                    <div className="arch-pipe-arrow-line" />
                    <div className="arch-pipe-arrow-dot" style={{ animationDelay: `${i * 0.4}s` }} />
                  </div>
                )}
                <div className="arch-pipe-node">
                  <div className="arch-pipe-indicator" style={{ background: n.color }} />
                  <div>
                    <div className="arch-pipe-title">{n.title}</div>
                    <div className="arch-pipe-sub">{n.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure grid */}
        <div className="arch-grid reveal">
          {infraCards.map((s, i) => (
            <div key={i} className="arch-infra-card">
              <div className="arch-infra-dot" style={{ background: s.color }} />
              <h3 className="arch-infra-name">{s.name}</h3>
              <div className="arch-infra-detail">{s.detail}</div>
            </div>
          ))}
        </div>

        {/* Live trace */}
        <div className="arch-trace reveal">
          <div className="arch-trace-header">
            <div className="arch-trace-live" />
            Agent Trace
          </div>
          <div className="arch-trace-body">
            {traceLines.map((l, i) => (
              <div key={i} className={`arch-trace-line feed-anim-${i + 1}`}>
                <span className="arch-trace-ts">{l.ts}</span>
                <span className={`arch-trace-tag ${l.tagClass}`}>{l.tag}</span>
                <span>{l.msg}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact numbers — inside arch chamber */}
        <div className="arch-divider" />
        <div className="impact-grid">
          {impactMetrics.map((metric, i) => (
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
