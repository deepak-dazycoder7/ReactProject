import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderMain from "./Components/Headers/HeaderMain";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Home from "./Components/Home/Home";
import Aboutpage from "./Components/Pages/Aboutus/Aboutpage";

const App = () => {
  return (
    <BrowserRouter>
        <HeaderMain/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<Aboutpage/>} />
          </Routes>   
    </BrowserRouter>
  );
};

export default App;
