import "./App.css";

import Button from "./components/button/button";

function App() {
  return (
    <div className="App" onClick={() => alert("button clicked")}>
      <Button text="take" />
    </div>
  );
}

export default App;
