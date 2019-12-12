import React from "react";
import ReactDOM from "react-dom";
import MainNav from "./nav.js";
import "./css/styles.css";

function App() {
  return (
    <div className="App">
      <MainNav />
      <div className="main_content" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
