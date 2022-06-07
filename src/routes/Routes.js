import React from "react";
import { Routes, Route } from "react-router-dom";

import Products from "../pages/Products.js";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About";
import Account from "../pages/Account";
import Dashboard from "../components/user/Dashboard.js";
import Orders from "../components/user/Orders.js";
import Addresses from "../components/user/Addresses.js";
import Logout from "../components/user/Logout.js";
import AccountDetails from "../components/user/AccountDetails.js";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="account" element={<Account />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="logout" element={<Logout />} />
          <Route path="accountdetails" element={<AccountDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default PageRoutes;
