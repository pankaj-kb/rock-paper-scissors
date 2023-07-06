import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./router";

import PlayerProvider from "./context/PlayerProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PlayerProvider>
    <AppRouter />
  </PlayerProvider>
);
