import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  // hideLoader,
  setCartCount,
  // showLoader,
  showSnackbar,
} from "../../redux/app/appSlice";
import useDebounce from "../../hooks/useDebounce";
import useLazyFetch from "../../hooks/useLazyFetch";
import Button from "../button";
import addToCartStyles from "./styles";
import SignInModal from "../modals/SignInModal";
import Input from "../input";
import Loader from "../loader";

function AddToCart({
  cart,
  isAuth,
  productId,
  btnWidth,
  deleteCart,
  from,
  dataRefetch,
}) {
  const classes = addToCartStyles({ btnWidth });
  const [count, setCount] = useState(cart?.[0]?.count || 0);
  const [loading, setLoading] = useState(false);
  const [startToSearch, setStartToSearch] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const debouncedCount = useDebounce(count, 1500);

  const { data: cartChangeData, lazyRefetch: cartChangeRefetch } =
    useLazyFetch();

  // useEffect(() => {
  //   if (cartChangeLoading) {
  //     dispatch(
  //       showLoader({
  //         key: "cartChange",
  //       }),
  //     );
  //   } else {
  //     dispatch(
  //       hideLoader({
  //         key: "cartChange",
  //       }),
  //     );
  //   }
  // }, [dispatch, cartChangeLoading]);
  const onModalOpen = () => {
    setOpenModal(true);
  };
  const onModalClose = () => {
    setOpenModal(false);
  };

  const handleAddToCart = (countToUpdate) => {
    if (countToUpdate) {
      cartChangeRefetch(
        "/cart",
        {
          body: JSON.stringify({
            count: countToUpdate,
            cardId: cartChangeData?.data?.id || cart?.[0]?.id || 0,
            productId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        },
        "PUT",
      )
        .then((result) => {
          if (result.data?.count !== count) {
            setCount(result.data.count);
          }
          dispatch(setCartCount(result.count.data));
          setLoading(false);
          if (dataRefetch) dataRefetch();
        })
        .catch(() => {
          dispatch(
            showSnackbar({
              snackbarType: "error",
              snackbarMessage: "Oops! Something went wrong!",
            }),
          );
        });
    } else {
      cartChangeRefetch(
        `/cart/delete/${cartChangeData?.data?.id || cart?.[0].id}`,
        null,
        "DELETE",
      )
        .then((result) => {
          dispatch(setCartCount(result.count.data));
          setLoading(false);
          if (dataRefetch) {
            dataRefetch();
          }
        })
        .catch(() => {
          dispatch(
            showSnackbar({
              snackbarType: "error",
              snackbarMessage: "Oops! Something went wrong!",
            }),
          );
        });
    }
  };

  useEffect(() => {
    if (startToSearch && count !== "") {
      handleAddToCart(debouncedCount || 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedCount]);

  const handleOnBlur = () => {
    if (!count) {
      if (deleteCart) {
        deleteCart(cartChangeData?.data?.id || cart[0].id);
      } else {
        setCount(0);
      }
    }
  };

  const handleCountChange = (value, name) => {
    if (!isAuth) {
      onModalOpen();
      return;
    }
    if (value <= 0 && name === "input") {
      setCount("");
      return;
    }
    if (!+value && deleteCart) {
      deleteCart(cartChangeData?.data?.id || cart[0].id);
      return;
    }
    if (value < 0) {
      return;
    }
    if (from === "wishlist") {
      setLoading(true);
    }
    if (value > 50) {
      dispatch(
        showSnackbar({
          snackbarType: "warning",
          snackbarMessage:
            "Please contact with us if you want more than 50 items",
        }),
      );
      setCount(50);
      return;
    }
    setCount(value || 0);
    if (!startToSearch) {
      setStartToSearch(true);
    }
  };

  let renderAddToCart;
  if (loading) {
    renderAddToCart = <Loader />;
  } else if (from === "wishlist") {
    if (count) {
      renderAddToCart = <p>Already in cart</p>;
    } else {
      renderAddToCart = (
        <Button
          color="primary"
          disableRipple
          onClick={() => handleCountChange(count + 1)}
        >
          Add to cart
        </Button>
      );
    }
  } else if (count || count === "") {
    renderAddToCart = (
      <div className={classes.cartContainer}>
        <Button color="info" onClick={() => handleCountChange(count - 1)}>
          -
        </Button>
        <Input
          state="noFocus"
          type="number"
          value={count}
          name="input"
          onChange={(e) => handleCountChange(+e.target.value, e.target.name)}
          blur={handleOnBlur}
        />
        <Button color="info" onClick={() => handleCountChange(count + 1)}>
          +
        </Button>
      </div>
    );
  } else {
    renderAddToCart = (
      <Button
        color="primary"
        disableRipple
        onClick={() => handleCountChange(count + 1)}
      >
        Add to cart
      </Button>
    );
  }

  return (
    <>
      <div className={classes.addToCart}>{renderAddToCart}</div>
      <SignInModal open={openModal} closeModal={onModalClose} />
    </>
  );
}

AddToCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.number),
  isAuth: PropTypes.bool,
  productId: PropTypes.number,
  btnWidth: PropTypes.number,
  deleteCart: PropTypes.func,
  from: PropTypes.string,
  dataRefetch: PropTypes.func,
};

export default AddToCart;
