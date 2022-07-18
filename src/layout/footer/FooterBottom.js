import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { Container, Grid } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./styles";

const useStyles = createUseStyles(styles);

function FooterBottom() {
  const classes = useStyles();
  return (
    <div className={classes.footerBottom}>
      <Container maxWidth="lg" className={classes.footerBottomConteiner}>
        <Grid
          container
          spacing={2}
          columns={16}
          className={classes.footerBottomGridContainer}
        >
          <Grid item xs={8} className={classes.footerBottomGrid}>
            <div>
              <p>
                © 2021 <Link to="/">Lifestyle Electronics</Link>. Made with{" "}
                <FavoriteIcon />
                <i className="fa fa-heart text-danger" /> By{" "}
                <Link to="/">Our Teams</Link>{" "}
              </p>
            </div>
          </Grid>
          <Grid item xs={8} className={classes.footerBottomGrid}>
            <div className={classes.footerBottomRight}>
              <Link to="/">
                <img
                  alt="socialLinks"
                  src="https://htmldemo.net/lukani/lukani/assets/img/icon/payment.png"
                />
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FooterBottom;
