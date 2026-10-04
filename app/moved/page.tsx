export default function Moved() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0a0a0f",
      fontFamily: "system-ui, sans-serif",
      padding: "2rem",
    }}>
      <div style={{ textAlign: "center", maxWidth: "480px" }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "2rem",
        }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="7" fill="#6C47FF" />
            <path d="M8 10h5c2 0 3 1 3 2.5S14 15 12 15h-2v5H8V10zm2 4h2c.8 0 1.5-.4 1.5-1.5S12.8 11 12 11h-2v3zm7-4h2v10h-2V10z" fill="white" />
          </svg>
          <span style={{ color: "#fff", fontSize: "1.25rem", fontWeight: 600 }}>
            Squadly <span style={{ color: "#6C47FF" }}>SI</span>
          </span>
        </div>

        <h1 style={{
          color: "#fff",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 700,
          margin: "0 0 1rem",
          lineHeight: 1.1,
        }}>
          We&apos;ve moved.
        </h1>

        <p style={{
          color: "#888",
          fontSize: "1.1rem",
          lineHeight: 1.6,
          margin: "0 0 2.5rem",
        }}>
          Superintelligence is now{" "}
          <strong style={{ color: "#fff" }}>Squadly SI</strong> —
          same autonomous AI agents, new home.
        </p>

        <a
          href="https://squadly.si"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#6C47FF",
            color: "#fff",
            padding: "0.875rem 2rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "1rem",
            transition: "opacity 0.2s",
          }}
        >
          Go to squadly.si
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </main>
  );
}
