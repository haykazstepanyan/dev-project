import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCardIcon from "@mui/icons-material/AddCard";
import Sale from "./Sale";
import { productItemStyles } from "./styles";
import {
  deleteItemFromWishlist,
  addToWishlist,
} from "../../redux/wishlist/actions";

function ProductItem({ id, title, price, image, discount, isFilled }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const [filled, setFilled] = useState(isFilled);
  const classes = productItemStyles();

  const handleAddToWishList = (event, productId) => {
    event.preventDefault();

    if (!isAuth) {
      navigate("../signIn", { replace: true });
      return;
    }
    if (filled) {
      dispatch(deleteItemFromWishlist({ productId }));
    } else {
      dispatch(addToWishlist({ productId }));
    }
    setFilled(!filled);
  };

  return (
    <Card className={classes.productCard}>
      <Link to={`/product/${id}`}>
        <CardMedia
          className={classes.productImg}
          component="img"
          alt={title}
          height="280"
          image={image}
        />
        <CardContent className={classes.cardContent}>
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
            <Sale discount={5} />
          </div>
        </CardContent>
      </Link>
      <div className={classes.productImgContainer}>
        <div className={classes.productIcons}>
          <IconButton
            className={classes.productIconButton}
            onClick={(event) => handleAddToWishList(event, id)}
          >
            {filled ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
          </IconButton>
          <IconButton className={classes.productIconButton}>
            <AddCardIcon />
          </IconButton>
        </div>
      </div>
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
  isFilled: PropTypes.bool,
};

export default ProductItem;
