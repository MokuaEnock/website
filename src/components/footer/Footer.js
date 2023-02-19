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
      <div className="footer-container"></div>
      <div className="footer-foot">
        <p>&copy; 2023 Kilimo.Africa All rights reserved.</p>
        <Link to="/privacy">Privacy policy</Link>
        <Link to="/terms">Terms and conditions</Link>
      </div>
    </footer>
  );
}
