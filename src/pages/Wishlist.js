import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";
import Table from "../components/table/Table";
import Banner from "../components/common/Banner";
import { globalStyles } from "../components/styles/styles";
import { getWishlistData } from "../redux/wishlist/actions";
import { deleteItemFromWishlist } from "../redux/wishlist/actions";

export default function Wishlist() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlistData);
  const globalClasses = globalStyles();

  useEffect(() => {
    dispatch(getWishlistData());
  }, [dispatch]);

  const deleteFromWishlist = (event, productId) => {
    dispatch(deleteItemFromWishlist({ productId }));
  };

  return (
    <>
      <Banner name="Wishlist" />
      <Container maxWidth="lg" className={globalClasses.featuresSectionStyle}>
        <Table
          type="wishlist"
          tableData={wishlist || []}
          deleteProduct={deleteFromWishlist}
        />
      </Container>
    </>
  );
}
