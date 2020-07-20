import React from "react";
import Header from "./Components/Header/Header";
import backImg from "./background.jpg";
import "./App.scss";

function App() {
  return (
    <div style={{ backgroundImage: `url(${backImg})` }} className="App">
      <Header />
    </div>
  );
}

export default App;
