import { Container, Grid } from "@mui/material";
import Table from "../components/table/Table";
import Button from "../components/button";
import Banner from "../components/common/Banner";
import product1 from "../assets/images/product.webp";
import product2 from "../assets/images/product2.webp";
import product3 from "../assets/images/product3.webp";
import { globalStyles } from "../components/styles/styles";
import { cartStyles } from "./styles";

function createData(image, name, price, stockStatus, total) {
  return {
    image,
    name,
    price,
    stockStatus,
    // productId,
    total,
  };
}

const rows = [
  createData(product1, "Handbag Fringilla", 65.0, "In Stock", 1, 65.0),
  createData(product2, "Handbags Justo", 90.0, "In Stock", 2, 90.0),
  createData(product3, "Handbag Elit", 80.0, "In Stock", 3, 80.0),
];

function deleteProduct() {
  // console.log(productId);
}

function Cart() {
  const globalClasses = globalStyles();
  const classes = cartStyles();

  return (
    <>
      <Banner name="Cart" />
      <Container maxWidth="lg" className={globalClasses.featuresSectionStyle}>
        <Table tableData={rows} type="cart" deleteProduct={deleteProduct} />
        <Grid container spacing={2} style={{ marginTop: "20px" }}>
          <Grid item xs={12} lg={6}>
            <div>
              <div className={classes.couponBlock}>
                <h3>Coupon</h3>
              </div>
              <div className={classes.couponBottomBlock}>
                <p>Enter your coupon code if you have one.</p>
                <div>
                  <input type="text" placeholder="Coupon code" />
                  <Button color="secondary" disableRipple>
                    Apply coupon
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div>
              <div className={classes.couponBlock}>
                <h3>Cart Totals</h3>
              </div>
              <div className={classes.cartTotalsBottom}>
                <div>
                  <div>
                    <p>Subtotal</p>
                    <p>£215.00</p>
                  </div>
                  <div>
                    <p>Shipping</p>
                    <p>
                      <span>Flat Rate:</span> £255.00
                    </p>
                  </div>
                  <div
                    style={{
                      paddingTop: "20px",
                      borderTop: "1px solid #e1e1e1",
                    }}
                  >
                    <p>Total</p>
                    <p>£215.00</p>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <Button color="primary" disableRipple>
                    proceed to checkout
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Cart;
