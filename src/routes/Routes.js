import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../layout/header/Header";
import Products from "../pages/Products";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About"
import Account from "../pages/Account"
import Dashboard from "../components/User/Dashboard"
import ButtonComponent from "../pages/ButtonComponent";

const PageRoutes = () => {
  return (
    <Fragment>
      <Header/>
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<About />} />
      <Route path="/account" element={<Account />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
    </Routes>
    </Fragment>
  );
};

export default PageRoutes;
