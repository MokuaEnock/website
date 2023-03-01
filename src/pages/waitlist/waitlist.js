// import Button from "../../components/button/button";
import "./waitlist.css";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

export default function WaitL() {
  function handleJoin(e) {
    e.preventDefault();
  }

  return (
    <main id="wait-page" onSubmit={handleJoin}>
      <h1>
        Join the waitlist for <br />
        Kijani Africa
      </h1>
      <form id="wait-form">
        <span>
          <FiUser size={32} />
          <input type="text" placeholder="Full name" required />
        </span>

        <span>
          <FiPhone id="wait-icons" size={32} />
          <input type="text" placeholder="Your phone number" required />
        </span>

        <span>
          <FiMail className="wait-icons" size={32} />
          <input type="text" placeholder="Enter your E-Mail address" required />
        </span>
        <textarea placeholder="Any additional feedback" />
        <button type="submit">
          <p>Join the waitlist</p>
        </button>
        {/* <Button text="Join the waitlist" onClick={handleJoin} /> */}
      </form>
    </main>
  );
}
