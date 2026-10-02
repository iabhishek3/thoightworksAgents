export default function Home() {
  return (
    <main>
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="7" fill="#e6007e" />
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
        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-eyebrow">Super Intelligent Agent Platform</p>
            <h1>
              AI agents that
              <br />
              run your business
              <br />
              operations.
            </h1>
            <p className="hero-body">
              ThoughtWorks deploys autonomous, coordinated AI agents into your
              organization. They reason through complexity, integrate with your
              systems, and execute multi-step workflows — continuously.
            </p>
            <div className="hero-actions">
              <a href="mailto:info@thoughtworks.ai?subject=Agent%20Platform%20—%20Access%20Request" className="btn-primary">
                Request early access
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="#how" className="btn-ghost">See how it works</a>
            </div>
            <div className="hero-proof">
              <div className="proof-item">
                <span className="proof-value">SOC 2</span>
                <span className="proof-label">Certified</span>
              </div>
              <div className="proof-divider" />
              <div className="proof-item">
                <span className="proof-value">50+</span>
                <span className="proof-label">Integrations</span>
              </div>
              <div className="proof-divider" />
              <div className="proof-item">
                <span className="proof-value">24/7</span>
                <span className="proof-label">Autonomous</span>
              </div>
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
      </section>

      {/* ── Architecture: Agent Harness Flow ── */}
      <section className="section section-alt" id="architecture">
        <div className="section-inner">
          <div className="section-top" style={{ textAlign: 'center' }}>
            <p className="eyebrow">Architecture</p>
            <h2 className="heading-lg">
              Inside the agent harness.
            </h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Every agent runs inside a managed harness — an isolated runtime
              with its own orchestration loop, tool connections, memory, and
              full observability. Here&apos;s what happens when a task arrives.
            </p>
          </div>

          {/* Animated flow diagram */}
          <div className="arch-flow">
            {/* Observability wrapper layer */}
            <div className="arch-layer arch-layer-obs">
              <div className="arch-layer-label">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                Observability &amp; Audit Trail
              </div>

              {/* Security wrapper layer */}
              <div className="arch-layer arch-layer-sec">
                <div className="arch-layer-label">
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  Isolated Runtime &amp; Security
                </div>

                {/* Core flow */}
                <div className="arch-core">
                  {/* Step 1: Input */}
                  <div className="arch-node arch-node-input">
                    <div className="arch-node-icon">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
                    </div>
                    <div className="arch-node-title">Task Input</div>
                    <div className="arch-node-sub">User request or trigger</div>
                    <div className="arch-pulse" />
                  </div>

                  <div className="arch-arrow">
                    <div className="arch-arrow-line" />
                    <div className="arch-arrow-dot arch-dot-flow" />
                  </div>

                  {/* Step 2: Orchestrator */}
                  <div className="arch-node arch-node-orch">
                    <div className="arch-node-icon arch-icon-accent">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                    </div>
                    <div className="arch-node-title">Orchestrator</div>
                    <div className="arch-node-sub">Reason &rarr; Plan &rarr; Act</div>
                    <div className="arch-loop-badge">
                      <div className="arch-loop-spinner" />
                      Loop
                    </div>
                  </div>

                  <div className="arch-arrow">
                    <div className="arch-arrow-line" />
                    <div className="arch-arrow-dot arch-dot-flow arch-dot-flow-d1" />
                  </div>

                  {/* Step 3: Model */}
                  <div className="arch-node">
                    <div className="arch-node-icon">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                    </div>
                    <div className="arch-node-title">LLM</div>
                    <div className="arch-node-sub">Reasoning &amp; decisions</div>
                  </div>

                  <div className="arch-arrow">
                    <div className="arch-arrow-line" />
                    <div className="arch-arrow-dot arch-dot-flow arch-dot-flow-d2" />
                  </div>

                  {/* Step 4: Tool execution */}
                  <div className="arch-node">
                    <div className="arch-node-icon">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                    </div>
                    <div className="arch-node-title">Tool Execution</div>
                    <div className="arch-node-sub">APIs, code, browser</div>
                  </div>

                  <div className="arch-arrow">
                    <div className="arch-arrow-line" />
                    <div className="arch-arrow-dot arch-dot-flow arch-dot-flow-d3" />
                  </div>

                  {/* Step 5: Output */}
                  <div className="arch-node arch-node-output">
                    <div className="arch-node-icon">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <div className="arch-node-title">Result</div>
                    <div className="arch-node-sub">Action or response</div>
                  </div>
                </div>

                {/* Bottom layer: supporting services */}
                <div className="arch-services">
                  <div className="arch-svc">
                    <div className="arch-svc-dot arch-svc-dot-1" />
                    <div className="arch-svc-info">
                      <div className="arch-svc-name">Memory</div>
                      <div className="arch-svc-detail">Short &amp; long-term context</div>
                    </div>
                  </div>
                  <div className="arch-svc">
                    <div className="arch-svc-dot arch-svc-dot-2" />
                    <div className="arch-svc-info">
                      <div className="arch-svc-name">Tool Gateway</div>
                      <div className="arch-svc-detail">MCP, APIs, connectors</div>
                    </div>
                  </div>
                  <div className="arch-svc">
                    <div className="arch-svc-dot arch-svc-dot-3" />
                    <div className="arch-svc-info">
                      <div className="arch-svc-name">Session State</div>
                      <div className="arch-svc-detail">Filesystem, shell, context</div>
                    </div>
                  </div>
                  <div className="arch-svc">
                    <div className="arch-svc-dot arch-svc-dot-4" />
                    <div className="arch-svc-info">
                      <div className="arch-svc-name">Guardrails</div>
                      <div className="arch-svc-detail">Validation &amp; safety checks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live activity feed */}
            <div className="arch-feed">
              <div className="arch-feed-header">
                <div className="arch-feed-dot" />
                Agent Trace — Live
              </div>
              <div className="arch-feed-body">
                <div className="arch-feed-line feed-anim-1">
                  <span className="arch-feed-ts">00:00.000</span>
                  <span className="arch-feed-tag tag-input">INPUT</span>
                  <span>Task received: &quot;Analyze Q3 pipeline risks&quot;</span>
                </div>
                <div className="arch-feed-line feed-anim-2">
                  <span className="arch-feed-ts">00:00.012</span>
                  <span className="arch-feed-tag tag-orch">PLAN</span>
                  <span>Decomposed into 3 sub-tasks</span>
                </div>
                <div className="arch-feed-line feed-anim-3">
                  <span className="arch-feed-ts">00:00.034</span>
                  <span className="arch-feed-tag tag-llm">LLM</span>
                  <span>Selected tools: CRM query, doc search</span>
                </div>
                <div className="arch-feed-line feed-anim-4">
                  <span className="arch-feed-ts">00:00.089</span>
                  <span className="arch-feed-tag tag-tool">TOOL</span>
                  <span>CRM: fetched 142 open opportunities</span>
                </div>
                <div className="arch-feed-line feed-anim-5">
                  <span className="arch-feed-ts">00:00.210</span>
                  <span className="arch-feed-tag tag-tool">TOOL</span>
                  <span>Docs: indexed 23 relevant reports</span>
                </div>
                <div className="arch-feed-line feed-anim-6">
                  <span className="arch-feed-ts">00:00.340</span>
                  <span className="arch-feed-tag tag-mem">MEM</span>
                  <span>Loaded prior Q2 analysis from long-term memory</span>
                </div>
                <div className="arch-feed-line feed-anim-7">
                  <span className="arch-feed-ts">00:00.412</span>
                  <span className="arch-feed-tag tag-orch">LOOP</span>
                  <span>Re-entering orchestration with new context</span>
                </div>
                <div className="arch-feed-line feed-anim-8">
                  <span className="arch-feed-ts">00:00.567</span>
                  <span className="arch-feed-tag tag-llm">LLM</span>
                  <span>Synthesizing findings, drafting risk report</span>
                </div>
                <div className="arch-feed-line feed-anim-9">
                  <span className="arch-feed-ts">00:00.891</span>
                  <span className="arch-feed-tag tag-out">OUTPUT</span>
                  <span>Report ready — 3 risks identified, actions attached</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform — bento grid */}
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
            <div className="bento-card bento-wide">
              <div className="bento-label">Multi-Agent Orchestration</div>
              <p className="bento-body">
                Agents don&apos;t operate in isolation. The platform coordinates
                specialist agents that share context, delegate sub-tasks, and
                converge on unified outcomes — much like a well-run team.
              </p>
              <div className="bento-diagram">
                <div className="bd-row">
                  <div className="bd-box bd-box-accent">Orchestrator</div>
                </div>
                <div className="bd-connectors">
                  <div className="bd-line" /><div className="bd-line" /><div className="bd-line" />
                </div>
                <div className="bd-row">
                  <div className="bd-box">Agent A</div>
                  <div className="bd-box">Agent B</div>
                  <div className="bd-box">Agent C</div>
                </div>
              </div>
            </div>
            <div className="bento-card">
              <div className="bento-label">Reasoning Engine</div>
              <p className="bento-body">
                Each agent decomposes objectives into sub-tasks, plans execution
                paths, and adapts when conditions change — not scripted
                automation, but genuine problem-solving.
              </p>
            </div>
            <div className="bento-card">
              <div className="bento-label">Observability</div>
              <p className="bento-body">
                Full audit trail of every decision and action. Human-in-the-loop
                controls when you need them. Nothing runs in a black box.
              </p>
            </div>
            <div className="bento-card">
              <div className="bento-label">50+ Integrations</div>
              <p className="bento-body">
                CRMs, data warehouses, issue trackers, communication tools.
                Connect your existing stack through secure, pre-built connectors.
              </p>
            </div>
            <div className="bento-card">
              <div className="bento-label">Enterprise Security</div>
              <p className="bento-body">
                SOC 2 Type II. End-to-end encryption. Role-based access. Data
                residency controls. Your data never leaves your boundaries.
              </p>
            </div>
            <div className="bento-card">
              <div className="bento-label">Continuous Learning</div>
              <p className="bento-body">
                Agents improve from feedback and outcomes over time — refining
                their approach without retraining or manual tuning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agents */}
      <section className="section section-alt" id="agents">
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
          <div className="agent-table">
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
              <div key={i} className="agent-row">
                <div className="agent-row-name">{a.name}</div>
                <div className="agent-row-domain">{a.domain}</div>
                <div className="agent-row-desc">{a.desc}</div>
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
        <div className="section-inner">
          <div className="cta-center">
            <h2 className="heading-lg">
              Start building with
              <br />
              super intelligent agents.
            </h2>
            <p className="section-desc" style={{ margin: '0 auto 32px' }}>
              Reach out to learn more about the ThoughtWorks Super Intelligent
              Agent Platform. Our team will be in touch within one business day.
            </p>
            <a href="mailto:info@thoughtworks.ai?subject=Agent%20Platform%20—%20Access%20Request" className="btn-primary">
              Contact Us — info@thoughtworks.ai
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <a href="#" className="nav-logo">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="7" fill="#e6007e" />
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
