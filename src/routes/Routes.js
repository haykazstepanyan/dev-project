import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Shop from "../pages/Shop";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About";
import Account from "../pages/Account";
import Dashboard from "../components/account/Dashboard";
import Orders from "../components/account/Orders";
import Login from "../components/account/Login";
import AccountDetails from "../components/account/AccountDetails";
import Wishlist from "../pages/Wishlist";
import ProductView from "../pages/ProductView";
import Cart from "../pages/Cart";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:productId" element={<ProductView />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="account" element={<Account />}>
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="details" element={<AccountDetails />} />
      </Route>
    </Routes>
  );
}

export default PageRoutes;
