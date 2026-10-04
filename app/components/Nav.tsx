export default function Nav() {
  return (
    <>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" aria-hidden="true" />
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-progress" />
        <div className="nav-inner">
          <a href="#" className="nav-logo" aria-label="Squadly homepage">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" rx="7" fill="#6C47FF" />
              <path d="M8 10h5c2 0 3 1 3 2.5S14 15 12 15h-2v5H8V10zm2 4h2c.8 0 1.5-.4 1.5-1.5S12.8 11 12 11h-2v3zm7-4h2v10h-2V10z" fill="white" />
            </svg>
            <span>Squadly <span className="nav-logo-sub">SI</span></span>
          </a>
          <ul className="nav-links">
            <li><a href="#architecture">Architecture</a></li>
            <li><a href="#platform">Platform</a></li>
            <li><a href="#agents">Agents</a></li>
            <li><a href="#how">How It Works</a></li>
          </ul>
          <a href="mailto:info@squadly.si?subject=Squadly%20SI%20—%20Access%20Request" className="btn-nav">Request Access</a>
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
        <a href="mailto:info@squadly.si?subject=Squadly%20SI%20—%20Access%20Request" className="btn-nav">Request Access</a>
      </div>
    </>
  );
}
