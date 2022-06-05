import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../layout/header/Header";
import Products from "../components/Card/Products";


const PageRoutes = () => {
  return (
    <Fragment>
      <Header/>
    <Routes>
      <Route path="/products" element={<Products />} />
    </Routes>
    </Fragment>
  );
};

export default PageRoutes;
