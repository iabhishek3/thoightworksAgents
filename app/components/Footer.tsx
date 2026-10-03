export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a href="#" className="nav-logo" aria-label="Superintelligence homepage">
          <svg width="18" height="18" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="7" fill="#9B2335" />
            <path d="M7 10h6v2h-2v8h-2v-8H7v-2zm8 0h5l3 10h-2.5L18.8 14 17 20h-2.5l.5-10z" fill="white" />
          </svg>
          <span>Superintelligence <span className="nav-logo-sub">by ThoughtWorks</span></span>
        </a>
        <div className="footer-copy">&copy; 2026 ThoughtWorks, Inc. All rights reserved.</div>
        <div className="footer-links">
          <a href="mailto:info@thoughtworks.ai">Contact</a>
          <a href="https://www.thoughtworks.com/about-us/privacy-policy">Privacy</a>
          <a href="https://www.thoughtworks.com/about-us/social-media-terms-and-conditions">Terms</a>
        </div>
      </div>
    </footer>
  );
}
