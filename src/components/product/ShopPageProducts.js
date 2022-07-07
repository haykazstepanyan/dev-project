import { memo } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import NoData from "../common/NoData";
import Pagination from "../pagination";
import ProductItem from "./ProductItem";
import { shopPageProductsStyles } from "./styles";

function ShopPageProducts({ products, page, goToPage }) {
  const classes = shopPageProductsStyles();

  return (
    <Grid item md={9} sm={12}>
      <Grid container className={classes.shopItemContainer}>
        {products.data.length ? (
          products.data.map(
            ({ id, name, price, productImg, discount, wishlist }) => (
              <Grid item sm={4} xs={12} key={id} className={classes.shopItem}>
                <ProductItem
                  id={id}
                  title={name}
                  image={productImg}
                  price={price}
                  discount={discount}
                  wishlistId={wishlist && wishlist[0]?.id}
                />
              </Grid>
            ),
          )
        ) : (
          <NoData />
        )}
      </Grid>
      {products?.dataCount ? (
        <Pagination
          count={Math.ceil((products?.dataCount || 0) / 9)}
          page={page}
          onChange={goToPage}
        />
      ) : null}
    </Grid>
  );
}

ShopPageProducts.propTypes = {
  products: PropTypes.shape({
    dataCount: PropTypes.number,
    data: PropTypes.arrayOf(
      PropTypes.objectOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
          PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
        ]),
      ),
    ),
  }),
  page: PropTypes.number,
  goToPage: PropTypes.func,
};

export default memo(ShopPageProducts);
