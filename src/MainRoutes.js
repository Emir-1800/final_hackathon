import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "../src/components/pages/Services";
import Products from "../src/components/pages/Products";
import SignUp from "../src/components/pages/SignUp";
import Register from "./components/Auth/Register";
import AddProduct from "./components/Admin/AddProduct/AddProduct";
import EditProduct from "./components/Admin/EditProduct/EditProduct";
import ProductDetails from "./components/pages/ProductsDetails";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/addatour" element={<AddProduct />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="edit/:id" element={<EditProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
