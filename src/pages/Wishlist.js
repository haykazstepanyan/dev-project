import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";
import Table from "../components/table/Table";
import Banner from "../components/common/Banner";
import { getAllProducts } from "../helpers/helpers";
import { setWishlistProducts } from "../redux/wishlist/wishlistSlice";
import { globalStyles } from "../components/styles/styles";
import { getWishlistData } from "../redux/wishlist/actions";
import { deleteItemFromWishlist } from "../redux/wishlist/actions";

export default function Wishlist() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userData);
  const wishlist = useSelector((state) => state.wishlist.wishlistData);
  const wishlistProducts = useSelector(
    (state) => state.wishlist.wishlisProducts,
  );
  const [products, setProdcuts] = useState([]);
  const globalClasses = globalStyles();

  useEffect(() => {}, [wishlistProducts]);

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
    if (filteredProducts.length > 0) {
      dispatch(setWishlistProducts(filteredProducts));
    }
  }, [dispatch, wishlist]);

  function deleteFromWishlist(event, productId) {
    const data = wishlistProducts.filter((item) => item.id !== productId);
    dispatch(setWishlistProducts(data));
    dispatch(deleteItemFromWishlist({ userId: user.id, productId }));
  }
  return (
    <>
      <Banner name="Wishlist" />
      <Container maxWidth="lg" className={globalClasses.featuresSectionStyle}>
        <Table
          type="wishlist"
          tableData={wishlistProducts}
          deleteProduct={deleteFromWishlist}
        />
      </Container>
    </>
  );
}
