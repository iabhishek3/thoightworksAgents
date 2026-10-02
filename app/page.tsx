export default function Home() {
  return (
    <main>
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="7" fill="#c8003c" />
              <path d="M7 10h6v2h-2v8h-2v-8H7v-2zm8 0h5l3 10h-2.5L18.8 14 17 20h-2.5l.5-10z" fill="white" />
            </svg>
            ThoughtWorks
          </a>
          <ul className="nav-links">
            <li><a href="#architecture">Architecture</a></li>
            <li><a href="#platform">Platform</a></li>
            <li><a href="#agents">Agents</a></li>
            <li><a href="#how">How It Works</a></li>
          </ul>
          <a href="mailto:info@thoughtworks.ai?subject=Agent%20Platform%20—%20Access%20Request" className="btn-nav">Request Access</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-eyebrow">Super Intelligent Agent Platform</p>
            <h1>
              Autonomous AI agents
              <br />
              for enterprise
              <br />
              operations.
            </h1>
            <p className="hero-body">
              ThoughtWorks deploys coordinated AI agents that reason through
              complexity, integrate with your systems, and execute multi-step
              workflows — continuously, reliably, at scale.
            </p>
            <div className="hero-actions">
              <a href="mailto:info@thoughtworks.ai?subject=Agent%20Platform%20—%20Access%20Request" className="btn-primary">
                Request early access
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="#architecture" className="btn-ghost">Explore the architecture</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="agent-viz">
              <div className="viz-header">
                <div className="viz-dot viz-dot-active" />
                <span>Agent Cluster — Live</span>
              </div>
              <div className="viz-nodes">
                <div className="viz-node viz-node-primary">
                  <div className="viz-node-label">Orchestrator</div>
                  <div className="viz-node-status">coordinating</div>
                </div>
                <div className="viz-connectors">
                  <div className="viz-line" />
                  <div className="viz-line" />
                  <div className="viz-line" />
                </div>
                <div className="viz-row">
                  <div className="viz-node">
                    <div className="viz-node-label">Research</div>
                    <div className="viz-node-status">analyzing</div>
                  </div>
                  <div className="viz-node">
                    <div className="viz-node-label">Revenue</div>
                    <div className="viz-node-status">forecasting</div>
                  </div>
                  <div className="viz-node">
                    <div className="viz-node-label">Ops</div>
                    <div className="viz-node-status">optimizing</div>
                  </div>
                </div>
              </div>
              <div className="viz-log">
                <div className="viz-log-line">
                  <span className="viz-ts">12:04:31</span>
                  <span className="viz-msg">Research agent indexed 847 sources</span>
                </div>
                <div className="viz-log-line">
                  <span className="viz-ts">12:04:33</span>
                  <span className="viz-msg">Revenue agent flagged 3 at-risk deals</span>
                </div>
                <div className="viz-log-line">
                  <span className="viz-ts">12:04:34</span>
                  <span className="viz-msg">Orchestrator routing insights to Ops</span>
                </div>
                <div className="viz-log-line viz-log-latest">
                  <span className="viz-ts">12:04:36</span>
                  <span className="viz-msg">Ops agent generating action plan...</span>
                  <span className="viz-cursor" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Trust bar */}
        <div className="trust-bar">
          <div className="trust-inner">
            {["SOC 2 Type II", "End-to-end encryption", "50+ integrations", "24/7 autonomous", "Human-in-the-loop"].map((t, i) => (
              <span key={i} className="trust-item">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Architecture: full dark panel ── */}
      <section className="arch-section" id="architecture">
        <div className="section-inner">
          <div className="arch-header">
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
          <div className="arch-pipeline">
            <div className="arch-pipe-label">Orchestration Loop</div>
            <div className="arch-pipe-nodes">
              {[
                { title: "Task Input", sub: "Request or trigger", color: "var(--green)" },
                { title: "Orchestrator", sub: "Reason \u2192 Plan \u2192 Act", color: "var(--accent)" },
                { title: "LLM", sub: "Reasoning engine", color: "var(--purple)" },
                { title: "Tool Execution", sub: "APIs, code, browser", color: "var(--amber)" },
                { title: "Result", sub: "Action or response", color: "var(--blue)" },
              ].map((n, i) => (
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
          <div className="arch-grid">
            {[
              { name: "Memory Layer", detail: "Short-term working memory and long-term recall across sessions. Context persists even when compute is recycled.", color: "var(--purple)" },
              { name: "Tool Gateway", detail: "Secure connections to external systems via MCP servers, REST APIs, and pre-built connectors. Auth handled automatically.", color: "var(--amber)" },
              { name: "Session Runtime", detail: "Isolated microVM per session with its own filesystem and shell. Agents can write and execute code safely.", color: "var(--green)" },
              { name: "Guardrails", detail: "Input validation, output filtering, safety checks, and human-in-the-loop controls at every decision point.", color: "var(--blue)" },
            ].map((s, i) => (
              <div key={i} className="arch-infra-card">
                <div className="arch-infra-dot" style={{ background: s.color }} />
                <div className="arch-infra-name">{s.name}</div>
                <div className="arch-infra-detail">{s.detail}</div>
              </div>
            ))}
          </div>

          {/* Live trace */}
          <div className="arch-trace">
            <div className="arch-trace-header">
              <div className="arch-trace-live" />
              Agent Trace
            </div>
            <div className="arch-trace-body">
              {[
                { ts: "00:00.000", tag: "INPUT", tagClass: "t-green", msg: 'Task received: "Analyze Q3 pipeline risks"' },
                { ts: "00:00.012", tag: "PLAN", tagClass: "t-accent", msg: "Decomposed into 3 sub-tasks" },
                { ts: "00:00.034", tag: "LLM", tagClass: "t-purple", msg: "Selected tools: CRM query, doc search" },
                { ts: "00:00.089", tag: "TOOL", tagClass: "t-amber", msg: "CRM: fetched 142 open opportunities" },
                { ts: "00:00.210", tag: "TOOL", tagClass: "t-amber", msg: "Docs: indexed 23 relevant reports" },
                { ts: "00:00.340", tag: "MEM", tagClass: "t-blue", msg: "Loaded prior Q2 analysis from long-term memory" },
                { ts: "00:00.412", tag: "LOOP", tagClass: "t-accent", msg: "Re-entering orchestration with new context" },
                { ts: "00:00.567", tag: "LLM", tagClass: "t-purple", msg: "Synthesizing findings, drafting risk report" },
                { ts: "00:00.891", tag: "OUT", tagClass: "t-green", msg: "Report ready — 3 risks, actions attached" },
              ].map((l, i) => (
                <div key={i} className={`arch-trace-line feed-anim-${i + 1}`}>
                  <span className="arch-trace-ts">{l.ts}</span>
                  <span className={`arch-trace-tag ${l.tagClass}`}>{l.tag}</span>
                  <span>{l.msg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform */}
      <section className="section" id="platform">
        <div className="section-inner">
          <div className="section-top">
            <p className="eyebrow">Platform</p>
            <h2 className="heading-lg">
              Built for enterprise
              <br />
              complexity.
            </h2>
          </div>
          <div className="bento">
            {[
              { label: "Multi-Agent Orchestration", body: "The platform coordinates specialist agents that share context, delegate sub-tasks, and converge on unified outcomes — much like a well-run team.", wide: true },
              { label: "Reasoning Engine", body: "Each agent decomposes objectives into sub-tasks, plans execution paths, and adapts when conditions change — genuine problem-solving, not scripts." },
              { label: "Full Observability", body: "Audit trail of every decision and action. Human-in-the-loop controls when you need them. Nothing runs in a black box." },
              { label: "50+ Integrations", body: "CRMs, data warehouses, issue trackers, communication tools. Connect your existing stack through secure, pre-built connectors." },
              { label: "Enterprise Security", body: "SOC 2 Type II. End-to-end encryption. Role-based access. Data residency controls. Your data never leaves your boundaries." },
              { label: "Continuous Learning", body: "Agents improve from feedback and outcomes over time — refining their approach without retraining or manual tuning." },
            ].map((c, i) => (
              <div key={i} className={`bento-card${c.wide ? " bento-wide" : ""}`}>
                <div className="bento-label">{c.label}</div>
                <p className="bento-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents */}
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
            {[
              { name: "Revenue Agent", domain: "Sales", desc: "Pipeline analysis, lead scoring, deal risk assessment, forecast generation." },
              { name: "Research Agent", domain: "Intelligence", desc: "Market analysis, competitive monitoring, trend identification, report synthesis." },
              { name: "Engineering Agent", domain: "Development", desc: "Code review, test generation, incident triage, deployment automation." },
              { name: "Operations Agent", domain: "Ops", desc: "Workflow orchestration, bottleneck detection, resource allocation." },
              { name: "Finance Agent", domain: "Finance", desc: "P&L monitoring, expense categorization, cash flow forecasting, anomaly detection." },
              { name: "Support Agent", domain: "Customer", desc: "Ticket classification, response drafting, escalation routing." },
              { name: "Compliance Agent", domain: "Legal", desc: "Contract review, risk flagging, regulatory monitoring, policy enforcement." },
              { name: "Marketing Agent", domain: "Growth", desc: "Campaign analysis, content optimization, audience segmentation." },
            ].map((a, i) => (
              <div key={i} className="agent-card">
                <div className="agent-domain">{a.domain}</div>
                <div className="agent-name">{a.name}</div>
                <div className="agent-desc">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" id="how">
        <div className="section-inner">
          <div className="how-layout">
            <div className="how-left">
              <p className="eyebrow">Process</p>
              <h2 className="heading-lg">
                From setup to
                <br />
                production in days,
                <br />
                not months.
              </h2>
              <p className="section-desc">
                Our engineering team works alongside yours to connect, configure,
                and deploy — with full support through launch and beyond.
              </p>
            </div>
            <div className="how-right">
              {[
                { n: "01", title: "Connect", desc: "Integrate your tools and data sources through our secure connector library. No custom engineering work required." },
                { n: "02", title: "Configure", desc: "Define agent objectives in plain language. Map them to your specific workflows, approval chains, and business rules." },
                { n: "03", title: "Deploy", desc: "Agents go live with full observability. Every decision logged, every action auditable through the dashboard." },
                { n: "04", title: "Scale", desc: "Add agents, expand to new teams, refine behavior from real-world performance data. Marginal cost near zero." },
              ].map((s, i) => (
                <div key={i} className="how-step">
                  <div className="how-num">{s.n}</div>
                  <div>
                    <div className="how-title">{s.title}</div>
                    <div className="how-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="access">
        <div className="cta-inner">
          <h2>
            Start building with
            <br />
            super intelligent agents.
          </h2>
          <p>
            Reach out to learn more about the ThoughtWorks Super Intelligent
            Agent Platform. Our team responds within one business day.
          </p>
          <a href="mailto:info@thoughtworks.ai?subject=Agent%20Platform%20—%20Access%20Request" className="btn-cta">
            Contact Us — info@thoughtworks.ai
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <a href="#" className="nav-logo">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="7" fill="#c8003c" />
              <path d="M7 10h6v2h-2v8h-2v-8H7v-2zm8 0h5l3 10h-2.5L18.8 14 17 20h-2.5l.5-10z" fill="white" />
            </svg>
            ThoughtWorks
          </a>
          <div className="footer-copy">&copy; 2026 ThoughtWorks, Inc. All rights reserved.</div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
