import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const addToCartStyles = createUseStyles({
  addToCart: ({ btnWidth = "100%" }) => ({
    width: btnWidth,
    "& button": {
      width: "100%",
    },
  }),
  cartContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    border: `2px solid ${colors.green}`,
    borderRadius: 50,
    height: 36,
    padding: 5,
    "&:focus-within": {
      borderColor: colors.success,
    },
    "& button": {
      border: "none",
      background: "none",
      color: "#1c1c1c",
      fontSize: 15,
      lineHeight: 1,
      cursor: "pointer",
      minWidth: 15,
      maxWidth: 30,
      textTransform: "capitalize",
      "&:hover": {
        background: "transparent",
      },
    },
    "& .MuiInputBase-root:hover fieldset": {
      border: "none !important",
    },
    "& input": {
      padding: "5px !important",
      textAlign: "center",
      "&::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
      },
    },
    "& fieldset": {
      border: "none !important",
    },
  },
});

export default addToCartStyles;
