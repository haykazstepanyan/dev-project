import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./styles";
import { createUseStyles } from "react-jss";
import { Container } from "@mui/system";
import clsx from "clsx";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

const useStyles = createUseStyles(styles);

const FooterBottom = () => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.footerBottom, classes.footerBottomHeight)}>
      <Container
        maxWidth="lg"
        className={clsx(
          classes.footerBottomConteiner,
          classes.footerBottomHeight
        )}
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
              <i className="fa fa-heart text-danger"></i> By{" "}
              <Link to="/" className={classes.footerBottomLink}>
                Our Teams
              </Link>
            </p>
          </Grid>
          <Grid item xs={8} className={classes.footerBottomGrid}>
            <div className={classes.footerBottomRight}>
              <Link to="/">
                <img src="https://htmldemo.net/lukani/lukani/assets/img/icon/payment.png" />
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FooterBottom;
