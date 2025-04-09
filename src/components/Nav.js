import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <Link to="/" className="nav-logo">
        <img src="/rnlogo.jpg" alt="Logo" className="nav-icon" />
      </Link>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#about-section" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
        </li>
        <li>
        <a href="#evenrs-section" onClick={() => setIsMobileMenuOpen(false)}>EVENTS</a>
        </li>
        <li>
          <a href="#team-section" onClick={() => setIsMobileMenuOpen(false)}>TEAM-RN</a>
        </li>
        <li>
          <a href="#sponsors-section" onClick={() => setIsMobileMenuOpen(false)}>SPONSORS</a>
        </li>
        <li>
          <a href="#footer" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
