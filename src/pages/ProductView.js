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
import useFetch from "../hooks/useFetch";
import { showLoader, hideLoader, showSnackbar } from "../redux/app/appSlice";
import useLazyFetch from "../hooks/useLazyFetch";
import SignInModal from "../components/modals/SignInModal";
import { currencySymbols } from "../constants/constants";
import AddToCart from "../components/addToCart";

function Product() {
  const [isProductLiked, setIsProductLiked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const selectedCurrency = useSelector((state) => state.app.currency);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const navigate = useNavigate();
  const classes = productViewStyles();

  const {
    data: productData,
    loading: prodcutLoading,
    error: productError,
  } = useFetch(`/products/getProducts/${productId}`);

  const { data: wishlistChangeData, lazyRefetch: wishlistRefetch } =
    useLazyFetch();

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
              padding={5}
              className={classes.productImgContainer}
            >
              <Box component="div">
                <img
                  className={classes.productImg}
                  src={productImg}
                  alt={`${name} product img`}
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
                  <AddToCart
                    cart={cart}
                    isAuth={isAuth}
                    productId={id}
                    btnWidth="180px"
                  />
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
