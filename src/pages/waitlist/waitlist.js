import Button from "../../components/button/button";
import "./waitlist.css";

export default function WaitL() {
  function handleJoin(e) {
    e.preventDefault();
  }

  return (
    <main id="wait-page">
      <h1>
        Join the waitlist for <br />
        Kijani Africa
      </h1>
      <form id="wait-form">
        <span>
          <input type="text" placeholder="Enter your first name" required />
        </span>

        <span>
          <input type="text" placeholder="Enter your last name" required />
        </span>

        <span>
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
