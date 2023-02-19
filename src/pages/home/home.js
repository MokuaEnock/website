import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let redirect = useNavigate();

  function handleSignupClick() {
    redirect("/signup");
  }
  return <main id="home-page">This is the home page</main>;
}
