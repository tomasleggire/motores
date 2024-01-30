import logo from "../../assets/logo.png";
import "./Navbar.scss";

const routes = [
  { path: "home", title: "Home" },
  { path: "about", title: "About" },
  { path: "contact", title: "Contact" },
];
export default function Navbar() {
  function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <nav className="navbar">
      <a href="" onClick={goToTop}>
        <img src={logo} alt="Logo" className="navbar-logo" />
      </a>

      <ul className="navbar-list">
        {routes.map((route) => (
          <li className="navbar-list-item">
            <a href={`#${route.path}`}>{route.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
