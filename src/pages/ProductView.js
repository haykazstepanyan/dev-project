import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { productViewStyles } from "./styles";
import useFetch from "../hooks/useFetch";

import {
  deleteItemFromWishlist,
  addToWishlist,
} from "../redux/wishlist/actions";
import { setSnackbar } from "../redux/app/appSlice";

function Product() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlistData);
  const { productId } = useParams();
  const [isAdded, setIsAdded] = useState(false);
  const classes = productViewStyles();

  const { data: product, error: productError } = useFetch(
    `/products/getProducts/${productId}`,
  );

  useEffect(() => {
    const productInWishlist = wishlist.find(
      (item) => item.productId === Number(productId),
    );
    setIsAdded(productInWishlist);
  }, [wishlist, productId]);

  useEffect(() => {
    if (productError) {
      dispatch(
        setSnackbar({
          snackbarType: "error",
          snackbarMessage: "Oops! Something went wrong!",
        }),
      );
    }
  }, [productError, dispatch]);

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    if (isAdded) {
      dispatch(deleteItemFromWishlist({ productId }));
    } else {
      dispatch(addToWishlist({ productId }));
    }
    setIsAdded(!isAdded);
  };

  return (
    <Container maxWidth="lg">
      <Grid container alignItems="center">
        <Grid item md={6} sm={12} padding={10}>
          <Box component="div">
            <img
              // src={`${product.productImg}`}
              src="https://images.unsplash.com/photo-1514826786317-59744fe2a548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="some img"
              style={{ width: "100%" }}
            />
          </Box>
        </Grid>
        <Grid item md={6} sm={10} padding={5}>
          <Box maxWidth="100%">
            <Box component="div" marginBottom={3}>
              <Typography component="h4" variant="h5">
                {product.name}
              </Typography>
            </Box>
            <Box component="div" marginBottom={3}>
              <Typography>
                <span className={classes["product_current-price"]}>
                  £{product.price}
                </span>
                {!!product.discount && (
                  <span className={classes["product_old-price"]}>
                    £{product.price + (product.price * product.discount) / 100}
                  </span>
                )}
              </Typography>
            </Box>
            <Box marginBottom={6}>
              <Typography component="p">{product.description}</Typography>
            </Box>

            <Divider />

            <Box marginTop={3}>
              <TextField
                size="small"
                label="Quantity"
                type="number"
                defaultValue={1}
                InputProps={{ inputProps: { min: 1, max: 10 } }}
              />
              <Box sx={{ display: "inline", marginLeft: 3 }}>
                <Button variant="contained">Add To Cart</Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} sm={10} padding={5}>
          <Box maxWidth="100%">
            <Box component="div" marginBottom={3}>
              <Typography component="h4" variant="h5">
                {product.name}
              </Typography>
            </Box>
            <Box component="div" marginBottom={3}>
              <Typography>
                <span className={classes["product_current-price"]}>
                  £{product.price}
                </span>
                {!!product.discount && (
                  <span className={classes["product_old-price"]}>
                    £{product.price + (product.price * product.discount) / 100}
                  </span>
                )}
              </Typography>
            </Box>
            <Box marginBottom={6}>
              <Typography component="p">{product.description}</Typography>
            </Box>

            <Box marginTop={3}>
              <Button
                sx={{ fontSize: 12, cursor: "pointer" }}
                onClick={handleAddToWishlist}
              >
                {isAdded ? "-Remove from wishlist" : "+Add to wishlist"}
              </Button>
            </Box>
            <Box sx={{ marginTop: 3 }}>
              <Typography>
                <b className={classes.product_category_text}>Category:</b>
                <span>{product.category.name}</span>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: 100,
                marginTop: 3,
              }}
            >
              <FacebookIcon className={classes.fb_icon} />
              <PinterestIcon className={classes.pinterest_icon} />
              <LinkedInIcon className={classes.linkedIn_icon} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Product;
