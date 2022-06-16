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
        <Typography variant="h3">Opening Time</Typography>
      </ThemeProvider>
      <p className={classes.workingTime}>
        <span>Mon - Fri:</span> 8AM - 10PM
      </p>
      <p className={classes.workingTime}>
        <span>Sat:</span> 9AM-8PM
      </p>
      <p className={classes.workingTime}>
        <span>Suns:</span> 14hPM-18hPM
      </p>
      <p className={classes.whenWeOpen}>
        <b>We Work All The Holidays</b>
      </p>
    </>
  );
}

export default OpeningTime;
