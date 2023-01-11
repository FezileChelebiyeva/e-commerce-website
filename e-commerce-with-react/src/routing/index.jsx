import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import AboutUsPage from "../pages/home/about-us";
import ProductPage from "../pages/product";
import VariablesProduct from "../pages/product/variables";

export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection-all" element={<ProductPage />} />
        <Route path="/variables-product" element={<VariablesProduct />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </div>
  );
};

export default Routing;
