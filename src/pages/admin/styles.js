import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const adminGlobalStyles = createUseStyles({
  adminLoginStyle: {
    width: 400,
    padding: 30,
    margin: "auto",
    backgroundColor: colors.white,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    "& h2": {
      textTransform: "capitalize",
      fontWeight: 600,
      marginBottom: 20,
      fontSize: 22,
      color: "#242934",
    },
    "& label": {
      fontWeight: 500,
      textTransform: "capitalize",
      marginBottom: 5,
      color: "#242934",
      fontSize: 14,
    },
    "@media (max-width: 576px)": {
      width: 235,
    },
  },
  mb10: {
    marginBottom: 10,
  },
  mb20: {
    marginBottom: 20,
  },
  textRight: {
    textAlign: "right",
  },
});

export { adminGlobalStyles };
