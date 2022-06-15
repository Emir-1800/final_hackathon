import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../src/components/Footer/Footer";
import MainRoutes from "../src/MainRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
