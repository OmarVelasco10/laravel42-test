import React from "react";
import { Route, Routes } from "react-router-dom";
import { WelcomePage } from "../pages/WelcomePage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
    </Routes>
  );
};
