import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import styles from "./styles";

const useStyles = createUseStyles(styles);

function Information() {
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
        "@media only screen and (max-width: 767px)": {
          marginBottom: "12px",
          fontSize: "14px",
          display: "inline-block",
        },
      },
    },
  });

  return (
    <div className={classes.infoContainer}>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">INFORMATION</Typography>
      </ThemeProvider>
      <nav>
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/checkouts">Checkout</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/faq">Frequently Questions</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Information;
