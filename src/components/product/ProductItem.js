import React from "react";
import { productItemStyles } from "./styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Sale from "./Sale";
import { Link } from "react-router-dom";

const ProductItem = ({ id, title, price, image, discount = 5 }) => {
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
          <Sale discount={discount} />
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductItem;
