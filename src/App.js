import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../src/components/Footer/Footer";
import MainRoutes from "../src/MainRoutes";
import AuthContextProvider from "./components/context/AuthContextProvider.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <MainRoutes />
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
