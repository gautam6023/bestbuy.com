import React from "react";
import SliderComp from "../components/topDeals/SliderComp";
import ProductContainer from "../pages/ProductPage/ProductContainer";
import TopDeals from "../pages/TopDeals/TopDeals";
import { Routes, Route } from "react-router-dom";
// import { ProductContainer } from "../pages/ProductPage/ProductContainer";
import Detailsitem from "../pages/Product Detail Page/Detailsitem";
import { Cart } from "../components/Cart/Cart";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/topdeals" element={<TopDeals />} />
        <Route path="/products/:id" element={<ProductContainer />} />
        <Route path="/products/:id/:id" element={<Detailsitem />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainRoutes;
