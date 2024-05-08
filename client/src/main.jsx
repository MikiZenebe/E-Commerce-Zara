import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { lightTheme } from "./utils/Themes.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
