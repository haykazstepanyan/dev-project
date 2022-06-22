import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Container from "@mui/system/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Pagination from "../components/pagination";
// import { getFakeProductsData } from "../helpers/api.helpers";
// import Layout from "../layout";
import { getProductsDataByPage } from "../helpers/api.helpers";
import Banner from "../components/common/Banner";
import ProductItem from "../components/product";
import ShopPageSidebar from "../components/sidebar/ShopPageSidebar";
import { shopStyles } from "./styles";

function Shop() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState();

  const classes = shopStyles();

  useEffect(() => {
    getProductsDataByPage(page).then((productsData) => {
      console.log(productsData);
      setCount(productsData.length);
      setProducts(productsData.results);
    });
  }, [page]);

  const gotoPage = (_, pageNum) => {
    console.log(page);
    setPage(pageNum);
  };

  return (
    <>
      <Banner name="Shop" />
      <Container maxWidth="lg">
        <Box mt={12.5}>
          <Grid container>
            <Grid item md={3}>
              <ShopPageSidebar />
            </Grid>
            <Grid item md={9}>
              <Grid container className={classes.shopItemContainer}>
                {products &&
                  products.map(({ id, name, price }) => (
                    <Grid
                      item
                      sm={4}
                      key={nanoid()}
                      className={classes.shopItem}
                    >
                      <ProductItem
                        id={id}
                        title={name}
                        // image={images[0]}
                        price={price}
                      />
                    </Grid>
                  ))}
              </Grid>
              <Pagination count={count} onChange={gotoPage} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Shop;
