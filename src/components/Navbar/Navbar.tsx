import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.scss";

const routes = [
  { path: "home", title: "Home" },
  { path: "about", title: "About" },
  { path: "contact", title: "Contact" },
];
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const checkScroll = () => {
    if (window.scrollY === 0) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled && "scrolled"}`}>
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
