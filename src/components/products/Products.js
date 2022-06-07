import Container from "@mui/system/Container";
import { productsData } from "./fakeData";
import ProductItem from "./ProductItem";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Container maxWidth="lg">
      <div style={{ display: "flex" }}>
        {/* <Grid item sm={3}></Grid> */}
        <div style={{ flexGrow: "1" }}></div>
        <div style={{ flexGrow: "3" }}>
          <Grid container spacing={2}>
            {productsData.map((product, i) => (
              <>
                <Grid item md={3} sm={4} key={product.id}>
                  <Link
                    to={`/product/${product.id}`}
                    style={{ margin: "15px" }}
                  >
                    <ProductItem data={product} />
                  </Link>
                </Grid>
              </>
            ))}
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default Products;
