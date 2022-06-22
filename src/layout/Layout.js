import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Header from "./header";
import Footer from "./footer";
import Loader from "../components/loader";

function Layout({ children }) {
  const showLoader = useSelector((state) => state.auth.loading);
  const location = useLocation();
  const segment1 = location.pathname.split("/");

  return segment1[1] && segment1[1] === "admin" ? (
    <div>{children}</div>
  ) : (
    <>
      <Header />
      {showLoader ? <Loader /> : children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Layout;
