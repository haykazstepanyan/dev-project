import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  Typography,
  Divider,
  TextField,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Button from "../components/button";
import { productViewStyles } from "./styles";
import useFetch from "../hooks/useFetch";
import { showLoader, hideLoader, showSnackbar } from "../redux/app/appSlice";
import useLazyFetch from "../hooks/useLazyFetch";
import SignInModal from "../components/modals/SignInModal";
import { currencySymbols } from "../constants/constants";

function Product() {
  const [isProductLiked, setIsProductLiked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const selectedCurrency = useSelector((state) => state.app.currency);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const navigate = useNavigate();
  const classes = productViewStyles();

  const { data: productData, error: productError } = useFetch(
    `/products/getProducts/${productId}`,
  );

  const {
    data: wishlistChangeData,
    loading: wishlistChangeLoading,
    lazyRefetch: wishlistRefetch,
  } = useLazyFetch();

  const {
    id,
    name,
    price,
    discount,
    description,
    category,
    productImg,
    wishlist,
  } = productData?.data || {};

  const ratesData = JSON.parse(localStorage.getItem("rates"));
  const rates = ratesData.currencyRates;
  let convertedPrice = price * rates[selectedCurrency];
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
    if (wishlistChangeLoading) {
      dispatch(
        showLoader({
          key: "wishlist/change",
        }),
      );
    }
  }, [dispatch, wishlistChangeLoading]);

  useEffect(() => {
    if (wishlistChangeData) {
      dispatch(
        hideLoader({
          key: "wishlist/change",
        }),
      );
    }
  }, [dispatch, wishlistChangeData]);

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
      setIsProductLiked(
        productData.data.wishlist && productData.data.wishlist.length,
      );
    }
  }, [productData]);

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

  const handleAddToCart = () => {
    if (!isAuth) {
      onModalOpen();
      // return;
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
                  <TextField
                    size="small"
                    label="Quantity"
                    type="number"
                    defaultValue={1}
                    InputProps={{ inputProps: { min: 1, max: 10 } }}
                  />
                  <Box sx={{ display: "inline", marginLeft: 3 }}>
                    <Button color="secondary" onClick={handleAddToCart}>
                      Add To Cart
                    </Button>
                  </Box>
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
                    <b className={classes.product_category_text}>Category:</b>
                    <span>{category.name}</span>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: 100,
                    marginTop: 3,
                  }}
                >
                  <FacebookIcon className={classes.fb_icon} />
                  <PinterestIcon className={classes.pinterest_icon} />
                  <LinkedInIcon className={classes.linkedIn_icon} />
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
