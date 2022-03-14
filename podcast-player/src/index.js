import React from "react";
import ReactDOM from "react-dom";
import "./globals.css";
import App from "./App";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
