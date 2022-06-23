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
        lineHeight: "24px",
        fontSize: "14px",
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
        <span>Mon - Fri:</span> 8AM - 10PM
      </p>
      <p>
        <span>Sat:</span> 9AM-8PM
      </p>
      <p>
        <span>Suns:</span> 14hPM-18hPM
      </p>
      {/* <h6 className={classes.whenWeOpen}>
        <b>We Work All The Holidays</b>
      </h6> */}
    </div>
  );
}

export default OpeningTime;
