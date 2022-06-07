import { Routes, Route } from "react-router-dom";

import ContactUs from "../pages/ContactUs";
import Main from "../pages/Main";
import Product from "../pages/Product";
import About from "../pages/About";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/product/:productId" element={<Product />} />
    </Routes>
  );
};

export default PageRoutes;
