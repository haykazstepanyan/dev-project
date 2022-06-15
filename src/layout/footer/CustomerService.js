import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { createUseStyles } from "react-jss";
import styles from "./styles";

const useStyles = createUseStyles(styles);

function CustomerService() {
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
        <Typography variant="h3">CUSTOMER SERVICE</Typography>
      </ThemeProvider>
      <nav>
        <ul className={classes.infoUl}>
          <li className={classes.infoLi}>
            <Link to="/contact" className={classes.link}>
              Contact Us
            </Link>
          </li>
          <li className={classes.infoLi}>
            <Link to="/" className={classes.link}>
              Terms of use
            </Link>
          </li>
          <li className={classes.infoLi}>
            <Link to="/contact" className={classes.link}>
              Site Map
            </Link>
          </li>
          <li className={classes.infoLi}>
            <Link to="/my-account" className={classes.link}>
              My Account
            </Link>
          </li>
          <li className={classes.infoLi}>
            <Link to="/" className={classes.link}>
              Returns
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default CustomerService;
