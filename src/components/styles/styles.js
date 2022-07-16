import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const documentStyles = createUseStyles({
  "@global": {
    "*": {
      margin: 0,
      padding: 0,
      listStyleType: "none",
    },
    body: {
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: 400,
      fontFamily: "'Rubik', sans-serif",
      "& .MuiMenu-paper": {
        maxHeight: 320,
        overflow: "auto",
      },
      "@media screen and (max-width: 900px)": {
        "& .MuiMenu-paper": {
          minWidth: "auto !important",
          maxHeight: 220,
          overflow: "auto",
        },
        "& .MuiMenu-list": {
          maxHeight: "inherit",
        },
        "& .MuiMenuItem-root": {
          minHeight: "auto",
        },
      },
    },
    a: {
      textDecoration: "none",
      color: "inherit",
    },
  },
});

const globalStyles = createUseStyles({
  header: {
    background: colors.lightGrey,
    borderBottom: `1px solid ${colors.milky}`,
    padding: [[50, 0]],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    "& h1": {
      fontWeight: 500,
      fontSize: 42,
      marginBottom: 9,
    },
  },
  featuresSectionStyle: {
    padding: [[100, 40]],
    "& img": {
      marginBottom: 23,
    },
  },
  noData: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: [[0, "auto"]],
    color: colors.black,
    paddingBottom: 32,
    "& img": {
      width: 400,
      height: 225,
      "@media screen and (max-width: 600px)": {
        width: "100%",
      },
    },
  },
  textCenter: {
    textAlign: "center",
  },
  mxAuto: {
    margin: "0 auto !important",
  },
  w100: {
    width: "100%",
  },
  mb30: {
    marginBottom: 30,
  },
  mb10: {
    marginBottom: 10,
  },
  inputStyle: {
    marginTop: 5,
    width: "100%",
  },
});

const addToCartStyles = createUseStyles({
  cartContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 180,
    border: `2px solid ${colors.green}`,
    borderRadius: 10,
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
      minWidth: "auto",
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
  // cartInput: {
  //   border: "none",
  //   textAlign: "center",
  //   fontSize: 15,
  //   width: "20%",
  //   "&:focus-visible": {
  //     outline: "none",
  //   },
  // },
});

export { documentStyles, globalStyles, addToCartStyles };
