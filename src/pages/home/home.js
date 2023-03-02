import "./home.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";

export default function Home() {
  let redirect = useNavigate();

  function handleSignupClick() {
    redirect("/signup");
  }

  function handleWaitlist() {
    redirect("/waitlist");
  }

  function Survey() {
    return (
      <section>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSex8Ot1IJE51X1yWsTXTmVDNxI3lXuOkT8akZxKOIFIAyHvFg/viewform?embedded=true"
          width="640"
          height="1383"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Survey Form"
        >
          Loading…
        </iframe>
      </section>
    );
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
        <Button text="Join Our Waitlist" onClick={handleWaitlist} />
      </section>
    );
  }
  return (
    <main id="home-page">
      <p>This is the homepage</p>
      <WaitList />
      <Survey />

    </main>
  );
}
