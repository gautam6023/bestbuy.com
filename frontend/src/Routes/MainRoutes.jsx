import React from "react";
import SliderComp from "../components/topDeals/SliderComp";
import ProductContainer from "../pages/ProductPage/ProductContainer";
import TopDeals from "../pages/TopDeals/TopDeals";
import { Routes, Route } from "react-router-dom";
import { ProductPageContainer } from "../pages/ProductPage/Product.styled";
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/topdeals" element={<TopDeals />} />
        <Route path="/products" element={<ProductContainer />} />
        <Route path="/products/:id" element={<ProductContainer />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
