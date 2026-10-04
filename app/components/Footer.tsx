export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a href="#" className="nav-logo" aria-label="Squadly homepage">
          <svg width="18" height="18" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="7" fill="#9B2335" />
            <path d="M16 9.5C10 9.5 9 11 9 13c0 2 8 4 8 6 0 2-1 3.5-7 3.5" stroke="white" strokeWidth="2.8" fill="none" strokeLinecap="round" />
            <line x1="22" y1="9.5" x2="22" y2="22.5" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
          </svg>
          <span>Squadly <span className="nav-logo-sub">SI</span></span>
        </a>
        <div className="footer-copy">&copy; 2026 Squadly, Inc. All rights reserved.</div>
        <div className="footer-links">
          <a href="mailto:team@squadly.si">Contact</a>
          <a href="https://squadly.si/privacy">Privacy</a>
          <a href="https://squadly.si/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
