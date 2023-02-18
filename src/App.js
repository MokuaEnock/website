import "./App.css";

import Home from "./pages/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="" element="" />
          <Route path="" element="" />
          <Route path="" element="" />
          <Route path="" element="" />
          <Route path="" element="" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
