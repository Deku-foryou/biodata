import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/education", label: "Education" },
  { to: "/organization", label: "Organization" },
  { to: "/social-media", label: "Social Media" },
];

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top">
      <Link className="navbar-brand hover-text" to="/" onClick={() => setExpanded(false)}>
        DEKU
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={expanded}
        onClick={() => setExpanded((current) => !current)}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`collapse navbar-collapse${expanded ? " show" : ""}`}>
        <ul className="navbar-nav ms-auto">
          {links.map(({ to, label }) => (
            <li className="nav-item" key={to}>
              <NavLink
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                end={to === "/"}
                to={to}
                onClick={() => setExpanded(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
