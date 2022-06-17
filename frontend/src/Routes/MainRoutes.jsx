import React from "react";
import SliderComp from "../components/topDeals/SliderComp";
import ProductContainer from "../pages/ProductPage/ProductContainer";
import TopDeals from "../pages/TopDeals/TopDeals";
import { Routes, Route } from "react-router-dom";
// import { ProductContainer } from "../pages/ProductPage/ProductContainer";
import Detailsitem from "../pages/Product Detail Page/Detailsitem";
import { Cart } from "../components/Cart/Cart";
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/topdeals" element={<TopDeals />} />
        <Route path="/products" element={<ProductContainer />} />
        <Route path="/products/:id" element={<Detailsitem />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
