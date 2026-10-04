export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a href="#" className="nav-logo" aria-label="Squadly homepage">
          <svg width="18" height="18" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="7" fill="#6C47FF" />
            <path d="M8 10h5c2 0 3 1 3 2.5S14 15 12 15h-2v5H8V10zm2 4h2c.8 0 1.5-.4 1.5-1.5S12.8 11 12 11h-2v3zm7-4h2v10h-2V10z" fill="white" />
          </svg>
          <span>Squadly <span className="nav-logo-sub">SI</span></span>
        </a>
        <div className="footer-copy">&copy; 2026 Squadly, Inc. All rights reserved.</div>
        <div className="footer-links">
          <a href="mailto:info@squadly.si">Contact</a>
          <a href="https://squadly.si/privacy">Privacy</a>
          <a href="https://squadly.si/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
