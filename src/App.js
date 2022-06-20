import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../src/components/Footer/Footer";
import MainRoutes from "../src/MainRoutes";
import AuthContextProvider from "./components/context/AuthContext";
import CartContextProvider from "./components/context/CartContext";
import ProductContextProvider from "./components/context/ProductContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <MainRoutes />
            <Footer />
          </ProductContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
