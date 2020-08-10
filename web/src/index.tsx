import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";
import App from "./App";
import { loadProgressBar } from "axios-progress-bar";
import "axios-progress-bar/dist/nprogress.css";

loadProgressBar();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
