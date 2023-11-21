import React from "react";
import { Route, Routes } from "react-router-dom";
import { WelcomePage } from "../pages/WelcomePage";
import { MainPage } from "../pages/MainPage";
import { Cotization } from "../pages/Cotization";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/price/:priceSend" element={<Cotization />} />


    </Routes>
  );
};
