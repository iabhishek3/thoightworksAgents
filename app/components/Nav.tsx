export default function Nav() {
  return (
    <>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" aria-hidden="true" />
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-progress" />
        <div className="nav-inner">
          <a href="#" className="nav-logo" aria-label="Squadly homepage">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" rx="7" fill="#9B2335" />
              <path d="M16 9.5C10 9.5 9 11 9 13c0 2 8 4 8 6 0 2-1 3.5-7 3.5" stroke="white" strokeWidth="2.8" fill="none" strokeLinecap="round" />
              <line x1="22" y1="9.5" x2="22" y2="22.5" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
            </svg>
            <span>Squadly <span className="nav-logo-sub">SI</span></span>
          </a>
          <ul className="nav-links">
            <li><a href="#architecture">Architecture</a></li>
            <li><a href="#platform">Platform</a></li>
            <li><a href="#agents">Agents</a></li>
            <li><a href="#how">How It Works</a></li>
          </ul>
          <a href="mailto:team@squadly.si?subject=Squadly%20SI%20—%20Access%20Request" className="btn-nav">Request Access</a>
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
        <a href="mailto:team@squadly.si?subject=Squadly%20SI%20—%20Access%20Request" className="btn-nav">Request Access</a>
      </div>
    </>
  );
}
