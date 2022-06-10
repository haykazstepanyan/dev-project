import * as React from "react";
import { Container } from "@mui/material";
import product1 from "../assets/images/product.webp";
import product2 from "../assets/images/product2.webp";
import product3 from "../assets/images/product3.webp";
import { globalStyles } from "../components/styles/styles";
import Layout from "../layout";
import Table from "../components/table";
import Banner from "../components/common/Banner";

function createData(image, name, price, stockStatus, productId) {
  return { image, name, price, stockStatus, productId };
}

const rows = [
  createData(product1, "Handbag Fringilla", 65.0, "In Stock", 1),
  createData(product2, "Handbags Justo", 90.0, "In Stock", 2),
  createData(product3, "Handbag Elit", 80.0, "In Stock", 3),
];

function deleteProduct(productId) {
  // console.log(productId);
}

export default function Wishlist() {
  const globalClasses = globalStyles();

  return (
    <Layout>
      <Banner name="Wishlist" />
      <Container maxWidth="lg" className={globalClasses.featuresSectionStyle}>
        <Table tableData={rows} type="wishlist" deleteProduct={deleteProduct} />
      </Container>
    </Layout>
  );
}
