import Grid from "@mui/material/Grid";
import { createUseStyles } from "react-jss";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./styles";

const useStyles = createUseStyles(styles);

function FooterBottom() {
  const classes = useStyles();
  return (
    <div className={`${classes.footerBottom} ${classes.footerBottomHeight}`}>
      <Container
        maxWidth="lg"
        className={`${classes.footerBottomConteiner} ${classes.footerBottomHeight}`}
      >
        <Grid
          container
          spacing={2}
          columns={16}
          className={classes.footerBottomGridContainer}
        >
          <Grid item xs={8} className={classes.footerBottomGrid}>
            <p className="copyright-text">
              © 2021{" "}
              <Link to="/" className={classes.footerBottomLink}>
                Lukani
              </Link>
              . Made with <FavoriteIcon className={classes.footerBottomHeart} />
              <i className="fa fa-heart text-danger" /> By{" "}
              <Link to="/" className={classes.footerBottomLink}>
                Our Teams
              </Link>
            </p>
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
