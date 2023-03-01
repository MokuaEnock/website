import "./App.css";

import Home from "./pages/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Services from "./pages/Services/services";
import Team from "./pages/Team/team";
import WaitL from "./pages/waitlist/waitlist";

function App() {
  return (
    <BrowserRouter className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/waitlist" element={<WaitL />} />
        <Route path="" element="" />
        <Route path="" element="" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
