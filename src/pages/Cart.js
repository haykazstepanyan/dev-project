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
import { showLoader, hideLoader } from "../redux/app/appSlice";
import NoData from "../components/common/NoData";
import useLazyFetch from "../hooks/useLazyFetch";

function Cart() {
  const globalClasses = globalStyles();
  const classes = cartStyles();
  const dispatch = useDispatch();
  const [count, setCount] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const [shippingPrice] = useState(0);

  useEffect(() => {}, [count]);
  const {
    data: cartItems,
    loading: cartLoading,
    refetch: cartRefetch,
  } = useFetch("/cart/getCartItems");

  const {
    data: cartDeleteData,
    loading: cartDeleteLoading,
    lazyRefetch: cartLazyRefetch,
  } = useLazyFetch();

  useEffect(() => {
    if (cartLoading) {
      dispatch(
        showLoader({
          key: "cart/getCartItems",
        }),
      );
    }
  }, [dispatch, cartLoading]);

  useEffect(() => {
    if (cartItems) {
      const sum = Number(
        cartItems.data
          .reduce((prev, current) => {
            console.log(prev, current.product?.price, "11111111");
            return Number(
              Number(prev) +
                Number(
                  (Number(current.product?.price) -
                    (Number(current.product?.price) *
                      Number(current.product?.discount)) /
                      100) *
                    Number(current?.count),
                ),
            );
          }, 0)
          .toFixed(2),
      );
      setTotalSum(sum);
      console.log(totalSum, "totalSum");

      const qunatities =
        cartItems &&
        cartItems.data.map((item) => {
          console.log(item);
          return {
            cardId: item.id,
            quantity: item.count,
          };
        });
      setCount(qunatities);
      dispatch(
        hideLoader({
          key: "cart/getCartItems",
        }),
      );
    }
  }, [dispatch, cartItems, totalSum]);

  useEffect(() => {
    if (cartDeleteLoading) {
      dispatch(
        showLoader({
          key: "cart/deleteCartItem",
        }),
      );
    }
  }, [dispatch, cartDeleteLoading]);

  useEffect(() => {
    if (cartDeleteData) {
      dispatch(
        hideLoader({
          key: "cart/deleteCartItem",
        }),
      );
    }
  }, [dispatch, cartDeleteData]);

  const handleDeleteCartItem = (id) => {
    cartLazyRefetch(`/cart/delete/${id}`, null, "DELETE").then((result) => {
      if (result.data.id) {
        cartRefetch();
      }
    });
  };

  const handleChangeCount = (value, id, index) => {
    console.log(value, "valueeeeee");
    const newCount = [...count];
    newCount[index] = {
      cardId: id,
      quantity: +value,
    };
    console.log(newCount);
    setCount(newCount);
    // cartRefetch(
    //   `/cart/count/${id}`,
    //   {
    //     body: JSON.stringify({ count: value }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   },
    //   "PUT",
    // );
  };

  return (
    <>
      <Banner name="Cart" />
      <Container maxWidth="lg" className={globalClasses.featuresSectionStyle}>
        {cartItems &&
          (cartItems.data.length ? (
            <Table
              tableData={cartItems.data}
              type="cart"
              deleteData={handleDeleteCartItem}
              changeCount={handleChangeCount}
              count={count}
            />
          ) : (
            <NoData />
          ))}

        <Grid container spacing={2} style={{ marginTop: "20px" }}>
          <Grid item xs={12} lg={6}>
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
          <Grid item xs={12} lg={6}>
            <div>
              <div className={classes.couponBlock}>
                <h3>Cart Totals</h3>
              </div>
              <div className={classes.cartTotalsBottom}>
                <div>
                  <div>
                    <p>Subtotal</p>
                    <p>${totalSum}</p>
                  </div>
                  <div>
                    <p>Shipping</p>
                    <p>
                      <span>Flat Rate:</span> ${shippingPrice}
                    </p>
                  </div>
                  <div
                    style={{
                      paddingTop: "20px",
                      borderTop: "1px solid #e1e1e1",
                    }}
                  >
                    <p>Total</p>
                    <p>${totalSum + shippingPrice}</p>
                  </div>
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
      </Container>
    </>
  );
}

export default Cart;
