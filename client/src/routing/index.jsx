import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";

export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default Routing;
