import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";

export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="*" element={<div>Not Found</div>} /> */}
      </Routes>
    </div>
  );
};

export default Routing;
