import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Fallback from "../components/common/Fallback";
import Layout from "../layout";
import Loader from "../components/loader";

const Account = lazy(() => import("../pages/Account"));
const Dashboard = lazy(() => import("../pages/account/Dashboard"));
const Orders = lazy(() => import("../pages/account/Orders"));
const Wishlist = lazy(() => import("../pages/Wishlist"));
const ProductView = lazy(() => import("../pages/ProductView"));
const Cart = lazy(() => import("../pages/Cart"));
const Main = lazy(() => import("../pages/Main"));
const Shop = lazy(() => import("../pages/Shop"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const About = lazy(() => import("../pages/About"));
const SignUp = lazy(() => import("../pages/SignUp"));
const SignIn = lazy(() => import("../pages/SignIn"));
const AccountDetails = lazy(() => import("../pages/account/AccountDetails"));
const AdminDashboard = lazy(() => import("../pages/admin/AdminDashboard"));
const Brand = lazy(() => import("../pages/admin/Brand"));
const Category = lazy(() => import("../pages/admin/Category"));
const Product = lazy(() => import("../pages/admin/products/Product"));
const ContactMessage = lazy(() => import("../pages/admin/ContactMessage"));
const Users = lazy(() => import("../pages/admin/Users"));
const Checkout = lazy(() => import("../pages/Checkout"));

function PageRoutes() {
  const userRole = useSelector((state) => state.auth.role);
  const loading = useSelector((state) => state.auth.authLoading);

  let allowedRoutes;

  if (userRole === "") {
    allowedRoutes = (
      <>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </>
    );
  } else if (userRole === "USER") {
    allowedRoutes = (
      <>
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout/*" element={<Checkout />} />
        <Route path="account" element={<Account />}>
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
          <Route
            path="*"
            element={
              <Fallback>
                <Dashboard />
              </Fallback>
            }
          />
        </Route>
      </>
    );
  } else if (userRole === "ADMIN" || userRole === "MAIN_ADMIN") {
    allowedRoutes = (
      <Route path="admin" element={<AdminDashboard />}>
        <Route
          path="brand"
          element={
            <Fallback>
              <Brand />
            </Fallback>
          }
        />
        <Route
          path="category"
          element={
            <Fallback>
              <Category />
            </Fallback>
          }
        />
        <Route
          path="product"
          element={
            <Fallback>
              <Product />
            </Fallback>
          }
        />
        <Route
          path="contactMessage"
          element={
            <Fallback>
              <ContactMessage />
            </Fallback>
          }
        />

        <Route
          path="manageAccount"
          element={
            <Fallback>
              <AccountDetails />
            </Fallback>
          }
        />
        <Route
          path="user"
          element={
            <Fallback>
              <Users />
            </Fallback>
          }
        />
      </Route>
    );
  }

  if (loading) {
    return <Loader />;
  }
  return (
    <Layout>
      <Fallback>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="product/:productId" element={<ProductView />} />

          <Route path="about" element={<About />} />

          <Route path="contact" element={<ContactUs />} />
          {allowedRoutes}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Fallback>
    </Layout>
  );
}

export default PageRoutes;
