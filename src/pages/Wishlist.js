import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "@mui/material";
import Table from "../components/table/Table";
import Banner from "../components/common/Banner";
import { globalStyles } from "../components/styles/styles";
import useFetch from "../hooks/useFetch";
import {
  showLoader,
  hideLoader,
  setWishlistCount,
} from "../redux/app/appSlice";
import NoData from "../components/common/NoData";
import useLazyFetch from "../hooks/useLazyFetch";

export default function Wishlist() {
  const dispatch = useDispatch();
  const globalClasses = globalStyles();

  const {
    data: wishlist,
    loading: wishlistLoading,
    refetch: wishlistRefetch,
  } = useFetch("/wishlist/getWishlist");

  const { loading: wishlistDeleteLoading, lazyRefetch: wishlistLazyRefetch } =
    useLazyFetch();

  useEffect(() => {
    if (wishlistLoading) {
      dispatch(
        showLoader({
          key: "getWishlist",
        }),
      );
    } else {
      dispatch(
        hideLoader({
          key: "getWishlist",
        }),
      );
    }
  }, [dispatch, wishlistLoading]);

  useEffect(() => {
    if (wishlistDeleteLoading) {
      dispatch(
        showLoader({
          key: "deleteWishlist",
        }),
      );
    } else {
      dispatch(
        hideLoader({
          key: "deleteWishlist",
        }),
      );
    }
  }, [dispatch, wishlistDeleteLoading]);

  const handleDeleteWishlist = (id) => {
    wishlistLazyRefetch(`/wishlist/delete/${id}`, null, "DELETE").then(
      (result) => {
        dispatch(setWishlistCount(result.count.data));
        if (result.data.id) {
          wishlistRefetch();
        }
      },
    );
  };

  return (
    <>
      <Banner name="Wishlist" />
      <Container maxWidth="lg" className={globalClasses.featuresSectionStyle}>
        {wishlist &&
          (wishlist.data.length ? (
            <Table
              type="wishlist"
              tableData={wishlist.data}
              deleteWishlist={handleDeleteWishlist}
            />
          ) : (
            <NoData />
          ))}
      </Container>
    </>
  );
}
