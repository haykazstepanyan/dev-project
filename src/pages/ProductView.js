import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout";

const Product = () => {
  const params = useParams();
  return (
    <Layout>
      <div>
        <h1>Product number {params.productId} page</h1>
      </div>
    </Layout>
  );
};

export default Product;
