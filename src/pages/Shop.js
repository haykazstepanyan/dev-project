import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
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
import { getWishlistData } from "../redux/wishlist/actions";
import {
  getProductsPagination,
  getProductsCount,
} from "../redux/product/actions";

function Shop() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlistData);
  const products = useSelector((state) => state.products.paginationProducts);
  const productsLength = useSelector((state) => state.products.productsLength);
  const loading = useSelector((state) => state.products.loading);
  const [page, setPage] = useState(1);
  const classes = shopStyles();


  useEffect(() => {
    dispatch(getWishlistData());
  }, []);
  
  useEffect(() => {
    dispatch(getProductsCount());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductsPagination({ page }));
  }, [page]);

  const gotoPage = (_, pageNum) => {
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
                  wishlist &&
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
                        image="https://images.unsplash.com/photo-1514826786317-59744fe2a548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80"
                        price={price}
                        isFilled={wishlist.some(
                          (item) => item.productId === id,
                        )}
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
