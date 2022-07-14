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
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Button from "../components/button";
import { productViewStyles } from "./styles";
import { productItemStyles } from "../components/product/styles";
import useFetch from "../hooks/useFetch";
import { showLoader, hideLoader, showSnackbar } from "../redux/app/appSlice";
import useLazyFetch from "../hooks/useLazyFetch";

function Product() {
  const [isProductLiked, setIsProductLiked] = useState(false);
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const classes = productViewStyles();
  const cartClasses = productItemStyles();

  const { data: productData, error: productError } = useFetch(
    `/products/getProducts/${productId}`,
  );

  const {
    data: wishlistChangeData,
    loading: wishlistChangeLoading,
    lazyRefetch: wishlistRefetch,
  } = useLazyFetch();

  const {
    data: cartChangeData,
    loading: cartChangeLoading,
    lazyRefetch: cartRefetch,
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
    cart,
  } = productData?.data || {};

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
    if (cartChangeLoading) {
      dispatch(
        showLoader({
          key: "cart/change",
        }),
      );
    }
  }, [dispatch, cartChangeLoading]);

  useEffect(() => {
    if (cartChangeData) {
      dispatch(
        hideLoader({
          key: "cart/change",
        }),
      );
    }
  }, [dispatch, cartChangeData]);

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
      console.log(productData);
      setIsProductLiked(
        productData.data.wishlist && productData.data.wishlist.length,
      );
      setIsProductInCart(productData.data.cart && productData.data.cart.length);
      setCount(cart[0]?.count || 1);
    }
  }, [productData, cart]);
  useEffect(() => {}, [count]);

  const handleWishlistChange = () => {
    if (!isAuth) {
      navigate("../signIn", { replace: true });
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
  // const handleChangeCount = (event) => {
  //   setCount(event.target.value);
  // };
  const handleAddToCart = () => {
    if (!isAuth) {
      navigate("/signin");
      return;
    }

    if (isProductInCart) {
      cartRefetch(
        `/cart/count/${cartChangeData?.data?.id || cart[0].id}`,
        {
          body: JSON.stringify({ count }),
          headers: {
            "Content-Type": "application/json",
          },
        },
        "PUT",
      );
    } else {
      cartRefetch(
        "/cart/create",
        {
          body: JSON.stringify({ productId: id, count }),
          headers: {
            "Content-Type": "application/json",
          },
        },
        "POST",
      ).then((result) => {
        if (result?.data?.id) {
          setIsProductInCart(true);
        }
      });
    }
  };
  const handleDeleteFromCart = () => {
    if (!isAuth) {
      navigate("/signin");
      return;
    }
    cartRefetch(
      `/cart/delete/${cartChangeData?.data?.id || cart[0].id}`,
      null,
      "DELETE",
    ).then((result) => {
      if (result.data.id) {
        setIsProductInCart(false);
      }
    });
    setCount(1);
  };

  const handleChangeCount = (type) => {
    if (type === "dec") {
      if (count < 2) {
        cartRefetch(
          `/cart/delete/${cartChangeData?.data?.id || cart[0]?.id}`,
          null,
          "DELETE",
        ).then(() => {
          setIsProductInCart(false);
        });
        return;
      }
      cartRefetch(
        `/cart/count/${cartChangeData?.data?.id || cart[0]?.id}`,
        {
          body: JSON.stringify({ count: count - 1 }),
          headers: {
            "Content-Type": "application/json",
          },
        },
        "PUT",
      ).then((result) => {
        if (result.data.id) {
          setCount((prev) => prev - 1);
        }
      });
    } else {
      cartRefetch(
        `/cart/count/${cartChangeData?.data?.id || cart[0]?.id}`,
        {
          body: JSON.stringify({ count: count + 1 }),
          headers: {
            "Content-Type": "application/json",
          },
        },
        "PUT",
      ).then((result) => {
        if (result.data.id) {
          setCount((prev) => prev + 1);
        }
      });
    }
  };
  const inputOnchange = (value) => {
    cartRefetch(
      `/cart/count/${cartChangeData?.data?.id || cart[0]?.id}`,
      {
        body: JSON.stringify({ count: Math.floor(value) }),
        headers: {
          "Content-Type": "application/json",
        },
      },
      "PUT",
    ).then((result) => {
      if (result.data.id) {
        setCount(value);
      }
    });
  };

  return (
    productData?.data && (
      <Container maxWidth="lg" className={classes.productContainer}>
        <IconButton
          className={classes.goBackIcon}
          onClick={() => navigate(-1)}
          disableRipple
        >
          <KeyboardBackspaceOutlinedIcon />
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
              <img src={productImg} alt="some img" style={{ width: "100%" }} />
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
                    ${price - (price * discount) / 100}
                  </span>
                  {discount ? (
                    <span className={classes["product_old-price"]}>
                      ${price}
                    </span>
                  ) : null}
                </Typography>
              </Box>
              <Box marginBottom={6}>
                <Typography component="p">{description}</Typography>
              </Box>

              <Divider />

              <Box marginTop={3}>
                {/* <TextField
                  value={count}
                  size="small"
                  type="number"
                  InputProps={{ inputProps: { min: 1, max: 10 } }}
                  onChange={handleChangeCount}
                /> */}
                <Box sx={{ display: "inline", marginLeft: 3 }}>
                  <div className={cartClasses.cartContainer}>
                    {isProductInCart ? (
                      // <ShoppingCartIcon />
                      <>
                        <button
                          className={cartClasses.desBtn}
                          type="button"
                          onClick={() => handleChangeCount("dec")}
                        >
                          -
                        </button>
                        <input
                          className={cartClasses.cartInput}
                          type="text"
                          value={count}
                          onChange={(e) => inputOnchange(e.target.value)}
                        />
                        <button
                          className={cartClasses.incBtn}
                          type="button"
                          onClick={() => handleChangeCount("inc")}
                        >
                          +
                        </button>
                      </>
                    ) : (
                      <ShoppingCartOutlinedIcon onClick={handleAddToCart} />
                    )}
                  </div>

                  {/* <Button color="secondary" onClick={handleAddToCart}>
                    {isProductInCart ? "Change Count" : "Add To Cart"}
                  </Button>
                  {isProductInCart ? (
                    <Button color="info" onClick={handleDeleteFromCart}>
                      -Remove from cart
                    </Button>
                  ) : (
                    ""
                  )} */}
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
                  <span>{category?.name}</span>
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
    )
  );
}

export default Product;
