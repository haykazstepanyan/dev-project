import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Shop from "../pages/Shop";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About";
import Account from "../pages/Account";
import Dashboard from "../components/account/Dashboard.js";
import Orders from "../components/account/Orders.js";
import Addresses from "../components/account/Addresses.js";
import Login from "../components/account/Login.js";
import AccountDetails from "../components/account/AccountDetails.js";
import Wishlist from "../pages/Wishlist";
import ProductView from "../pages/ProductView";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:productId" element={<ProductView />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/account/login" element={<Login />} />
      <Route path="account" element={<Account />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="addresses" element={<Addresses />} />
        <Route path="details" element={<AccountDetails />} />
      </Route>
    </Routes>
  );
};

export default PageRoutes;
