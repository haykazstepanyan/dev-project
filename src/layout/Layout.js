import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  const location = useLocation();
  const segment1 = location.pathname.split("/");

  return segment1[1] && segment1[1] === "admin" ? (
    <div>{children}</div>
  ) : (
    <>
      <Header />
      {children}
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
