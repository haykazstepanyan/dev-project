import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import styles from "./styles";

const useStyles = createUseStyles(styles);

function MyAccount() {
  const classes = useStyles();
  const theme = createTheme({
    typography: {
      h3: {
        fontSize: "13px",
        marginBottom: "20px",
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

  const data = [
    { name: "My Account", link: "/account/dashboard" },
    { name: "Contact", link: "/contact" },
    { name: "Shopping cart", link: "/cart" },
    { name: "Shop", link: "/shop" },
  ];

  return (
    <div className={classes.footerContainer}>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">MY ACCOUNT</Typography>
      </ThemeProvider>
      <nav>
        <ul>
          {data.map(({ name, link }) => (
            <li key={link}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MyAccount;
