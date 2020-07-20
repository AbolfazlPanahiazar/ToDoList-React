import React from "react";
import Header from "./Components/Header/Header";
import ToDo from "./Components/ToDo/ToDo";
import backImg from "./background.jpg";
import "./App.scss";

function App() {
  return (
    <div style={{ backgroundImage: `url(${backImg})` }} className="App">
      <Header />
      <ToDo />
    </div>
  );
}

export default App;
