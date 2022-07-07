import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Sale from "./Sale";
import { productItemStyles } from "./styles";
import useLazyFetch from "../../hooks/useLazyFetch";
import { showLoader, hideLoader } from "../../redux/app/appSlice";
import SignInModal from "../modals/SignInModal";

function ProductItem({ id, title, price, image, discount, wishlistId }) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const role = useSelector((state) => state.auth.role);
  const [isProductLiked, setIsProductLiked] = useState(!!wishlistId);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const classes = productItemStyles();

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
      <Card className={classes.productCard}>
        <Link to={`/product/${id}`}>
          <CardMedia component="img" alt={title} height="180" image={image} />
          <CardContent>
            <Typography gutterBottom className={classes.productName}>
              {title}
            </Typography>
            <div>
              <span className={classes.productDiscountedPrice}>
                ${parseFloat((price - (price * discount) / 100).toFixed(2))}
              </span>
              {discount ? (
                <span className={classes.productRealPrice}>${price}</span>
              ) : null}
            </div>
            <Sale discount={5} />
          </CardContent>
        </Link>
        <span>
          {role !== "ADMIN" && role !== "MAIN_ADMIN" && (
            <IconButton onClick={handleWishlistChange}>
              {isProductLiked ? (
                <FavoriteIcon />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
            </IconButton>
          )}
        </span>
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
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  discount: PropTypes.number,
  wishlistId: PropTypes.number,
};

export default ProductItem;
