import React from "react";
import productItemstyles from "./styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ProductItem = ({ title, price, image }) => {
  const classes = productItemstyles();
  return (
    <Card className={classes.productCard}>
      <CardMedia component="img" alt={title} height="180" image={image} />
      <CardContent>
        <Typography gutterBottom className={classes.productName}>
          {title}
        </Typography>
        <Typography className={classes.productPrice}>$ {price}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
