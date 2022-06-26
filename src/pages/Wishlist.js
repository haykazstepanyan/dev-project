import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Table from "../components/table/Table";
import Banner from "../components/common/Banner";
// import product1 from "../assets/images/product.webp";
// import product2 from "../assets/images/product2.webp";
// import product3 from "../assets/images/product3.webp";
import { getWishlistData, getAllProducts } from "../helpers/helpers";
import { globalStyles } from "../components/styles/styles";

// function createData(image, name, price, stockStatus, productId) {
//   return {
//     image,
//     name,
//     price,
//     stockStatus,
//     productId,
//   };
// }

// const rows = [
//   createData(product1, "Handbag Fringilla", 65.0, "In Stock", 1),
//   createData(product2, "Handbags Justo", 90.0, "In Stock", 2),
//   createData(product3, "Handbag Elit", 80.0, "In Stock", 3),
// ];
const USERIDFAKE = 1;
export default function Wishlist() {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [products, setProdcuts] = useState([]);
  useEffect(() => {
    getAllProducts().then((data) => {
      setProdcuts(data);
    });
  }, []);
  useEffect(() => {
    getWishlistData(USERIDFAKE).then((data) => {
      const productsId = [];
      const filteredProducts = [];
      data.forEach((item) => productsId.push(item.productId));
      productsId.forEach((id) => {
        const product = products.find((item) => item.id === id);
        if (product) filteredProducts.push(product);
      });
      setWishlistProducts(filteredProducts);
    });
  }, [products]);

  const globalClasses = globalStyles();

  return (
    <>
      <Banner name="Wishlist" />
      <Container maxWidth="lg" className={globalClasses.featuresSectionStyle}>
        <Table
          tableData={wishlistProducts}
          type="wishlist"
          // deleteProduct={deleteProduct}
        />
      </Container>
    </>
  );
}
