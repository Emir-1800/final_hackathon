import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../src/components/Footer/Footer";
import MainRoutes from "../src/MainRoutes";
import AuthContextProvider from "./components/context/AuthContextProvider";
import CrudContextProvider from "./components/context/CrudContextProvider";
import CardContextProvider from "./components/context/CardContextProvider";

const App = () => {
  return (
    <BrowserRouter>
      <CardContextProvider>
        <CrudContextProvider>
          <AuthContextProvider>
            <MainRoutes />
          </AuthContextProvider>
        </CrudContextProvider>
      </CardContextProvider>
    </BrowserRouter>
  );
};

export default App;
