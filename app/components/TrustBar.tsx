export default function TrustBar() {
  const items = ["SOC 2 Type II", "End-to-end encryption", "50+ integrations", "24/7 autonomous", "Human-in-the-loop"];

  return (
    <div className="trust-bar">
      <div className="trust-inner">
        {items.map((t, i) => (
          <span key={i} className="trust-item">{t}</span>
        ))}
      </div>
    </div>
  );
}
