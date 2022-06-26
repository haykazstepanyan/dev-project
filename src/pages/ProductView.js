import { useEffect, useState } from "react";
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
import { getProductById } from "../helpers/helpers";
import { productViewStyles } from "./styles";

/*
  product_add-to-wishlist_container: { 
    marginTop: 3,
  },
  
  product_add-to-wishlist_text: {
    fontSize: 12,
  },
  
  product_category_container: {
    marginTop: 3,
  },

  product_category_text: {
    marginRight: 4,
  },

  social-network-icons_container: {
    display: "flex",
    justifyContent: "space-between",
    width: 100,
  },

  fb_icon: {
    cursor: "pointer", 
    color: "#4267B2",
  },

  pinterest_icon: { 
    cursor: "pointer", 
    color: "#E60023",
  },

  linkedIn_icon: { 
    cursor: "pointer", 
    color: "#0072b1",
  },

 }


*/
function Product() {
  const classes = productViewStyles();
  const [product, setProduct] = useState({ category: {} });
  const { productId } = useParams();
  useEffect(() => {
    async function getProduct() {
      const { data: productData } = await getProductById(productId);
      setProduct(productData);
    }
    getProduct();
  }, [productId]);

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <Container maxWidth="lg">
      <Grid
        container
        // className={classes["container_grid-container"]}
        alignItems="center"
      >
        <Grid
          item
          md={6}
          sm={12}
          // className={classes["grid-item_img_container"]}
          padding={10}
        >
          <Box component="div">
            <img src={`${product.productImg}`} alt="some img" maxWidth="100%" />
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          sm={10}
          // className={classes["grid-item_content"]}
          padding={5}
        >
          <Box
            //  className={classes["grid-item_content_container"]}
            maxWidth="100%"
          >
            <Box
              component="div"
              // className={classes["product-name-price_container"]}
              marginBottom={3}
            >
              <Typography component="h4" variant="h5">
                {product.name}
              </Typography>
            </Box>
            <Box
              component="div"
              // className={classes["product-name-price_container"]}
              marginBottom={3}
            >
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
            <Box
              // className={classes.product_description_container}
              marginBottom={6}
            >
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
              <Box
                // className={classes["product_form-button"]}
                sx={{ display: "inline", marginLeft: 3 }}
              >
                {/* Redux CART state needed and DB table CART needed!!! */}
                <Button variant="contained">Add To Cart</Button>
              </Box>
            </Box>

            <Box
              // className={classes["product_add-to-wishlist_container"]}
              marginTop={3}
            >
              {/* Redux WISHLIST state needed and DB table WISHLIST needed!!! */}
              <Link
                href="/"
                // className={classes["product_add-to-wishlist_text"]}
                fontSize={12}
                onClick={handleAddToWishlist}
              >
                +Add to wishlist
              </Link>
            </Box>
            <Box
              // className={classes.product_category_container}
              sx={{ marginTop: 3 }}
            >
              <Typography>
                <b className={classes.product_category_text}>Category:</b>
                <span>{product.category.name}</span>
              </Typography>
            </Box>
            <Box
              //  className={classes["social-network-icons_container"]}
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
