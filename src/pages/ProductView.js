import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Button from "../components/button";
import { productViewStyles } from "./styles";
import { addToCartStyles } from "../components/styles/styles";
import useFetch from "../hooks/useFetch";
import { showLoader, hideLoader, showSnackbar } from "../redux/app/appSlice";
import useLazyFetch from "../hooks/useLazyFetch";
import SignInModal from "../components/modals/SignInModal";
import { currencySymbols } from "../constants/constants";
import useDebounce from "../hooks/useDebounce";
import Input from "../components/input";

function Product() {
  const [isProductLiked, setIsProductLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [startToSearch, setStartToSearch] = useState(false);

  const debouncedCount = useDebounce(count, 1500);
  const selectedCurrency = useSelector((state) => state.app.currency);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const navigate = useNavigate();
  const classes = productViewStyles();
  const cartClasses = addToCartStyles();

  const {
    data: productData,
    loading: prodcutLoading,
    error: productError,
  } = useFetch(`/products/getProducts/${productId}`);

  const { data: wishlistChangeData, lazyRefetch: wishlistRefetch } =
    useLazyFetch();

  const { data: cartChangeData, lazyRefetch: cartRefetch } = useLazyFetch();

  const {
    id,
    name,
    price,
    discount,
    description,
    category,
    productImg,
    wishlist,
    cart,
  } = productData?.data || {};

  const ratesData = JSON.parse(localStorage.getItem("rates"));
  const rates = ratesData?.currencyRates;
  let convertedPrice = price * (rates?.[selectedCurrency] || 1);
  let discountedPrice = convertedPrice - (convertedPrice * discount) / 100;
  if (selectedCurrency === "AMD" || selectedCurrency === "RUB") {
    convertedPrice = Math.trunc(convertedPrice);
    discountedPrice = Math.trunc(discountedPrice);
  } else {
    convertedPrice = parseFloat(convertedPrice.toFixed(2));
    discountedPrice = parseFloat(discountedPrice.toFixed(2));
  }
  const convertedSymbol = currencySymbols[selectedCurrency];

  useEffect(() => {
    if (prodcutLoading) {
      showLoader({
        key: "getProduct",
      });
    } else {
      hideLoader({
        key: "getProduct",
      });
    }
  }, [prodcutLoading]);

  useEffect(() => {
    if (productError) {
      dispatch(
        showSnackbar({
          snackbarType: "error",
          snackbarMessage: "Oops! Something went wrong!",
        }),
      );
    }
  }, [productError, dispatch]);

  useEffect(() => {
    if (productData) {
      setIsProductLiked(wishlist && wishlist.length);
      setCount(cart?.[0]?.count || 0);
    }
  }, [productData, wishlist, cart]);

  const onModalOpen = () => {
    setOpenModal(true);
  };
  const onModalClose = () => {
    setOpenModal(false);
  };

  const handleWishlistChange = () => {
    if (!isAuth) {
      onModalOpen();
      return;
    }
    if (isProductLiked) {
      wishlistRefetch(
        `/wishlist/delete/${wishlistChangeData?.data?.id || wishlist[0].id}`,
        null,
        "DELETE",
      ).then((result) => {
        if (result.data.id) {
          setIsProductLiked(false);
        }
      });
    } else {
      wishlistRefetch(
        "/wishlist/create",
        {
          body: JSON.stringify({ productId: id }),
          headers: {
            "Content-Type": "application/json",
          },
        },
        "POST",
      ).then((result) => {
        if (result.data.id) {
          setIsProductLiked(true);
        }
      });
    }
  };

  const handleAddToCart = (countToUpdate) => {
    if (!isAuth) {
      onModalOpen();
      return;
    }
    if (countToUpdate) {
      cartRefetch(
        "/cart/count",
        {
          body: JSON.stringify({
            count: countToUpdate,
            cardId: cartChangeData?.data?.id || cart[0]?.id || 0,
            productId: id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        },
        "PUT",
      )
        .then((result) => {
          console.log(result.data);
          if (result.data?.count !== count) {
            setCount(result.data.count);
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
    } else {
      cartRefetch(
        `/cart/delete/${cartChangeData?.data?.id || cart[0].id}`,
        null,
        "DELETE",
      )
        .then((result) => {
          if (result.data.id && !count) {
            setCount(0);
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
    if (startToSearch) {
      handleAddToCart(debouncedCount || 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedCount]);

  const handleCountChange = (value) => {
    if (value < 0) {
      return;
    }
    if (value > 50) {
      dispatch(
        showSnackbar({
          snackbarType: "warning",
          snackbarMessage: "Please contact with us for that quantity",
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

  return (
    productData?.data && (
      <>
        <Container maxWidth="lg" className={classes.productContainer}>
          <IconButton
            className={classes.goBackIcon}
            onClick={() => navigate(-1)}
            disableRipple
          >
            <KeyboardBackspaceOutlinedIcon />
            <p className={classes.goBackText}>Back to Shop</p>
          </IconButton>

          <Grid container alignItems="center">
            <Grid
              item
              md={6}
              sm={12}
              padding={10}
              className={classes.productImgContainer}
            >
              <Box component="div">
                <img
                  src={productImg}
                  alt={`${name} product img`}
                  style={{ width: "100%" }}
                />
              </Box>
            </Grid>
            <Grid item md={6} sm={10} padding={5}>
              <Box maxWidth="100%">
                <Box component="div" marginBottom={3}>
                  <Typography component="h4" variant="h5">
                    {name}
                  </Typography>
                </Box>
                <Box component="div" marginBottom={3}>
                  <Typography>
                    <span className={classes["product_current-price"]}>
                      {convertedSymbol}
                      {discountedPrice}
                    </span>
                    {discount ? (
                      <span className={classes["product_old-price"]}>
                        {convertedSymbol}
                        {convertedPrice}
                      </span>
                    ) : null}
                  </Typography>
                </Box>
                <Box marginBottom={6}>
                  <Typography component="p">{description}</Typography>
                </Box>

                <Divider />

                <Box marginTop={3}>
                  <div>
                    {count ? (
                      <div className={cartClasses.cartContainer}>
                        <Button
                          color="info"
                          onClick={() => handleCountChange(count - 1)}
                        >
                          -
                        </Button>
                        <Input
                          state="noFocus"
                          type="number"
                          value={count}
                          onChange={(e) => handleCountChange(+e.target.value)}
                        />
                        <Button
                          color="info"
                          onClick={() => handleCountChange(count + 1)}
                        >
                          +
                        </Button>
                      </div>
                    ) : (
                      <Button
                        style={{ width: "180px" }}
                        color="primary"
                        disableRipple
                        onClick={() => handleCountChange(count + 1)}
                      >
                        Add to cart
                      </Button>
                    )}
                  </div>
                </Box>

                <Box marginTop={3}>
                  <Button color="info" onClick={handleWishlistChange}>
                    {isProductLiked
                      ? "- Remove from wishlist"
                      : "+ Add to wishlist"}
                  </Button>
                </Box>
                <Box sx={{ marginTop: 3 }}>
                  <Typography>
                    <b className={classes.productCategoryText}>Category:</b>
                    <span>{category.name}</span>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <SignInModal open={openModal} closeModal={onModalClose} />
      </>
    )
  );
}

export default Product;
