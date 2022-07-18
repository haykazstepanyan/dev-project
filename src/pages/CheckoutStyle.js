import { createUseStyles } from "react-jss";
import { colors } from "../constants/constants";

const checkoutStyles = createUseStyles({
  darkBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#00000061",
    height: "100%",
    zIndex: 99,
  },
  stripeContainer: {
    backgroundColor: "white",
    position: "relative",
    zIndex: 100,
    boxShadow: "0 30px 50px -20px rgb(50 50 93 / 25%)",
    width: 400,
    margin: "0 auto",
    borderRadius: 4,
    padding: 20,
    fontSize: "1.2em",
    "& a": {
      color: colors.green,
    },
    "& #payment-form": {
      border: "#f6f9fc solid 1px",
      padding: 20,
      margin: [[20, 0]],
      "& button": {
        backgroundColor: colors.green,
        color: "white",
        border: 0,
        padding: [[12, 16]],
        marginTop: 16,
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.2s ease",
        display: "block",
        borderRadius: 4,
        " &:hover": {
          backgroundColor: colors.black,
        },
        "&:disabled": {
          cursor: "none",
        },
      },
    },
    "& h1": {
      display: "flex",
      justifyContent: "center",
      fontWeight: 400,
    },
    "& #messages": {
      display: "none",
      backgroundColor: "#0a253c",
      color: "#00d924",
      padding: 20,
      margin: [[20, 0]],
      fontSize: "0.7em",
    },
    "@media(max-width: 575px)": {
      maxWidth: "100%",
      width: "unset",
    },
  },
});

export { checkoutStyles };
