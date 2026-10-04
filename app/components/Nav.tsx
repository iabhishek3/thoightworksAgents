export default function Nav() {
  return (
    <>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" aria-hidden="true" />
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-progress" />
        <div className="nav-inner">
          <a href="#" className="nav-logo" aria-label="Superintelligence homepage">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" rx="7" fill="#9B2335" />
              <path d="M7 10h6v2h-2v8h-2v-8H7v-2zm8 0h5l3 10h-2.5L18.8 14 17 20h-2.5l.5-10z" fill="white" />
            </svg>
            <span>Superintelligence <span className="nav-logo-sub">by ThoughtWorks</span></span>
          </a>
          <ul className="nav-links">
            <li><a href="#architecture">Architecture</a></li>
            <li><a href="#platform">Platform</a></li>
            <li><a href="#agents">Agents</a></li>
            <li><a href="#how">How It Works</a></li>
          </ul>
          <a href="mailto:info@thoughtworks.ai?subject=Agent%20Platform%20—%20Access%20Request" className="btn-nav">Request Access</a>
          <label htmlFor="nav-toggle" className="nav-hamburger" aria-label="Toggle menu">
            <span /><span /><span />
          </label>
        </div>
      </nav>
      <label htmlFor="nav-toggle" className="nav-overlay" aria-hidden="true" />
      <div className="nav-drawer">
        <label htmlFor="nav-toggle"><a href="#architecture">Architecture</a></label>
        <label htmlFor="nav-toggle"><a href="#platform">Platform</a></label>
        <label htmlFor="nav-toggle"><a href="#agents">Agents</a></label>
        <label htmlFor="nav-toggle"><a href="#how">How It Works</a></label>
        <a href="mailto:info@thoughtworks.ai?subject=Agent%20Platform%20—%20Access%20Request" className="btn-nav">Request Access</a>
      </div>
    </>
  );
}
