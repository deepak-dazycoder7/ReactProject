import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderMain from "./Components/Headers/HeaderMain";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Home from "./Components/Home/Home";

const App = () => {

  return (
    <BrowserRouter>
        <HeaderMain/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
