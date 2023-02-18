import "./home.css";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import Header from "../../components/header/header";

export default function Home() {
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
      </nav>

      <Header />

      
    </main>
  );
}
