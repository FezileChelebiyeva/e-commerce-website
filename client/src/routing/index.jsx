import React from "react";
import { Route, Routes } from "react-router-dom";
import CardsPage from "../pages/card-page";
import HomePage from "../pages/home";

export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cards" element={<CardsPage />} />
      </Routes>
    </div>
  );
};

export default Routing;
