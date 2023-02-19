import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-head">
        <span>Subscribe to our weekly newsletter</span>
        <form>
          <input placeholder="Enter your Email address" type="email" />
          <button>Subscribe</button>
        </form>
      </div>
      <div className="footer-container">
        <span className="footer-logo"></span>
        <span>
          <h3>Services</h3>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
          <Link to="/charity">Charity</Link>
        </span>
        <span>
          <h3>About Us</h3>
          <Link to="/impact">Our Impact</Link>
          <Link to="/team">Team</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/partners">Partners</Link>
        </span>
        <span>
          <h3>News</h3>
          <Link to="/blog">Blog</Link>
          <Link to="/newsroom">Newsroom</Link>
          <Link to="/events">Events</Link>
        </span>
        <span>
        <h3></h3>
          <Link to="/faqs">FAQs</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact Us</Link>
        </span>
      </div>
      <div className="footer-foot">
        <p>&copy; 2023 Kilimo.Africa All rights reserved.</p>
        <Link to="/privacy">Privacy policy</Link>
        <Link to="/terms">Terms and conditions</Link>
      </div>
    </footer>
  );
}
