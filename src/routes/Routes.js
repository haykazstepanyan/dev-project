import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../layout/header/Header";
import Products from "../components/Card/Products";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";

const PageRoutes = () => {
  return (
    <Fragment>
      <Header/>
    <Routes>

      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />

    </Routes>
    </Fragment>
  );
};

export default PageRoutes;
