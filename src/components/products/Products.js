import Container from "@mui/system/Container";
import { productsData } from "./fakeData";
import ProductItem from "./ProductItem";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        {productsData.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            style={{ margin: "15px" }}
          >
            <ProductItem data={product} />
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
