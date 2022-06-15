import React from "react";
import SliderComp from "../components/topDeals/SliderComp";
import ProductPage from "../pages/ProductPage/ProductPage";
import TopDeals from "../pages/TopDeals/TopDeals";
import { Routes, Route } from "react-router-dom";
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/topdeals" element={<TopDeals />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
      {/* <TopDeals />
      <ProductPage /> */}
      {/* <SliderComp /> */}
    </div>
  );
};

export default MainRoutes;
