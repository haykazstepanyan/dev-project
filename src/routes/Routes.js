import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Fallback from "../components/common/Fallback";
import Layout from "../layout";

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
    <Layout>
      <Fallback>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:productId" element={<ProductView />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Fallback>
      <Routes>
        <Route
          path="account"
          element={
            <Fallback>
              <Account />
            </Fallback>
          }
        >
          <Route
            path="login"
            element={
              <Fallback>
                <Login />
              </Fallback>
            }
          />
          <Route
            path="dashboard"
            element={
              <Fallback>
                <Dashboard />
              </Fallback>
            }
          />
          <Route
            path="orders"
            element={
              <Fallback>
                <Orders />
              </Fallback>
            }
          />
          <Route
            path="details"
            element={
              <Fallback>
                <AccountDetails />
              </Fallback>
            }
          />
        </Route>
      </Routes>
    </Layout>
  );
}

export default PageRoutes;
