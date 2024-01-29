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
    <nav>
      <img src={logo} alt="Logo" />
      <ul>
        {routes.map((route) => (
          <li>
            <NavLink to={route.path}>{route.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
