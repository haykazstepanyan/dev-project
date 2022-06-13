import * as React from "react";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { createUseStyles } from "react-jss";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const Information = () => {
  const classes = useStyles();
  const theme = createTheme({
    typography: {
      h3: {
        lineHeight: "24px",
        fontSize: "14px",
        marginBottom: "31px",
        paddingBottom: "10px",
        textTransform: "uppercase",
        fontWeight: "600!important",
        position: "relative",
        "&:before": {
          content: "''",
          width: "35px",
          height: "2px",
          background: "#222222",
          position: "absolute",
          bottom: "0",
          left: "0",
        },
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">INFORMATION</Typography>
      </ThemeProvider>
      <nav>
        <ul className={classes.infoUl}>
          <li className={classes.infoLi}>
            <Link to="/about" className={classes.link}>
              About Us
            </Link>
          </li>
          <li className={classes.infoLi}>
            <Link to="/checkouts" className={classes.link}>
              Checkout
            </Link>
          </li>
          <li className={classes.infoLi}>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
          </li>
          <li className={classes.infoLi}>
            <Link to="/faq" className={classes.link}>
              Frequently Questions
            </Link>
          </li>
          <li className={classes.infoLi}>
            <Link to="/wishlist" className={classes.link}>
              Wishlist
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Information;
