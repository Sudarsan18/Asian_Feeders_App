import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../MainComponent/Home";
import AboutUs from "../MainComponent/AboutUs";
import ContactUs from "../MainComponent/ContactUs";
import Services from "../MainComponent/Services";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<Services />} />
    </Routes>
  );
};

export default Routing;
