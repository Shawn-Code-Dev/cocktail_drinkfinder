import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DrinkState from "./context/DrinkState";

ReactDOM.render(
  <DrinkState>
    <App />
  </DrinkState>,
  document.getElementById("root")
);
