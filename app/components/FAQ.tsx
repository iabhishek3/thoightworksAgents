export default function FAQ() {
  const faqs = [
    {
      question: "How does data security work?",
      answer: "Every agent runs inside an isolated harness — a sandboxed runtime with its own filesystem and network boundaries. Your data is encrypted in transit and at rest. We're SOC 2 Type II certified, and support data residency controls so your data never leaves your designated region. All agent actions are logged with full audit trails.",
    },
    {
      question: "What LLMs power the agents?",
      answer: "The platform is model-agnostic. We support leading foundation models and can configure which model handles which task based on your cost, latency, and capability requirements. You can also bring your own model endpoints for sensitive workloads.",
    },
    {
      question: "How long does deployment take?",
      answer: "Most teams have their first agent running within a week. Integration with your existing tools typically takes 1-2 days through our pre-built connectors. Complex multi-agent orchestrations take longer to configure, but the platform handles the infrastructure from day one.",
    },
    {
      question: "What happens when an agent makes a mistake?",
      answer: "Every agent has configurable guardrails — input validation, output filtering, and confidence thresholds. For high-stakes decisions, human-in-the-loop approvals are built in. If an agent takes an incorrect action, the full trace log shows exactly what happened and why.",
    },
    {
      question: "Can we run this on our own infrastructure?",
      answer: "Yes. We support cloud-hosted (managed by us), VPC-deployed (in your cloud account), and on-premise installations for organizations with strict data sovereignty requirements.",
    },
    {
      question: "How are agents different from traditional automation?",
      answer: "Traditional automation follows pre-defined scripts — if X then Y. Agents reason through problems. They decompose objectives, select tools, adapt when conditions change, and learn from feedback. They handle the ambiguous, multi-step work that scripts can't.",
    },
  ];

  return (
    <section className="section" id="faq">
      <div className="section-inner">
        <div className="faq-layout">
          <div className="reveal">
            <p className="eyebrow">Questions</p>
            <h2 className="heading-lg">
              Frequently asked
              <br />
              questions.
            </h2>
            <p className="section-desc">
              Everything you need to know about deploying and operating AI agents at scale.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <details key={i} className={`faq-item reveal reveal-d${i + 1}`}>
                <summary className="faq-question">{faq.question}</summary>
                <div className="faq-answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
