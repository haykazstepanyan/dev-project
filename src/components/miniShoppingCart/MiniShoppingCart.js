import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  Stack,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "../button";
import { miniShoppingCartStyles } from "./styles";
import useFetch from "../../hooks/useFetch";
import Loader from "../loader";
import { currencySymbols } from "../../constants/constants";
import { countByCurrencyRate } from "../../helpers/helpers";

function MiniShoppingCart({ toggleDrawer }) {
  const [totalSum, setTotalSum] = useState(0);
  const classes = miniShoppingCartStyles();
  const navigate = useNavigate();
  const selectedCurrency = useSelector((state) => state.app.currency);
  const convertedSymbol = currencySymbols[selectedCurrency];

  const { data: cartData, loading: cartLoading } =
    useFetch("/cart/getCartItems");

  useEffect(() => {
    if (cartData && cartData.data.length) {
      const productsTotalSum = cartData.data
        .reduce(
          (acc, cur) =>
            acc +
            countByCurrencyRate(
              selectedCurrency,
              cur.product.price,
              cur.product.discount,
            ) *
              cur.count,
          0,
        )
        .toFixed(2);
      setTotalSum(productsTotalSum);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartData]);

  const handleCartPage = () => {
    toggleDrawer();
    return navigate("/cart");
  };

  return cartLoading ? (
    <Loader />
  ) : (
    <Stack spacing={2} role="presentation" className={classes.cart_stack}>
      <Box component="div">
        <Box component="div" className={classes.cart_close}>
          <Typography className={classes.cart_text} variant="h6" component="h3">
            Cart
          </Typography>
        </Box>
        <List className={classes.cart_list}>
          {cartData &&
            cartData.data.length &&
            cartData.data.map(({ id, count, product }) => (
              <ListItem className={classes.cart_item} key={id}>
                <ListItemAvatar className={classes.cart_item_img}>
                  <Link to={`/product/${id}`}>
                    <img
                      className={classes.cart_product_img}
                      src={product.productImg}
                      alt={product.id}
                    />
                  </Link>
                </ListItemAvatar>

                <Box className={classes.cart_info}>
                  <Typography
                    component="a"
                    variant="span"
                    href={`/product/${id}`}
                    className={classes.product_name}
                  >
                    {product.name}
                  </Typography>

                  <Typography
                    component="p"
                    variant="span"
                    className={classes.cart_product_quantity_and_price}
                  >
                    {count} x{" "}
                    <b>
                      {convertedSymbol}
                      {countByCurrencyRate(
                        selectedCurrency,
                        product.price,
                        product.discount,
                      )}
                    </b>
                  </Typography>
                </Box>
              </ListItem>
            ))}
        </List>
      </Box>
      <Box component="div" className={classes.cart_totals_table}>
        <Box component="div" className={classes.cart_totals_table_total}>
          <Typography component="span" variant="span">
            Total:
          </Typography>
          <Typography component="b" variant="b">
            {convertedSymbol}
            {totalSum}
          </Typography>
        </Box>
      </Box>
      <Box component="div" className={classes.cart_cart_pages}>
        <Box component="div" className={classes.cart_cart_pages_viewCart}>
          <Button
            variant="contained"
            onClick={handleCartPage}
            color="secondary"
            fullWidth
          >
            <ShoppingCartIcon fontSize="small" sx={{ marginRight: 1 }} />
            <span>VIEW CART</span>
          </Button>
        </Box>
        {/* <Box component="div" className={classes.cart_cart_pages_checkout}>
          <Button
            variant="contained"
            // onClick={handleCheckoutPage}
            color="primary"
            fullWidth
          >
            <ShoppingCartCheckoutIcon
              fontSize="small"
              sx={{ marginRight: 1 }}
            />
            <span>CHECKOUT</span>
          </Button>
        </Box> */}
      </Box>
    </Stack>
  );
}

MiniShoppingCart.propTypes = {
  toggleDrawer: PropTypes.func,
};

export default MiniShoppingCart;
