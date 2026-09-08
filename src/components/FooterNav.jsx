import { NavLink } from "react-router-dom";

const links = [
  { to: "/tech-stack", label: "TECH STACK" },
  { to: "/certificate", label: "CERTIFICATE" },
  { to: "/project", label: "PROJECT" },
];

export default function FooterNav() {
  return (
    <div className="footer-nav">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}
