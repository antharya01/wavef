import React from "react";
import { FaInstagram, FaFacebook,FaLinkedin } from "react-icons/fa";
import "./Footer.css"; // Link to the external CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      <h3 className="footer-title">Follow Us</h3>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/radionitroz.nitdgp/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/radionitroz.nitdgp"
          target="_blank"
          rel="noopener noreferrer"
          className="icon facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/company/radio-nitroz-nitdgp/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="icon linkedin"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="footer-credit">
        Made by <span className="team-name">@webd team</span>
      </p>
    </div>
  );
};

export default Footer;