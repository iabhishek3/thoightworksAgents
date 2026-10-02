export default function Home() {
  return (
    <main style={{ position: 'relative', zIndex: 1 }}>

      {/* Background */}
      <div className="bg-orbs">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
      </div>
      <div className="grid-bg" />

      {/* Navbar */}
      <nav>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <div className="logo-icon">TW</div>
            ThoughtWorks<span className="gradient-text">.ai</span>
          </a>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#agents">Agents</a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#stats">Results</a></li>
          </ul>
          <a href="#cta" className="btn-nav">Get Early Access</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="badge">
          <div className="pulse-dot" />
          Super Intelligence AI Platform — Now in Beta
        </div>
        <h1 className="hero-title">
          The World&apos;s First<br />
          <span className="gradient-text">Super Intelligence</span><br />
          Agent Platform
        </h1>
        <p className="hero-sub">
          ThoughtWorks deploys autonomous AI agents that think, plan, and execute
          across your entire business — 1000x faster than human teams, with superhuman accuracy.
        </p>
        <div className="hero-cta">
          <a href="#cta" className="btn-big">Deploy Your First Agent →</a>
          <a href="#how" className="btn-outline">See How It Works</a>
        </div>
        <div className="terminal-wrap">
          <div className="terminal">
            <div className="terminal-dots">
              <div className="dot dot-red" />
              <div className="dot dot-yellow" />
              <div className="dot dot-green" />
              <span className="terminal-tab">thoughtworks.ai — agent terminal</span>
            </div>
            <div className="terminal-body">
              <div className="t-dim"># Initializing ThoughtWorks Super Agent...</div>
              <div><span className="t-green">✓</span> <span className="t-muted">Connecting to neural substrate</span> <span className="t-purple">[1.2ms]</span></div>
              <div><span className="t-green">✓</span> <span className="t-muted">Loading 847B parameter model</span> <span className="t-purple">[0.3ms]</span></div>
              <div><span className="t-green">✓</span> <span className="t-muted">Agent swarm initialized</span> <span className="t-blue">[128 agents ready]</span></div>
              <div><span className="t-green">✓</span> <span className="t-muted">Business context ingested</span> <span className="t-cyan">[14,293 docs]</span></div>
              <div className="t-prompt">
                <span className="t-purple">agent@tw</span>
                <span className="t-dim">~$</span>
                <span>Analyze Q4 revenue drop and generate recovery plan<span className="cursor">|</span></span>
              </div>
              <div className="t-response">
                <div className="t-response-title">🧠 Agent Response — 847ms</div>
                <div className="t-response-body">Identified 3 root causes across 47 data sources. Generated 12-step recovery plan. Projected +34% revenue by Q1. Initiating automated execution across Sales, Marketing, and Product agents...</div>
              </div>
            </div>
          </div>
          <div className="terminal-glow" />
        </div>
        <div className="scroll-hint">
          <span>Scroll to explore</span>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-section" id="stats">
        <div className="stats-grid">
          {[
            { value: '1000x', label: 'Faster than human teams', color: '#a78bfa' },
            { value: '99.9%', label: 'Task accuracy rate', color: '#60a5fa' },
            { value: '128+', label: 'Parallel agents deployed', color: '#34d399' },
            { value: '$2.4B', label: 'Value generated for clients', color: '#f472b6' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div className="stat-val" style={{ color: s.color }}>{s.value}</div>
              <div className="stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="section" id="features">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag" style={{ color: '#a78bfa' }}>Capabilities</div>
            <h2 className="section-title">Not just AI.<br /><span className="gradient-text">Super Intelligence.</span></h2>
            <p className="section-sub">Our agents don&apos;t just answer questions — they autonomously run your business operations end-to-end.</p>
          </div>
          <div className="features-grid">
            {[
              { icon: '🧠', title: 'Autonomous Reasoning', desc: 'Agents that think 10 steps ahead, plan complex multi-stage tasks, and adapt in real-time to changing conditions.', color: '#7c3aed' },
              { icon: '⚡', title: 'Parallel Execution', desc: 'Deploy swarms of 128+ specialized agents simultaneously — what takes teams weeks takes us minutes.', color: '#2563eb' },
              { icon: '🔗', title: 'Deep Integrations', desc: 'Connects natively to 500+ tools — Salesforce, Slack, SAP, GitHub, and your custom systems via our universal API.', color: '#06b6d4' },
              { icon: '🛡️', title: 'Enterprise Security', desc: 'SOC2 Type II certified. All data encrypted end-to-end. Your data never trains our models.', color: '#10b981' },
              { icon: '📊', title: 'Predictive Intelligence', desc: 'Agents monitor your metrics, detect anomalies, and take corrective action before you even notice.', color: '#f59e0b' },
              { icon: '🌐', title: 'Multi-Agent Coordination', desc: 'Agents communicate and collaborate — forming a self-organizing intelligence network across your org.', color: '#ec4899' },
            ].map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon" style={{ background: `${f.color}20`, border: `1px solid ${f.color}40` }}>{f.icon}</div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents */}
      <section className="section" id="agents" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag" style={{ color: '#60a5fa' }}>Agent Fleet</div>
            <h2 className="section-title">A specialist agent<br /><span className="gradient-text-pink">for every mission.</span></h2>
          </div>
          <div className="agents-grid">
            {[
              { name: 'Sales Agent', role: 'Closes deals, nurtures leads, forecasts pipeline', emoji: '💼', tag: 'Revenue' },
              { name: 'Research Agent', role: 'Deep market analysis, competitive intel, trend detection', emoji: '🔬', tag: 'Intelligence' },
              { name: 'Code Agent', role: 'Writes, reviews, deploys production-ready code 24/7', emoji: '💻', tag: 'Engineering' },
              { name: 'Finance Agent', role: 'Real-time P&L, cash flow optimization, risk analysis', emoji: '📈', tag: 'Finance' },
              { name: 'Support Agent', role: 'Resolves 98% of tickets instantly, escalates edge cases', emoji: '🎯', tag: 'CX' },
              { name: 'Marketing Agent', role: 'Creates campaigns, A/B tests, optimizes spend autonomously', emoji: '🚀', tag: 'Growth' },
              { name: 'Legal Agent', role: 'Reviews contracts, flags risks, ensures compliance', emoji: '⚖️', tag: 'Legal' },
              { name: 'Ops Agent', role: 'Orchestrates workflows, eliminates bottlenecks, scales ops', emoji: '⚙️', tag: 'Operations' },
            ].map((a, i) => (
              <div key={i} className="agent-card">
                <div className="agent-emoji">{a.emoji}</div>
                <div className="agent-tag">{a.tag}</div>
                <div className="agent-name">{a.name}</div>
                <div className="agent-role">{a.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" id="how" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <div className="section-tag" style={{ color: '#67e8f9' }}>Process</div>
          <h2 className="section-title">Live in <span className="gradient-text">48 hours.</span></h2>
          <p className="section-sub">No months of implementation. No army of consultants. Your agents go live in 48 hours.</p>
        </div>
        <div className="steps">
          {[
            { n: '01', title: 'Connect Your Business', desc: 'Link your existing tools and data sources. Our universal connector handles the rest — no engineering required.', time: 'Day 1 — 2 hours', color: '#7c3aed' },
            { n: '02', title: 'Define Your Missions', desc: 'Tell agents in plain English what you need done. Our AI understands context and business nuance automatically.', time: 'Day 1 — 1 hour', color: '#2563eb' },
            { n: '03', title: 'Deploy & Monitor', desc: 'Agents go live and start executing. Real-time dashboard shows every action taken and result achieved.', time: 'Day 2 — Live', color: '#06b6d4' },
            { n: '04', title: 'Scale Infinitely', desc: 'Add more agents, expand to new departments, handle 10x the workload. Zero marginal cost to scale.', time: 'Ongoing', color: '#10b981' },
          ].map((s, i) => (
            <div key={i} className="step">
              <div className="step-num" style={{ color: s.color }}>{s.n}</div>
              <div className="step-body">
                <div className="step-header">
                  <span className="step-title">{s.title}</span>
                  <span className="step-time">{s.time}</span>
                </div>
                <div className="step-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-title">Trusted by industry leaders</h2>
            <p className="section-sub">What our early access customers are saying</p>
          </div>
          <div className="testi-grid">
            {[
              { quote: "ThoughtWorks agents replaced 3 full analyst teams. We're getting better insights in milliseconds than we used to get in weeks.", name: 'Sarah Chen', role: 'CTO, NovaTech Inc.', initials: 'SC', color: '#7c3aed' },
              { quote: "We deployed the Sales Agent on a Friday. By Monday it had already closed 2 enterprise deals we didn't even know were in the pipeline.", name: 'Marcus Williams', role: 'VP Sales, FutureScale', initials: 'MW', color: '#2563eb' },
              { quote: "The ROI in the first month was 47x. I thought that was a typo. It wasn't. These agents are operating at a level we didn't think was possible yet.", name: 'Priya Sharma', role: 'CEO, Quantum Ventures', initials: 'PS', color: '#06b6d4' },
            ].map((t, i) => (
              <div key={i} className="testi-card">
                <div className="quote-mark">&ldquo;</div>
                <div className="quote-text">{t.quote}</div>
                <div className="author">
                  <div className="author-avatar" style={{ background: `${t.color}33`, color: t.color }}>{t.initials}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="cta">
        <div className="cta-box">
          <div className="cta-glow" />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="cta-emoji">🚀</div>
            <h2 className="cta-title">Ready to deploy<br /><span className="gradient-text">super intelligence?</span></h2>
            <p className="cta-sub">Join 500+ companies already running ThoughtWorks agents. First 30 days free. No credit card required.</p>
            <div className="cta-form">
              <input type="email" placeholder="your@company.com" className="cta-input" />
              <a href="#" className="btn-big">Get Early Access →</a>
            </div>
            <div className="cta-fine">Limited spots available · SOC2 Certified · Cancel anytime</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-inner">
          <div className="nav-logo">
            <div className="logo-icon">TW</div>
            ThoughtWorks<span className="gradient-text">.ai</span>
          </div>
          <div className="footer-copy">© 2026 ThoughtWorks AI. Building the future of autonomous intelligence.</div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
