import { Suspense } from "react";
import PropTypes from "prop-types";

function Fallback({ children }) {
  return <Suspense fallback={<div>Loading......</div>}>{children}</Suspense>;
}

Fallback.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Fallback;
