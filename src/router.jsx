import React from "react";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import PlayerForm from "./Pages/PlayerForm";

import App from "./App";

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<PlayerForm />} />
          <Route path="/game" element={<App />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    );
  };
  
  export default AppRouter;