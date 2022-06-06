import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../layout/header/Header";
<<<<<<< HEAD
import Products from "../pages/Products";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About"
import Account from "../pages/Account"
import Dashboard from "../components/User/Dashboard"
import ButtonComponent from "../pages/ButtonComponent";
=======
import Products from "../components/Card/Products";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
>>>>>>> 5e308aaa4e4bcbf84f688739e91babffe6ae847b

const PageRoutes = () => {
  return (
    <Fragment>
      <Header/>
    <Routes>
      <Route path="/products" element={<Products />} />
<<<<<<< HEAD
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<About />} />
      <Route path="/account" element={<Account />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
=======
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />

>>>>>>> 5e308aaa4e4bcbf84f688739e91babffe6ae847b
    </Routes>
    </Fragment>
  );
};

export default PageRoutes;
