import { Link } from "react-router-dom";
import "./header.css";

export default function Header(props) {
  return (
    <header className="header">
      <span className="header-logo">
        <Link to="/">Home</Link>
      </span>
      <span className="header-info">
        <Link to="/services">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/blog">Blog</Link>
      </span>
      <span className="header-logs">
        <Link to="login">Log In</Link>
      </span>
    </header>
  );
}
