import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import clsx from "clsx";
import Sale from "./Sale";
import { productItemStyles } from "./styles";
import useLazyFetch from "../../hooks/useLazyFetch";
import Button from "../button/Button";
import { showLoader, hideLoader } from "../../redux/app/appSlice";
import SignInModal from "../modals/SignInModal";
import { currencySymbols } from "../../constants/constants";

function ProductItem({
  id,
  title,
  description,
  price,
  image,
  discount,
  wishlistId,
  order,
}) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const role = useSelector((state) => state.auth.role);
  const selectedCurrency = useSelector((state) => state.app.currency);
  const [isProductLiked, setIsProductLiked] = useState(!!wishlistId);
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

  const {
    data: wishlistChangeData,
    loading: wishlistChangeLoading,
    lazyRefetch: wishlistRefetch,
  } = useLazyFetch();

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
        `/wishlist/delete/${wishlistChangeData?.data?.id || wishlistId}`,
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
                purpose="addToCart"
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
              purpose="addToCart"
              disableRipple
            >
              Add to cart
            </Button>
          </div>
        )}
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
  wishlistId: PropTypes.number,
  order: PropTypes.string,
};

export default ProductItem;
