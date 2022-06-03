import Container from "@mui/system/Container";
import { productsData } from "./fakeData";
import Product from "../product";
import Grid from "@mui/material/Grid";
import { createUseStyles } from "react-jss";

const styles = {
  productContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
};

const useStyles = createUseStyles(styles);

const Products = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container className={classes.productContainer}>
        {productsData.map(product => (
          <Product key={product.id} data={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
