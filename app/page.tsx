export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020008] text-white overflow-hidden">

      {/* ── Background orbs ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="animate-float animate-pulse-glow absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)' }} />
        <div className="animate-float-reverse animate-pulse-glow absolute top-[30%] right-[-15%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)' }} />
        <div className="animate-float animate-pulse-glow absolute bottom-[-10%] left-[30%] w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)' }} />
        <div className="grid-bg absolute inset-0 opacity-40" />
      </div>

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}>
              <span className="text-white font-black text-sm">TW</span>
            </div>
            <span className="font-bold text-lg tracking-tight">ThoughtWorks<span className="gradient-text">.ai</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#agents" className="hover:text-white transition-colors">Agents</a>
            <a href="#how" className="hover:text-white transition-colors">How it works</a>
            <a href="#stats" className="hover:text-white transition-colors">Results</a>
          </div>
          <a href="#cta"
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}>
            Get Early Access
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
        <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Super Intelligence AI Platform — Now in Beta
        </div>

        <h1 className="animate-fade-in-up text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6 max-w-5xl">
          The World&apos;s First
          <br />
          <span className="gradient-text text-glow">Super Intelligence</span>
          <br />
          Agent Platform
        </h1>

        <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-white/50 max-w-2xl mb-10 leading-relaxed">
          ThoughtWorks deploys autonomous AI agents that think, plan, and execute
          across your entire business — 1000x faster than human teams, with
          superhuman accuracy.
        </p>

        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center gap-4">
          <a href="#cta"
            className="glow-purple px-8 py-4 rounded-xl text-base font-bold transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}>
            Deploy Your First Agent →
          </a>
          <a href="#how"
            className="px-8 py-4 rounded-xl text-base font-semibold border border-white/10 hover:border-white/30 transition-all hover:bg-white/5">
            See How It Works
          </a>
        </div>

        {/* Hero visual */}
        <div className="animate-fade-in delay-500 relative mt-20 w-full max-w-4xl mx-auto">
          <div className="gradient-border rounded-2xl p-px">
            <div className="rounded-2xl bg-[#0a0a1a] p-6 md:p-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-4 text-white/30 text-xs font-mono">thoughtworks.ai — agent terminal</span>
              </div>
              <div className="font-mono text-sm text-left space-y-3">
                <div className="text-white/40"># Initializing ThoughtWorks Super Agent...</div>
                <div className="text-green-400">✓ <span className="text-white/70">Connecting to neural substrate</span> <span className="text-purple-400">[1.2ms]</span></div>
                <div className="text-green-400">✓ <span className="text-white/70">Loading 847B parameter model</span> <span className="text-purple-400">[0.3ms]</span></div>
                <div className="text-green-400">✓ <span className="text-white/70">Agent swarm initialized</span> <span className="text-blue-400">[128 agents ready]</span></div>
                <div className="text-green-400">✓ <span className="text-white/70">Business context ingested</span> <span className="text-cyan-400">[14,293 docs]</span></div>
                <div className="flex items-center gap-2 text-white/90 mt-2">
                  <span className="text-purple-400">agent@tw</span>
                  <span className="text-white/40">~$</span>
                  <span className="typing-cursor">Analyze Q4 revenue drop and generate recovery plan</span>
                </div>
                <div className="mt-4 p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <div className="text-purple-300 font-semibold mb-2">🧠 Agent Response — 847ms</div>
                  <div className="text-white/60 text-xs leading-relaxed">Identified 3 root causes across 47 data sources. Generated 12-step recovery plan. Projected +34% revenue by Q1. Initiating automated execution across Sales, Marketing, and Product agents...</div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow under terminal */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 blur-3xl opacity-30 rounded-full"
            style={{ background: 'linear-gradient(90deg, #7c3aed, #2563eb, #06b6d4)' }} />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs animate-bounce">
          <span>Scroll to explore</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Stats ── */}
      <section id="stats" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '1000x', label: 'Faster than human teams', color: '#a78bfa' },
            { value: '99.9%', label: 'Task accuracy rate', color: '#60a5fa' },
            { value: '128+', label: 'Parallel agents deployed', color: '#34d399' },
            { value: '$2.4B', label: 'Value generated for clients', color: '#f472b6' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="stat-value font-black mb-2" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-white/40 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">Capabilities</div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Not just AI.<br />
              <span className="gradient-text">Super Intelligence.</span>
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Our agents don&apos;t just answer questions — they autonomously run your business operations end-to-end.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🧠',
                title: 'Autonomous Reasoning',
                desc: 'Agents that think 10 steps ahead, plan complex multi-stage tasks, and adapt in real-time to changing conditions.',
                color: '#7c3aed',
              },
              {
                icon: '⚡',
                title: 'Parallel Execution',
                desc: 'Deploy swarms of 128+ specialized agents simultaneously across every department — what takes teams weeks takes us minutes.',
                color: '#2563eb',
              },
              {
                icon: '🔗',
                title: 'Deep Integrations',
                desc: 'Connects natively to 500+ tools — Salesforce, Slack, SAP, GitHub, and your custom systems via our universal API.',
                color: '#06b6d4',
              },
              {
                icon: '🛡️',
                title: 'Enterprise Security',
                desc: 'SOC2 Type II certified. All data encrypted end-to-end. Private deployment options. Your data never trains our models.',
                color: '#10b981',
              },
              {
                icon: '📊',
                title: 'Predictive Intelligence',
                desc: 'Agents continuously monitor your business metrics, detect anomalies, and take corrective action before you even notice.',
                color: '#f59e0b',
              },
              {
                icon: '🌐',
                title: 'Multi-Agent Coordination',
                desc: 'Agents communicate, delegate, and collaborate with each other — forming a self-organizing intelligence network.',
                color: '#ec4899',
              },
            ].map((f, i) => (
              <div key={i} className="gradient-border rounded-2xl p-px card-hover">
                <div className="rounded-2xl bg-[#0a0a1a] p-6 h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{ background: `${f.color}22`, border: `1px solid ${f.color}44` }}>
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agent Types ── */}
      <section id="agents" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Agent Fleet</div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              A specialist agent<br />
              <span className="gradient-text-pink">for every mission.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Sales Agent', role: 'Closes deals, nurtures leads, forecasts pipeline', emoji: '💼', tag: 'Revenue' },
              { name: 'Research Agent', role: 'Deep market analysis, competitive intel, trend detection', emoji: '🔬', tag: 'Intelligence' },
              { name: 'Code Agent', role: 'Writes, reviews, deploys production-ready code 24/7', emoji: '💻', tag: 'Engineering' },
              { name: 'Finance Agent', role: 'Real-time P&L, cash flow optimization, risk analysis', emoji: '📈', tag: 'Finance' },
              { name: 'Support Agent', role: 'Resolves 98% of tickets instantly, escalates edge cases', emoji: '🎯', tag: 'CX' },
              { name: 'Marketing Agent', role: 'Creates campaigns, A/B tests, optimizes spend autonomously', emoji: '🚀', tag: 'Growth' },
              { name: 'Legal Agent', role: 'Reviews contracts, flags risks, ensures compliance', emoji: '⚖️', tag: 'Legal' },
              { name: 'Ops Agent', role: 'Orchestrates workflows, eliminates bottlenecks, scales ops', emoji: '⚙️', tag: 'Operations' },
            ].map((agent, i) => (
              <div key={i} className="group p-5 rounded-2xl border border-white/5 bg-white/3 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all cursor-pointer">
                <div className="text-3xl mb-3">{agent.emoji}</div>
                <div className="text-xs font-semibold text-purple-400 mb-1 tracking-wider uppercase">{agent.tag}</div>
                <div className="font-bold mb-2">{agent.name}</div>
                <div className="text-white/40 text-xs leading-relaxed">{agent.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how" className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">Process</div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Live in <span className="gradient-text">48 hours.</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              No months of implementation. No army of consultants. Your agents go live in 48 hours.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: '01',
                title: 'Connect Your Business',
                desc: 'Link your existing tools, data sources, and workflows. Our universal connector handles the rest — no engineering required.',
                time: 'Day 1 — 2 hours',
                color: '#7c3aed',
              },
              {
                step: '02',
                title: 'Define Your Missions',
                desc: 'Tell agents in plain English what you need done. Our AI understands context, intent, and business nuance automatically.',
                time: 'Day 1 — 1 hour',
                color: '#2563eb',
              },
              {
                step: '03',
                title: 'Deploy & Monitor',
                desc: 'Agents go live and start executing. Real-time dashboard shows every action taken, decision made, and result achieved.',
                time: 'Day 2 — Live',
                color: '#06b6d4',
              },
              {
                step: '04',
                title: 'Scale Infinitely',
                desc: 'Add more agents, expand to new departments, handle 10x the workload. Zero marginal cost to scale.',
                time: 'Ongoing',
                color: '#10b981',
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all bg-white/2">
                <div className="text-4xl font-black shrink-0" style={{ color: step.color, opacity: 0.4 }}>{step.step}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full text-white/40 border border-white/10">{step.time}</span>
                  </div>
                  <p className="text-white/40 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Trusted by industry leaders</h2>
            <p className="text-white/40">What our early access customers are saying</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "ThoughtWorks agents replaced 3 full analyst teams. We&apos;re getting better insights in milliseconds than we used to get in weeks.",
                name: 'Sarah Chen',
                role: 'CTO, NovaTech Inc.',
                avatar: 'SC',
                color: '#7c3aed',
              },
              {
                quote: "We deployed the Sales Agent on a Friday. By Monday morning it had already closed 2 enterprise deals we didn&apos;t even know were in the pipeline.",
                name: 'Marcus Williams',
                role: 'VP Sales, FutureScale',
                avatar: 'MW',
                color: '#2563eb',
              },
              {
                quote: "The ROI in the first month was 47x. I thought that was a typo. It wasn&apos;t. These agents are operating at a level we didn&apos;t think was possible yet.",
                name: 'Priya Sharma',
                role: 'CEO, Quantum Ventures',
                avatar: 'PS',
                color: '#06b6d4',
              },
            ].map((t, i) => (
              <div key={i} className="gradient-border rounded-2xl p-px">
                <div className="rounded-2xl bg-[#0a0a1a] p-6 h-full flex flex-col">
                  <div className="text-4xl text-white/10 font-serif mb-4">&ldquo;</div>
                  <p className="text-white/70 leading-relaxed flex-1 mb-6">{t.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: `${t.color}44`, color: t.color }}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-white/40 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gradient-border rounded-3xl p-px">
            <div className="rounded-3xl bg-[#080816] p-12 md:p-20 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20"
                style={{ background: 'radial-gradient(ellipse at center, #7c3aed 0%, transparent 70%)' }} />
              <div className="relative z-10">
                <div className="text-5xl mb-6">🚀</div>
                <h2 className="text-4xl md:text-6xl font-black mb-6">
                  Ready to deploy<br />
                  <span className="gradient-text">super intelligence?</span>
                </h2>
                <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                  Join 500+ companies already running ThoughtWorks agents. First 30 days free. No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <input
                    type="email"
                    placeholder="your@company.com"
                    className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 w-full sm:w-72"
                  />
                  <button
                    className="glow-purple px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 whitespace-nowrap w-full sm:w-auto"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}>
                    Get Early Access →
                  </button>
                </div>
                <p className="text-white/25 text-sm mt-6">
                  Limited spots available · SOC2 Certified · Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}>
              <span className="text-white font-black text-xs">TW</span>
            </div>
            <span className="font-bold">ThoughtWorks<span className="gradient-text">.ai</span></span>
          </div>
          <div className="text-white/25 text-sm">
            © 2026 ThoughtWorks AI. Building the future of autonomous intelligence.
          </div>
          <div className="flex items-center gap-6 text-white/40 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
