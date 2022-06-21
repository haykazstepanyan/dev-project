import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Sale from "./Sale";
import { productItemStyles } from "./styles";

function ProductItem({ id, title, price, image, discount }) {
  const classes = productItemStyles();
  return (
    <Card className={classes.productCard}>
      <Link to={`/product/${id}`}>
        <CardMedia component="img" alt={title} height="180" image={image} />
        <CardContent className={classes.CardContent}>
          <Typography gutterBottom className={classes.productName}>
            {title}
          </Typography>
          <div>
            <span className={classes.productDiscountedPrice}>
              ${price - (price * discount) / 100}
            </span>
            <span className={classes.productRealPrice}>${price}</span>
          </div>
          <Sale discount={5} />
        </CardContent>
      </Link>
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
};

export default ProductItem;
