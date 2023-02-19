import "./home.css";
import {
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import Header from "../../components/header/header";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let redirect = useNavigate();

  function handleSignupClick() {
    redirect("/signup");
  }
  return (
    <main id="home-page">
    
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

      <Header />
    </main>
  );
}
