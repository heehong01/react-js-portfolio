/* eslint-disable no-unused-expressions */
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="./img/logo.svg" alt="Logoipsum" />
      </div>
      <a
        className={`nav_hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
      </a>
      <div className={`navbar-items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar-content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar-content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="resume"
              className="navbar-content"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar-content"
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbar-active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </nav>
  );
};

export default NavBar;
