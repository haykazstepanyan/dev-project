import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";
import Table from "../components/table/Table";
import Banner from "../components/common/Banner";
import { getAllProducts } from "../helpers/helpers";
import { setWishlistProducts } from "../redux/wishlist/wishlistSlice";
import { globalStyles } from "../components/styles/styles";
import { getWishlistData } from "../redux/wishlist/actions";

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
export default function Wishlist() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userData);
  const wishlist = useSelector((state) => state.wishlist.wishlistData);
  const wishlistProducts = useSelector(
    (state) => state.wishlist.wishlistProducts,
  );
  const [products, setProdcuts] = useState([]);
  const globalClasses = globalStyles();

  useEffect(() => {
    dispatch(getWishlistData(user.id));
  }, [dispatch, products]);

  useEffect(() => {
    getAllProducts().then((data) => {
      setProdcuts(data);
    });
  }, []);

  useEffect(() => {
    const productsId = [];
    const filteredProducts = [];
    wishlist?.forEach((item) => productsId.push(item.productId));
    productsId.forEach((id) => {
      const product = products.find((item) => item.id === id);
      if (product) filteredProducts.push(product);
    });
    console.log(filteredProducts);
    if (filteredProducts.length > 0) {
      dispatch(setWishlistProducts(filteredProducts));
    }
  }, [wishlist]);

  return (
    <>
      <Banner name="Wishlist" />
      <Container maxWidth="lg" className={globalClasses.featuresSectionStyle}>
        <Table
          tableData={wishlistProducts ? wishlistProducts : []}
          type="wishlist"
          // deleteProduct={deleteProduct}
        />
      </Container>
    </>
  );
}
