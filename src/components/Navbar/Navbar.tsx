import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const routes = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
];
export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </NavLink>

      <ul className="navbar-list">
        {routes.map((route) => (
          <li className="navbar-list-item">
            <NavLink to={route.path}>{route.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
