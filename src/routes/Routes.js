import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Shop from "../pages/Shop";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About";
import Account from "../pages/Account";
import Dashboard from "../components/user/Dashboard.js";
import Orders from "../components/user/Orders.js";
import Addresses from "../components/user/Addresses.js";
import Logout from "../components/user/Logout.js";
import AccountDetails from "../components/user/AccountDetails.js";
import ProductView from "../pages/ProductView";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:productId" element={<ProductView />} />
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
  );
};

export default PageRoutes;
