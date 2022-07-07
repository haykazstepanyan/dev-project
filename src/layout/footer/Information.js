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
    { name: "About us", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Frequently Questions", link: "/faq" },
    { name: "Wishlist", link: "/wishlist" },
  ];

  return (
    <div className={classes.infoContainer}>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">INFORMATION</Typography>
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

export default Information;
