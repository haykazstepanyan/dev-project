import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import shipping1 from "../assets/images/shipping1.webp";
import shipping2 from "../assets/images/shipping2.webp";
import shipping3 from "../assets/images/shipping3.webp";
import banner1 from "../assets/images/banner1.webp";
import banner2 from "../assets/images/banner2.webp";
import ourHistory from "../assets/images/ourHistory.webp";
import signature from "../assets/images/signature.webp";
import { mainStyles } from "./styles";

function Main() {
  const classes = mainStyles();

  return (
    <>
      <Grid item xs={8}>
        FotoSlide
      </Grid>
      <Grid item xs={8} className={classes.shipingArea}>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.colLg4}>
              <div className={classes.singleShipping}>
                <div className={classes.shippingIcone}>
                  <img src={shipping1} alt="" />
                </div>
                <div className={classes.shippingContent}>
                  <h3>Free Delivery</h3>
                  <p>
                    Free shipping around the world for all <br /> orders over
                    $120
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.colLg4}>
              <div className={classes.singleShipping}>
                <div className={classes.shippingIcone}>
                  <img src={shipping2} alt="" />
                </div>
                <div className={classes.shippingContent}>
                  <h3>Safe Payment</h3>
                  <p>
                    With our payment gateway, don’t worry about your information
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.colLg4}>
              <div className={classes.singleShipping}>
                <div className={classes.shippingIcone}>
                  <img src={shipping3} alt="" />
                </div>
                <div className={classes.shippingContent}>
                  <h3>Friendly Services</h3>
                  <p>You have 30-day return guarantee for every single order</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={8}>
        <div className={classes.bannerArea}>
          <div className={classes.container}>
            <div className={classes.row}>
              <div className={classes.colLg6}>
                <figure className={classes.singleBanner}>
                  <div className={classes.bannerThumb}>
                    <Link to="/shop">
                      <img src={banner1} alt="" />
                    </Link>
                    <div className={classes.bannerContent}>
                      <h3>Big Sale Products</h3>
                      <h2>
                        Plants <br /> For Interior
                      </h2>
                      <Link className={classes.bannerContentLink} to="/shop">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </figure>
              </div>
              <div className={classes.colLg6}>
                <figure className={classes.singleBanner}>
                  <div className={classes.bannerThumb}>
                    <Link to="/shop">
                      <img src={banner2} alt="" />
                    </Link>
                    <div className={classes.bannerContent}>
                      <h3>Top Products</h3>
                      <h2>
                        Plants <br /> For Healthy
                      </h2>
                      <Link className={classes.bannerContentLink} to="/shop">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={8} className={classes.welcomeHomeStore}>
        <div className={classes.container}>
          <div className={classes.welcomeHomeContainer}>
            <div className={classes.row}>
              <div className={classes.colLg5}>
                <div className={classes.welcomeHomeThumb}>
                  <img src={ourHistory} alt="" />
                </div>
              </div>
              <div className={classes.colLg7}>
                <div className={classes.welcomHomeContent}>
                  <div className={classes.welcomeHomeHeader}>
                    <h3>Welcome to Home store</h3>
                    <h2>Home History</h2>
                  </div>
                  <div className={classes.welcomeLukaniDesc}>
                    <p>
                      Commodo sociosqu venenatis cras dolor sagittis integer
                      luctus sem primis eget maecenas sedurna malesuada
                      consectetuer.
                    </p>
                    <p>
                      Ornare integer commodo mauris et ligula purus, praesent
                      cubilia laboriosam viverra. Mattis id rhoncus. Integer
                      lacus eu volutpat fusce. Elit etiam phasellus suscipit
                      suscipit dapibus, condimentum tempor quis, turpis luctus
                      dolor sapien vivamus.
                    </p>
                  </div>
                  <div className={classes.welcomeHomeFooter}>
                    <img src={signature} alt="" />
                    <p>
                      <span>john doe</span> – CEO Lukani
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={8} className={classes.newsletterAreaStart}>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.col12}>
              <div className={classes.sectionTitle}>
                <h2>
                  Get <span>20% Off</span> Your Next Order
                </h2>
              </div>
              <div className={classes.newsletterContainer}>
                <div>
                  <form>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter you email"
                      name="EMAIL"
                    />
                    <button type="button">Subscribe</button>
                    <div className={classes.subscribeFormEmailIcon}>
                      <MailOutlineIcon />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
}

export default Main;
