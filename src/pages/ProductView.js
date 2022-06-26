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

function Product() {
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
      <Grid container alignItems="center">
        <Grid item md={6} sm={12} padding={10}>
          <Box component="div">
            <img
              src={`${product.productImg}`}
              alt="some img"
              style={{ maxWidth: "100%" }}
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
                <span
                  className="current-price"
                  style={{ fontWeight: 500, fontSize: 23, color: "#79a206" }}
                >
                  £{product.price}
                </span>
                {!!product.discount && (
                  <span
                    className="old-price"
                    style={{
                      textDecoration: "line-through",
                      fontWeight: 400,
                      fontSize: 20,
                      marginLeft: 10,
                    }}
                  >
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
                {/* Redux CART state needed and DB table CART needed!!! */}
                <Button variant="contained">Add To Cart</Button>
              </Box>
            </Box>
            <Box marginTop={3}>
              {/* Redux WISHLIST state needed and DB table WISHLIST needed!!! */}
              <Link
                href="/"
                sx={{ fontSize: 12 }}
                onClick={handleAddToWishlist}
              >
                +Add to wishlist
              </Link>
            </Box>
            <Box marginTop={3}>
              <Typography>
                <b style={{ marginRight: 4 }}>Category: </b>
                <span>{product.category.name}</span>
              </Typography>
            </Box>
            <Box
              marginTop={3}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: 100,
              }}
            >
              <FacebookIcon sx={{ cursor: "pointer", color: "#4267B2" }} />
              <PinterestIcon sx={{ cursor: "pointer", color: "#E60023" }} />
              <LinkedInIcon sx={{ cursor: "pointer", color: "#0072b1" }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Product;
