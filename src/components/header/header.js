import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import "./header.css";
// import Button from "../button/button";

export default function Header(props) {
  function handleSelectChange(event) {
    let url = event.target.value;
    window.location.href = url;
  }

  function Head() {
    return (
      <header className="header">
        <span className="header-logo">
          <Link to="/">Kilimo.Africa</Link>
        </span>
        <span className="header-info">
          <select className="services-header" onChange={handleSelectChange}>
            <option value="" disabled selected>
              Services
            </option>
            <option value="/services">Services</option>
            <option value="/products">Products</option>
            <option value="/charity">Charity</option>
          </select>

          <select className="services-header" onChange={handleSelectChange}>
            <option value="" disabled selected>
              About Us
            </option>
            <option value="/impact">Our Impact</option>
            <option value="/products">Team</option>
            <option value="/gallery">Gallery</option>
            <option value="/partners">Partners</option>
          </select>

          <select className="services-header" onChange={handleSelectChange}>
            <option value="" disabled selected>
              News
            </option>
            <option value="/blog">Blog</option>
            <option value="/newsroom">Newsroom</option>
            <option value="/events">Events</option>
            <option value="/recipes">Recipes</option>
          </select>

          <Link to="/blog">Careers</Link>
          <Link to="/contact">Contact Us</Link>
        </span>
        <span className="header-logs">
          <Link to="login">Log In</Link>
          {/* <Button text="Log In" /> */}
        </span>
      </header>
    );
  }

  return (
    <div>
      <Navbar />
      <Head />
    </div>
  );
}
