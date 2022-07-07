import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createUseStyles } from "react-jss";
import Typography from "@mui/material/Typography";
import styles from "./styles";

const useStyles = createUseStyles(styles);

function OpeningTime() {
  const classes = useStyles();
  const theme = createTheme({
    typography: {
      h3: {
        fontSize: "13px",
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
        "@media only screen and (max-width: 575px)::before": {
          left: "50%",
          transform: "translatex(-50%)",
        },
      },
    },
  });

  return (
    <div className={classes.widgetsContainer}>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">Opening Time</Typography>
      </ThemeProvider>
      <p>
        <span>Mon - Fri:</span> 8 AM - 10 PM
      </p>
      <p>
        <span>Sat:</span> 9 AM - 8 PM
      </p>
      <p>
        <span>Suns:</span> 14 PM - 18 PM
      </p>
    </div>
  );
}

export default OpeningTime;
