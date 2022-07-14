import { useSelector } from "react-redux";
import {
  Stack,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useNavigate } from "react-router-dom";
import Button from "../button";
import { miniShoppingCartStyles } from "./styles";

function MiniShoppingCart() {
  const classes = miniShoppingCartStyles();
  const user = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  const handleCartPage = () => {
    if (user) {
      navigate("/cart");
    } else if (user === null) {
      navigate("/signin");
    }
  };

  const handleCheckoutPage = () => {
    navigate("/#");
  };

  return (
    <Stack spacing={2} role="presentation" className={classes.cart_stack}>
      <Box component="div" className={classes.cart_gallery}>
        <Box component="div" className={classes.cart_close}>
          <Typography className={classes.cart_text} variant="h6" component="h3">
            Cart
          </Typography>
        </Box>
        <List className={classes.cart_list}>
          <ListItem className={classes.cart_item}>
            <ListItemAvatar className={classes.cart_item_img}>
              <img
                className={classes.cart_product_img}
                src="https://htmldemo.net/lukani/lukani/assets/img/s-product/product.jpg"
                alt=""
              />
            </ListItemAvatar>

            <Box className={classes.cart_info}>
              <Typography
                component="a"
                variant="span"
                href="#"
                className={classes.product_name}
              >
                Primis In Faucibus
              </Typography>

              <Typography
                component="p"
                variant="span"
                className={classes.cart_product_quantity_and_price}
              >
                1 x <b>65$</b>
              </Typography>
            </Box>
            <div className={classes.cart_product_remove}>
              <CloseIcon
                fontSize="extra-small"
                className={classes.clickable_close_icon}
              />
            </div>
          </ListItem>
        </List>
      </Box>
      <Box component="div" className={classes.cart_totals_table}>
        <Box component="div" className={classes.cart_totals_table_subtotal}>
          <Typography component="span" variant="span">
            Sub Total:
          </Typography>
          <Typography component="b" variant="b">
            $130.00
          </Typography>
        </Box>

        <Box component="div" className={classes.cart_totals_table_total}>
          <Typography component="span" variant="span">
            Total:
          </Typography>
          <Typography component="b" variant="b">
            $130.00
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
        <Box component="div" className={classes.cart_cart_pages_checkout}>
          <Button
            variant="contained"
            onClick={handleCheckoutPage}
            color="primary"
            fullWidth
          >
            <ShoppingCartCheckoutIcon
              fontSize="small"
              sx={{ marginRight: 1 }}
            />
            <span>CHECKOUT</span>
          </Button>
        </Box>
      </Box>
    </Stack>
  );
}

export default MiniShoppingCart;
