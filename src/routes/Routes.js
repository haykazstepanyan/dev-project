import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Account = lazy(() => import("../pages/Account"));
const Dashboard = lazy(() => import("../components/account/Dashboard"));
const Orders = lazy(() => import("../components/account/Orders"));
const Login = lazy(() => import("../components/account/Login"));
const Wishlist = lazy(() => import("../pages/Wishlist"));
const ProductView = lazy(() => import("../pages/ProductView"));
const Cart = lazy(() => import("../pages/Cart"));
const Main = lazy(() => import("../pages/Main"));
const Shop = lazy(() => import("../pages/Shop"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const About = lazy(() => import("../pages/About"));
const AccountDetails = lazy(() =>
  import("../components/account/AccountDetails"),
);

function PageRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}

export default PageRoutes;
