import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let redirect = useNavigate();

  function handleSignupClick() {
    redirect("/signup");
  }

  function WaitList() {
    return <form id="waitlist-form">This is the waitlist</form>;
  }
  return (
    <main id="home-page">
      <p>This is the homepage</p>
      <WaitList />
    </main>
  );
}
