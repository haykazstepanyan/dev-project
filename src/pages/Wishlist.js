import { useEffect, useState } from "react";
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
  const [productIdes, setProductIdes] = useState([]);

  const {
    data: cartItems,
    // loading: cartLoading,
    // refetch: cartRefetch,
  } = useFetch("/cart/getCartItems");

  const {
    // data: cartChangeData,
    // loading: cartChangeLoading,
    lazyRefetch: cartLazyRefetch,
  } = useLazyFetch();

  useEffect(() => {}, [productIdes]);
  useEffect(() => {
    if (cartItems) {
      const newArr =
        cartItems &&
        cartItems.data.map((item) => {
          return {
            productId: item.productId,
          };
        });
      setProductIdes(newArr);
    }
  }, [cartItems]);

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
  const handleAddToCart = (productId, index) => {
    cartLazyRefetch(
      "/cart/create",
      {
        body: JSON.stringify({ productId }),
        headers: {
          "Content-Type": "application/json",
        },
      },
      "POST",
    ).then((result) => {
      if (result.data.id) {
        const newCartItems = [...productIdes];
        newCartItems[index] = {
          productId,
        };
        setProductIdes(newCartItems);
      }
    });
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
              ides={productIdes}
              handleAddToCart={handleAddToCart}
            />
          ) : (
            <NoData />
          ))}
      </Container>
    </>
  );
}
