import Button from "../../components/button/button";
import "./waitlist.css";

export default function WaitL() {
  return (
    <main id="wait-page">
      <h1>
        Join the waitlist for <br />
        Kijani Africa
      </h1>
      <form id="wait-form">
        <input type="text" placeholder="Enter your first name" />
        <input type="text" placeholder="Enter your last name" />
        <input type="text" placeholder="Enter your E-Mail address" />
        <textarea placeholder="Any additional feedback" />

        <Button text="Join the waitlist" />
      </form>

      
    </main>
  );
}
