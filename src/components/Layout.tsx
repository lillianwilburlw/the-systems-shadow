import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { site } from "../content/site.ts";
import { Mark } from "./Mark.tsx";

const nav = [
  { to: "/episodes", label: site.ui.navEpisodes },
  { to: "/sources", label: site.ui.navSources },
  { to: "/about", label: site.ui.navAbout },
  { to: "/contact", label: site.ui.navContact },
];

export function Layout() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const first = useRef(true);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const menuOpen = openPath === location.pathname;

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
        toggleRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main">
        {site.ui.skip}
      </a>
      <div className="top">
        <p className="draft-bar">{site.ui.draft}</p>
        <header className="site-header">
          <div className="wrap header-inner">
            <Link className="wordmark" to="/" translate="no">
              {site.name}
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="nav-toggle"
              aria-expanded={menuOpen}
              aria-controls="site-nav"
              onClick={() =>
                setOpenPath((current) =>
                  current === location.pathname ? null : location.pathname,
                )
              }
            >
              {menuOpen ? site.ui.closeMenu : site.ui.menu}
            </button>
            <nav
              id="site-nav"
              className={menuOpen ? "nav-links is-open" : "nav-links"}
              aria-label="Primary"
            >
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => (isActive ? "nav-link is-active" : "nav-link")}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>
      </div>
      <main id="main" ref={mainRef} tabIndex={-1} className="wrap">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <p className="footer-name" translate="no">
              <Mark className="mark mark-small" />
              {site.name}
            </p>
            <p className="footer-tagline" translate="no">
              {site.tagline}
            </p>
          </div>
          <p className="footer-hosts" translate="no">
            {site.hosts.map((host) => host.name).join(" · ")}
          </p>
          <nav className="footer-nav" aria-label="Footer">
            {nav.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="draft-foot">{site.ui.draftFooter}</p>
        </div>
      </footer>
    </>
  );
}
