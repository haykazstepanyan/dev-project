import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Grid } from "@mui/material";
import Table from "../components/table/Table";
import Button from "../components/button";
import Banner from "../components/common/Banner";
import { globalStyles } from "../components/styles/styles";
import { cartStyles } from "./styles";
import Input from "../components/input";
import useFetch from "../hooks/useFetch";
import { showLoader, hideLoader, setCartCount } from "../redux/app/appSlice";
import NoData from "../components/common/NoData";
import useLazyFetch from "../hooks/useLazyFetch";

function Cart() {
  const globalClasses = globalStyles();
  const classes = cartStyles();
  const dispatch = useDispatch();
  const [totalSum, setTotalSum] = useState(0);

  const {
    data: cartItems,
    loading: cartLoading,
    refetch: cartRefetch,
  } = useFetch("/cart/getCartItems");

  const {
    data: cartDeleteData,
    loading: cartDeleteLoading,
    lazyRefetch: cartDeleteRefetch,
  } = useLazyFetch();

  useEffect(() => {
    if (cartLoading) {
      dispatch(
        showLoader({
          key: "getCartItems",
        }),
      );
    }
  }, [dispatch, cartLoading]);

  useEffect(() => {
    if (cartItems) {
      const sum = cartItems.data
        .reduce(
          (prev, current) =>
            prev +
            (current.product.price -
              (current.product.price * current.product.discount) / 100) *
              current.count,
          0,
        )
        .toFixed(2);

      setTotalSum(sum);

      dispatch(
        hideLoader({
          key: "getCartItems",
        }),
      );
    }
  }, [dispatch, cartItems]);

  useEffect(() => {
    if (cartDeleteLoading) {
      dispatch(
        showLoader({
          key: "deleteCartItem",
        }),
      );
    }
  }, [dispatch, cartDeleteLoading]);

  useEffect(() => {
    if (cartDeleteData) {
      dispatch(
        hideLoader({
          key: "deleteCartItem",
        }),
      );
    }
  }, [dispatch, cartDeleteData]);

  const handleDeleteCartItem = (id) => {
    cartDeleteRefetch(`/cart/delete/${id}`, null, "DELETE").then((result) => {
      if (result.data.id) {
        dispatch(setCartCount(result.count.data));
        cartRefetch();
      }
    });
  };

  return (
    <>
      <Banner name="Cart" />
      <Container maxWidth="lg" className={globalClasses.featuresSectionStyle}>
        {cartItems &&
          (cartItems.data.length ? (
            <>
              <Table
                tableData={cartItems.data}
                dataRefetch={cartRefetch}
                type="cart"
                deleteCart={handleDeleteCartItem}
              />
              <Grid container spacing={2} style={{ marginTop: "20px" }}>
                <Grid item xs={12} md={6}>
                  <div>
                    <div className={classes.couponBlock}>
                      <h3>Coupon</h3>
                    </div>
                    <div className={classes.couponBottomBlock}>
                      <p>Enter your coupon code if you have one.</p>
                      <div>
                        <Input
                          type="text"
                          placeholder="Coupon code"
                          size="small"
                          borders="square"
                          state="noFocus"
                          htmlFor="subject"
                          className={globalClasses.inputStyle}
                        />
                        <Button
                          color="secondary"
                          disableRipple
                          style={{ marginTop: 15 }}
                        >
                          Apply coupon
                        </Button>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div>
                    <div className={classes.couponBlock}>
                      <h3>Cart Totals</h3>
                    </div>
                    <div className={classes.couponBottomBlock}>
                      <div className={classes.cartTotals}>
                        <p>Total</p>
                        <p>${totalSum}</p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <Button color="primary" disableRipple>
                          proceed to checkout
                        </Button>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </>
          ) : (
            <NoData />
          ))}
      </Container>
    </>
  );
}

export default Cart;
