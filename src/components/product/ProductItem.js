import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Sale from "./Sale";
import { productItemStyles } from "./styles";
import useLazyFetch from "../../hooks/useLazyFetch";
import useFetch from "../../hooks/useFetch";
import { showLoader, hideLoader } from "../../redux/app/appSlice";

function ProductItem({
  id,
  title,
  price,
  image,
  discount,
  wishlistId,
  cartId,
}) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const [isProductLiked, setIsProductLiked] = useState(!!wishlistId);
  const [isProductInCart, setIsProductInCart] = useState(!!cartId);
  const [count, setCount] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = productItemStyles();

  const { data: productData } = useFetch(`/products/getProducts/${id}`);
  const { wishlist, cart } = productData?.data || {};

  useEffect(() => {
    if (productData) {
      setCount(cart[0]?.count || 1);
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
    lazyRefetch: cartRefetch,
  } = useLazyFetch();

  useEffect(() => {}, [count]);
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

  const handleWishlistChange = () => {
    if (!isAuth) {
      navigate("/signin");
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

  const handleAddToCart = () => {
    if (!isAuth) {
      navigate("/signin");
      return;
    }
    cartRefetch(
      "/cart/create",
      {
        body: JSON.stringify({ productId: id }),
        headers: {
          "Content-Type": "application/json",
        },
      },
      "POST",
    ).then((result) => {
      if (result.data.id) {
        setIsProductInCart(true);
      }
    });
  };

  const handleChangeCount = (type) => {
    if (type === "dec") {
      if (count < 2) {
        cartRefetch(
          `/cart/delete/${cartChangeData?.data?.id || cartId}`,
          null,
          "DELETE",
        ).then(() => {
          setIsProductInCart(false);
        });
        return;
      }
      cartRefetch(
        `/cart/count/${cartChangeData?.data?.id || cartId}`,
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
        `/cart/count/${cartChangeData?.data?.id || cartId}`,
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
      `/cart/count/${cartChangeData?.data?.id || cartId}`,
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
    <Card className={classes.productCard}>
      <Link to={`/product/${id}`}>
        <CardMedia component="img" alt={title} height="180" image={image} />
        <CardContent>
          <Typography gutterBottom className={classes.productName}>
            {title}
          </Typography>
          <div>
            <span className={classes.productDiscountedPrice}>
              ${price - (price * discount) / 100}
            </span>
            {discount ? (
              <span className={classes.productRealPrice}>${price}</span>
            ) : null}
          </div>
          <Sale discount={5} />
        </CardContent>
      </Link>
      <span>
        <IconButton onClick={handleWishlistChange}>
          {isProductLiked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
        </IconButton>
        <div className={classes.cartContainer}>
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
      </span>
    </Card>
  );
}

ProductItem.defaultProps = {
  discount: 0,
};

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  discount: PropTypes.number,
  wishlistId: PropTypes.oneOfType(PropTypes.number, undefined),
  cartId: PropTypes.oneOfType(PropTypes.number, undefined),
};

export default ProductItem;
