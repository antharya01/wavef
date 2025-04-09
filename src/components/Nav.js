import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // ✅ Import Link
import "./Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* ✅ Logo as Home Link */}
      <Link to="/" className="nav-logo">
        <img src="/rnlogo.jpg" alt="Logo" className="nav-icon" />
      </Link>

      {/* ✅ Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      {/* ✅ Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)}>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/events">EVENTS</Link></li> {/* ✅ Ensure lowercase "events" */}
        <li><Link to="/team">TEAM-RN</Link></li>
        <li><Link to="/sponsors">SPONSORS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
