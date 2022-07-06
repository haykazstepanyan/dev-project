import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "@mui/material";
import Table from "../components/table/Table";
import Banner from "../components/common/Banner";
import { globalStyles } from "../components/styles/styles";
import useFetch from "../hooks/useFetch";
import { showLoader, hideLoader } from "../redux/app/appSlice";
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

  const {
    data: wishlistDeleteData,
    loading: wishlistDeleteLoading,
    lazyRefetch: wishlistLazyRefetch,
  } = useLazyFetch();

  useEffect(() => {
    if (wishlistLoading) {
      dispatch(
        showLoader({
          key: "wishlist/getWishlist",
        }),
      );
    }
  }, [dispatch, wishlistLoading]);

  useEffect(() => {
    if (wishlist) {
      dispatch(
        hideLoader({
          key: "wishlist/getWishlist",
        }),
      );
    }
  }, [dispatch, wishlist]);

  useEffect(() => {
    if (wishlistDeleteLoading) {
      dispatch(
        showLoader({
          key: "wishlist/deleteWishlist",
        }),
      );
    }
  }, [dispatch, wishlistDeleteLoading]);

  useEffect(() => {
    if (wishlistDeleteData) {
      dispatch(
        hideLoader({
          key: "wishlist/deleteWishlist",
        }),
      );
    }
  }, [dispatch, wishlistDeleteData]);

  const handleDeleteWishlist = (id) => {
    wishlistLazyRefetch(`/wishlist/delete/${id}`, null, "DELETE").then(
      (result) => {
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
              deleteData={handleDeleteWishlist}
            />
          ) : (
            <NoData />
          ))}
      </Container>
    </>
  );
}
