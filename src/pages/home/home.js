import "./home.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let redirect = useNavigate();

  function handleSignupClick() {
    redirect("/signup");
  }
  return (
    <main id="home-page">
      {/* <Header />

      <Footer /> */}
    </main>
  );
}
