import {
  Stack,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  Button,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { miniShoppingCartStyles } from "./styles";

function MiniShoppingCart({ onClose, open }) {
  const classes = miniShoppingCartStyles();
  const navigate = useNavigate();

  const handleCartPage = () => {
    navigate("/cart");
    onClose();
  };

  const handleCheckoutPage = () => {
    navigate("/#");
    onClose();
  };

  return (
    <Drawer
      transitionDuration={{ enter: 150, exit: 150 }}
      anchor="right"
      open={open}
      onClose={() => {
        onClose();
      }}
    >
      <Stack spacing={2} role="presentation" className={classes.cart_stack}>
        <Box component="div" className={classes.cart_gallery}>
          <Box component="div" className={classes.cart_close}>
            <Typography
              className={classes.cart_text}
              variant="h6"
              component="h3"
            >
              Cart
            </Typography>
            <Box className="mini_cart_close">
              <CloseIcon
                onClick={() => {
                  onClose();
                }}
                className={classes.clickable_close_icon}
              />
            </Box>
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
              color="info"
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
              color="success"
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
    </Drawer>
  );
}

MiniShoppingCart.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MiniShoppingCart;
