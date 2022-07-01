import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  Typography,
  Divider,
  TextField,
  Button,
  Link,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useDispatch } from "react-redux";
import { productViewStyles } from "./styles";
import useFetch from "../hooks/useFetch";
import { showNotification } from "../redux/app/appSlice";

function Product() {
  const classes = productViewStyles();

  const dispatch = useDispatch();

  const { productId } = useParams();
  const { data: product, error: productError } = useFetch(
    `/products/getProducts/${productId}`,
  );

  useEffect(() => {
    if (productError) {
      dispatch(
        showNotification({
          notificationType: "error",
          notificationMessage: "Oops! Something went wrong!",
        }),
      );
    }
  }, [dispatch, productError]);

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    // console.log(product);
  };

  return (
    <Container maxWidth="lg">
      <Grid container alignItems="center">
        {product && (
          <>
            <Grid item md={6} sm={12} padding={10}>
              <Box component="div">
                <img
                  src={`${product.productImg}`}
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
                        £
                        {product.price +
                          (product.price * product.discount) / 100}
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
                    {/* Redux CART state needed and DB table CART needed!!! */}
                    <Button variant="contained">Add To Cart</Button>
                  </Box>
                </Box>

                <Box
                  // className={classes["product_add-to-wishlist_container"]}
                  marginTop={3}
                >
                  {/* Redux WISHLIST state needed and DB table WISHLIST needed!!! */}
                  <Link href="/" fontSize={12} onClick={handleAddToWishlist}>
                    +Add to wishlist
                  </Link>
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
          </>
        )}
      </Grid>
    </Container>
  );
}

export default Product;
