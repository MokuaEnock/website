import "./App.css";

import Home from "./pages/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Navbar from "./components/NavBar/Navbar";
function App() {
  return (
      <BrowserRouter className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="" element="" />
          <Route path="" element="" />
          <Route path="" element="" />
          <Route path="" element="" />
          <Route path="" element="" />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
