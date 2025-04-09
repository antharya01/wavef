import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <Link to="/" className="nav-logo">
        <img src="/rnlogo.jpg" alt="Logo" className="nav-icon" />
      </Link>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <a href="#about-section">ABOUT</a>
        </li>
        <li>
          <a href="#events-section">EVENTS</a>
        </li>
        <li>
          <a href="#team-section">TEAM-RN</a>
        </li>
        <li>
          <a href="#sponsors-section">SPONSORS</a>
        </li>
        <li>
          <a href="#footer">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
