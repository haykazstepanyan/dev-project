import React, { useEffect, useState } from "react";
import Pagination from "../components/pagination";
import Grid from "@mui/material/Grid";
import { getFakeProductsData } from "../helpers/api.helpers";
import Layout from "../layout";
import Banner from "../components/common/Banner";
import Container from "@mui/system/Container";
import ProductItem from "../components/product";
import ShopPageSidebar from "../components/sidebar/ShopPageSidebar";
import Box from "@mui/material/Box";
import { shopStyles } from "./styles";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [productsByPages, setProductsByPages] = useState([]);
  const [start, setStart] = useState(0);
  const classes = shopStyles();

  useEffect(() => {
    getFakeProductsData().then((productsData) =>
      setProducts((prev) => [...prev, ...productsData])
    );
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setProductsByPages([...products].slice(start, start + 9));
    }
  }, [products, start]);

  const gotoPage = (_, page) => {
    setStart(page * 9 - 9);
  };

  return (
    <>
      <Layout />
      <Banner name="Shop" />
      <Container maxWidth="lg">
        <Box mt={12.5}>
          <Grid container>
            <Grid item md={3}>
              <ShopPageSidebar />
            </Grid>
            <Grid item md={9}>
              <Grid container className={classes.shopItemContainer}>
                {productsByPages &&
                  productsByPages.map(({ id, title, images, price }) => (
                    <Grid item sm={4} key={id} className={classes.shopItem}>
                      <ProductItem
                        id={id}
                        title={title}
                        image={images[0]}
                        price={price}
                      />
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Pagination count={Math.ceil(products.length / 9)} onChange={gotoPage} />
    </>
  );
};
export default Shop;
