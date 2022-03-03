import React from "react";
import ReactDOM from "react-dom";
import "flowbite";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./context/context";
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
