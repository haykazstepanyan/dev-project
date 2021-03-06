import { memo, useState } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import NoData from "../common/NoData";
import Pagination from "../pagination";
import ProductItem from "./ProductItem";
import { shopPageProductsStyles } from "./styles";
import Toolbar from "./Toolbar";

function ShopPageProducts({
  products,
  page,
  goToPage,
  orderProductsBy,
  changeOrdering,
  sortProductsBy,
  changeSorting,
  pageNumber,
}) {
  const [productsOrder, setProductsOrder] = useState(
    localStorage.getItem("view") || "multiple",
  );
  const classes = shopPageProductsStyles({ productsOrder });

  const changeProductsOrder = (order) => {
    if (order === productsOrder) return;
    setProductsOrder(order);
    localStorage.setItem("view", order);
  };

  let gridData;
  if (productsOrder === "multiple") {
    gridData = { sm: 4, xs: 12 };
  } else {
    gridData = { xs: 12 };
  }
  return (
    <Grid item md={9} sm={12}>
      <Toolbar
        order={productsOrder}
        changeOrder={changeProductsOrder}
        productsLength={products?.dataCount}
        orderProductsBy={orderProductsBy}
        changeOrdering={changeOrdering}
        sortProductsBy={sortProductsBy}
        changeSorting={changeSorting}
        pageNumber={pageNumber}
      />
      <Grid
        container
        className={classes.shopItemContainer}
        style={{ paddingRight: 10, paddingLeft: 10 }}
      >
        {products.data.length ? (
          products.data.map(
            ({
              id,
              name,
              description,
              price,
              productImg,
              discount,
              wishlist,
              cart,
            }) => (
              <Grid item {...gridData} key={id} className={classes.shopItem}>
                <ProductItem
                  id={id}
                  title={name}
                  description={description}
                  image={productImg}
                  price={price}
                  discount={discount}
                  wishlist={wishlist}
                  cart={cart}
                  order={productsOrder}
                />
              </Grid>
            ),
          )
        ) : (
          <NoData />
        )}
      </Grid>
      {products?.dataCount && products?.dataCount > 9 ? (
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
  orderProductsBy: PropTypes.string.isRequired,
  changeOrdering: PropTypes.func.isRequired,
  sortProductsBy: PropTypes.string.isRequired,
  changeSorting: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
};

export default memo(ShopPageProducts);
