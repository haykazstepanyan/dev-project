import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/system/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Pagination from "../components/pagination";
import Banner from "../components/common/Banner";
import ProductItem from "../components/product";
import ShopPageSidebar from "../components/sidebar/ShopPageSidebar";
import Loader from "../components/loader";
import { shopStyles } from "./styles";
import {
  getProductsPagination,
  getProductsCount,
} from "../redux/product/actions";

function Shop() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const classes = shopStyles();
  const products = useSelector((state) => state.products.paginationProducts);
  const productsLength = useSelector((state) => state.products.productsLength);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(getProductsCount());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductsPagination({ page }));
  }, [dispatch, page]);

  const gotoPage = (_, pageNum) => {
    console.log("pageNum - ", pageNum);
    setPage(pageNum);
  };

  if (loading) {
    return <Loader />;
  }

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
                  products.map(({ id, name, price, productImg }) => (
                    <Grid item sm={4} key={id} className={classes.shopItem}>
                      <ProductItem
                        id={id}
                        title={name}
                        image={productImg}
                        price={price}
                      />
                    </Grid>
                  ))}
              </Grid>
              <Pagination
                count={Math.ceil(productsLength / 9)}
                page={page}
                onChange={gotoPage}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Shop;
