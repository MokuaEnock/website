import "./Navbar.css";

import {
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav id="navigation-bar">
      <div id="navigation-container">
        <a href="https://www.instagram.com/">
          <FaInstagram className="social-icons" />
        </a>
        <a href="https://twitter.com/">
          <FaTwitter className="social-icons" />
        </a>
        <a href="https://www.linkedin.com/">
          <FaLinkedin className="social-icons" />
        </a>
        <a href="https://www.facebook.com/">
          <FaFacebook className="social-icons" />
        </a>
      </div>

      <div id="navigation-contact">
        <span>
          <FaPhone />
          <p>+254768371270</p>
        </span>
        <span>
          <FaEnvelope />
          <p>contact@kilimo.africa</p>
        </span>
      </div>
    </nav>
  );
}
