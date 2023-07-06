import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import PlayerForm from "./Pages/PlayerForm";
import PlayerProvider from "./context/PlayerProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PlayerProvider>
    <PlayerForm />
    <App />
  </PlayerProvider>
);
