import React from "react";
import { Route, Routes } from "react-router-dom";
import CardsPage from "../pages/card-page";
import DeatilsCard from "../pages/details-page";
import HomePage from "../pages/home";
import NotFound from "../pages/not-found-page";
import AllProducts from "../pages/products-page";

export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/collection-all" element={<AllProducts />} />
        <Route path="/:name" element={<DeatilsCard />} />
        <Route path="/collection-all/:name" element={<DeatilsCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Routing;
