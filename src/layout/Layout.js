import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Header from "./header";
import Footer from "./footer";
import Loader from "../components/loader";

function Layout({ children }) {
  const showLoader = useSelector((state) => state.auth.loading);
  return (
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
