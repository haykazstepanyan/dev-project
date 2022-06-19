import { createUseStyles } from "react-jss";
import { colors } from "../constants/constants";

const aboutUsStyles = createUseStyles({
  aboutUsInfo: {
    padding: [[100, 0]],
  },
  aboutInfoTitle: {
    fontSize: 24,
    textTransform: "capitalize",
    fontWeight: 400,
    marginBottom: 21,
    textAlign: "center",
  },
  aboutInfoText: {
    textAlign: "center",
    fontSize: 14,
  },
  featureBgImage: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});

const contactUsStyles = createUseStyles({
  contactUsTitle: {
    fontSize: 21,
    textTransform: "capitalize",
    fontWeight: 500,
    marginBottom: 25,
  },
  contactUsMainInfo: {
    "& p": {
      padding: [[13, 0]],
      borderTop: "1px solid #e1e1e1",
      color: "#3b3b41",
      display: "flex",
      alignItems: "center",
      "& span": {
        marginLeft: 10,
      },
    },
    "& a": {
      color: "#3b3b41",
      textDecoration: "none",
    },
  },
  contactUsForm: {
    "& label": {
      fontWeight: 500,
      display: "block",
    },
    "& textarea": {
      border: "1px solid #e1e1e1",
      maxHeight: 45,
      height: 45,
      background: "#ffffff",
      textIndent: 20,
      color: "#757575",
      marginBottom: 20,
      minWidth: "100%",
      maxWidth: "100%",
      paddingTop: 20,
      minHeight: 100,
    },
    "& input:focus, textarea:focus": {
      outline: "none",
    },
  },
});

const accountStyles = createUseStyles({
  listItem: {
    height: "45px",
    cursor: "pointer",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
    color: "#FFF",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: "3px",
    padding: 10,
    margin: 10,
    textTransform: "capitalize",
    "&:hover": {
      background: "rgb(121, 162, 6)",
    },
  },
  activeLink: {
    backgroundColor: colors.green,
  },
});

const shopStyles = createUseStyles({
  shopItemContainer: {
    marginLeft: 25,
  },
  shopItem: {
    padding: "0 !important",
    marginBottom: 24,
  },
});

const cartStyles = createUseStyles({
  couponBlock: {
    backgroundColor: colors.black,
    "& h3": {
      color: "#ffffff",
      lineHeight: "36px",
      padding: "5px 15px",
      background: "#222222",
      textTransform: "uppercase",
      fontSize: "16px",
      fontWeight: "500",
    },
  },
  couponBottomBlock: {
    padding: "25px",
    border: "1px solid #e1e1e1",
    "& p": {
      fontSize: "14px",
      marginBottom: "20px",
    },
    // "& input": {
    //   border: "1px solid #e1e1e1",
    //   maxHeight: 45,
    //   height: 35,
    //   background: "#ffffff",
    //   textIndent: 20,
    //   color: "#757575",
    //   marginRight: 10,
    //   marginBottom: 10,
    // },
    // "& input:focus-visible": {
    //   outline: "none",
    // },
  },
  cartTotalsBottom: {
    padding: "25px",
    border: "1px solid #e1e1e1",
    "& >div>div": {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px",
      "& p:first-child": {
        fontWeight: "600",
        fontSize: "14px",
      },
      "& p:last-child": {
        fontSize: "18px",
        fontWeight: "500",
        textAlign: "right",
        "& span": {
          marginRight: "20px",
        },
      },
    },
  },
});

export {
  aboutUsStyles,
  contactUsStyles,
  accountStyles,
  cartStyles,
  shopStyles,
};
