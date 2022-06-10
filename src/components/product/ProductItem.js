import React from "react";
import { productItemStyles } from "./styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Sale from "./Sale";
import { Link } from "react-router-dom";

const ProductItem = ({ id, title, price, image }) => {
  const classes = productItemStyles();
  return (
    <Card className={classes.productCard}>
      <Link to={`/product/${id}`}>
        <CardMedia component="img" alt={title} height="180" image={image} />
        <CardContent className={classes.CardContent}>
          <Typography gutterBottom className={classes.productName}>
            {title}
          </Typography>
          <Typography className={classes.productPrice}>$ {price}</Typography>
          <Sale number={5} />
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductItem;
