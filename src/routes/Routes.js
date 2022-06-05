import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Main from "../pages/Main";

import ButtonComponent from "../pages/ButtonComponent";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/check" element={<ButtonComponent />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default PageRoutes;
