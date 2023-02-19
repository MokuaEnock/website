import "./App.css";

import Home from "./pages/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="" element="" />
          <Route path="" element="" />
          <Route path="" element="" />
          <Route path="" element="" />
          <Route path="" element="" />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
