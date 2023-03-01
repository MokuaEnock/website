import "./home.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";

export default function Home() {
  let redirect = useNavigate();

  function handleSignupClick() {
    redirect("/signup");
  }

  function WaitList() {
    return (
      <section id="waitlist-form">
        <h2>Join the Kijani Africa Waitlist</h2>
        <p>
          We're currently preparing for our upcoming launch, and we'd love to
          have you on board as a member of our waitlist. By signing up, you'll
          be one of the first to know when we're ready to start collecting and
          processing waste, and you'll receive exclusive access to early bird
          pricing and other special offers.
        </p>
        <Button />
      </section>
    );
  }
  return (
    <main id="home-page">
      <p>This is the homepage</p>
      <WaitList />
    </main>
  );
}
