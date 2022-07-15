import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  // useNavigate
} from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import clsx from "clsx";
import Sale from "./Sale";
import { productItemStyles } from "./styles";
import useLazyFetch from "../../hooks/useLazyFetch";
import Button from "../button/Button";
import { showLoader, hideLoader } from "../../redux/app/appSlice";
import SignInModal from "../modals/SignInModal";
import { currencySymbols } from "../../constants/constants";
import useFetch from "../../hooks/useFetch";

function ProductItem({
  id,
  title,
  description,
  price,
  image,
  discount,
  wishlistId,
  // cartId,
  order,
}) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const role = useSelector((state) => state.auth.role);
  const selectedCurrency = useSelector((state) => state.app.currency);
  const [isProductLiked, setIsProductLiked] = useState(!!wishlistId);
  // const [isProductInCart, setIsProductInCart] = useState(!!cartId);
  const [count, setCount] = useState(1);

  // const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const classes = productItemStyles();
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

  const { data: productData } = useFetch(`/products/getProducts/${id}`);
  const { wishlist, cart } = productData?.data || {};

  useEffect(() => {
    if (productData) {
      setCount(cart?.[0]?.count || 1);
    }
  }, [productData, cart]);

  useEffect(() => {}, [count]);

  const {
    data: wishlistChangeData,
    loading: wishlistChangeLoading,
    lazyRefetch: wishlistRefetch,
  } = useLazyFetch();

  const {
    data: cartChangeData,
    loading: cartChangeLoading,
    // lazyRefetch: cartRefetch,
  } = useLazyFetch();

  useEffect(() => {}, [count]);
  useEffect(() => {
    if (wishlistChangeLoading) {
      dispatch(
        showLoader({
          key: "wishlistChange",
        }),
      );
    } else {
      dispatch(
        hideLoader({
          key: "wishlistChange",
        }),
      );
    }
  }, [dispatch, wishlistChangeLoading]);

  const onModalOpen = () => {
    setOpenModal(true);
  };
  const onModalClose = () => {
    setOpenModal(false);
  };

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

  const handleWishlistChange = () => {
    if (!isAuth) {
      onModalOpen();
      return;
    }
    if (isProductLiked) {
      wishlistRefetch(
        `/wishlist/delete/${wishlistChangeData?.data?.id || wishlist[0]?.id}`,
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

  // const handleAddToCart = () => {
  //   if (!isAuth) {
  //     navigate("/signin");
  //     return;
  //   }
  //   cartRefetch(
  //     "/cart/create",
  //     {
  //       body: JSON.stringify({ productId: id }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     },
  //     "POST",
  //   ).then((result) => {
  //     if (result.data.id) {
  //       setIsProductInCart(true);
  //     }
  //   });
  // };

  // const handleChangeCount = (type) => {
  //   if (type === "dec") {
  //     if (count < 2) {
  //       cartRefetch(
  //         `/cart/delete/${cartChangeData?.data?.id || cartId}`,
  //         null,
  //         "DELETE",
  //       ).then(() => {
  //         setIsProductInCart(false);
  //       });
  //       return;
  //     }
  //     cartRefetch(
  //       `/cart/count/${cartChangeData?.data?.id || cartId}`,
  //       {
  //         body: JSON.stringify({ count: count - 1 }),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       },
  //       "PUT",
  //     ).then((result) => {
  //       if (result.data.id) {
  //         setCount((prev) => prev - 1);
  //       }
  //     });
  //   } else {
  //     cartRefetch(
  //       `/cart/count/${cartChangeData?.data?.id || cartId}`,
  //       {
  //         body: JSON.stringify({ count: count + 1 }),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       },
  //       "PUT",
  //     ).then((result) => {
  //       if (result.data.id) {
  //         setCount((prev) => prev + 1);
  //       }
  //     });
  //   }
  // };
  // const inputOnchange = (value) => {
  //   cartRefetch(
  //     `/cart/count/${cartChangeData?.data?.id || cartId}`,
  //     {
  //       body: JSON.stringify({ count: Math.floor(value) }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     },
  //     "PUT",
  //   ).then((result) => {
  //     if (result.data.id) {
  //       setCount(value);
  //     }
  //   });
  // };
  return (
    <>
      <Card
        className={clsx(classes.product, {
          [classes.multipleProductsCard]: order === "multiple",
          [classes.singleProductCard]: order === "single",
        })}
      >
        <Link to={`/product/${id}`} className={classes.productImgLink}>
          <CardMedia
            component="img"
            alt={title}
            image={image}
            className={classes.productImg}
          />
        </Link>
        <CardContent className={classes.productCardContent}>
          <Typography gutterBottom className={classes.productName}>
            <Link to={`/product/${id}`}>{title}</Link>
          </Typography>
          <Typography gutterBottom className={classes.productDescription}>
            {description}
          </Typography>
          <div className={classes.productPrices}>
            <span className={classes.productDiscountedPrice}>
              {convertedSymbol}
              {discountedPrice}
            </span>
            {discount ? (
              <span className={classes.productRealPrice}>
                {convertedSymbol}
                {convertedPrice}
              </span>
            ) : null}
          </div>
          {order === "single" && (
            <div>
              <Button
                style={{ marginTop: 20, width: "120px" }}
                color="primary"
                // purpose="addToCart"
                disableRipple
              >
                Add to cart
              </Button>
            </div>
          )}
          {discount !== 0 && <Sale discount={discount} />}
          <div
            className={classes.productIcons}
            style={{
              top: order === "single" ? "-15px" : "",
              right: order === "single" ? "10px" : "",
            }}
          >
            {role !== "ADMIN" && role !== "MAIN_ADMIN" && (
              <IconButton onClick={handleWishlistChange}>
                {isProductLiked ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteBorderOutlinedIcon />
                )}
              </IconButton>
            )}
          </div>
        </CardContent>
        {order === "multiple" && (
          <div>
            <Button
              style={{ marginTop: 20, width: "100%" }}
              color="primary"
              // purpose="addToCart"
              disableRipple
            >
              Add to cart
            </Button>
          </div>
        )}
        {/* <span> */}
        {/* <IconButton onClick={handleWishlistChange}>
            {isProductLiked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
          </IconButton> */}
        {/* <div className={classes.cartContainer}>
            {isProductInCart ? (
              // <ShoppingCartIcon />
              <>
                <button
                  className={classes.desBtn}
                  type="button"
                  onClick={() => handleChangeCount("dec")}
                >
                  -
                </button>
                <input
                  className={classes.cartInput}
                  type="text"
                  value={count}
                  onChange={(e) => inputOnchange(e.target.value)}
                />
                <button
                  className={classes.incBtn}
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
        </span> */}
      </Card>
      <SignInModal open={openModal} closeModal={onModalClose} />
    </>
  );
}

ProductItem.defaultProps = {
  discount: 0,
};

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  discount: PropTypes.number,
  // cartId: PropTypes.number,
  wishlistId: PropTypes.number,
  order: PropTypes.string,
};

export default ProductItem;
