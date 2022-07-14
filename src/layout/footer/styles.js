import { createUseStyles } from "react-jss";

const footerStyles = createUseStyles({
  footer: {
    lineHeight: "24px",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    visibility: "visible",
    fontFamily: '"Rubik", sans-serif',
    color: "#222222",
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    boxSizing: "border-box",
  },
  footerContainer: {
    "@media only screen and (max-width: 900px)": {
      marginBottom: 25,
    },
    "@media only screen and (max-width: 600px)": {
      width: 150,
    },
  },
  footerGrid: {
    alignItems: "start",
  },
  gridRow: {
    display: "flex",
    justifyContent: "space-between",
    "@media only screen and (max-width: 900px)": {
      flexDirection: "column",
    },
    "@media only screen and (max-width: 600px)": {
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
  },
  gridRowLogo: {
    justifyContent: "center",
  },
  rightGrid: {
    display: "flex",
    justifyContent: "space-between",
    "@media only screen and (max-width: 900px)": {
      flexDirection: "column",
      textAlign: "right",
      "& h3": {
        "&:before": {
          left: "auto",
          right: 0,
        },
      },
    },
    "@media only screen and (max-width: 600px)": {
      flexDirection: "row",
      justifyContent: "space-evenly",
      textAlign: "inherit",
      "& h3": {
        "&:before": {
          left: 0,
        },
      },
    },
  },
  footerTop: {
    padding: "60px 0 40px",
    borderTop: "1px solid #e1e1e1",
    borderBottom: "1px solid #e1e1e1",
    "@media only screen and (max-width: 767px)": {
      padding: "55px 0 4px",
    },
    "& ul": {
      listStyle: "outside none none",
      margin: "0",
      padding: "0",
    },
    "& li": {
      paddingBottom: 2,
    },
    "& a": {
      fontWeight: "400",
      fontSize: "13px",
      transition: "all 0.3s ease 0s",
      color: "inherit",
      textDecoration: "none",
      cursor: "pointer",
      display: "inline-block",
      "&:hover": {
        color: "#79a206",
      },
    },
  },
  widgetsContainer: {
    boxSizing: "border-box",
    "& h3": {
      textAlign: "left",
      marginBottom: 20,
    },
    "& p": {
      textAlign: "left",
      fontSize: 13,
      marginBottom: 0,
      marginTop: 0,
    },
    "@media only screen and (max-width: 900px)": {
      marginBottom: 25,
    },
    "@media only screen and (max-width: 600px)": {
      width: 150,
    },
  },
  whenWeOpen: {
    marginTop: "38px",
    marginBottom: "0",
    fontSize: "14px",
    lineHeight: "30px",
    fontWeight: "500",
    "@media only screen and (max-width: 767px)": {
      marginTop: "0",
    },
  },
  infoContainer: {
    "@media only screen and (max-width: 600px)": {
      width: 150,
    },
  },
  rowHeading: {
    fontSize: 13,
    marginBottom: 20,
    paddingBottom: 10,
    textTransform: "uppercase",
    fontWeight: "600!important",
    position: "relative",
    "&:before": {
      content: "''",
      width: 35,
      height: 2,
      background: "#222222",
      position: "absolute",
      bottom: 0,
      left: 0,
    },
    "@media only screen and (max-width: 900px)": {
      marginBottom: 12,
      fontSize: 14,
    },
  },
  footerInfoMenu: {
    display: "block",
    fontWeight: "400",
    fontSize: "15px",
    transition: "all 0.3s ease 0s",
    color: "inherit",
    lineHeight: "inherit",
    textDecoration: "none",
    cursor: "pointer",
  },
  contactContainer: {
    "@media only screen and (max-width: 767px)": {
      marginBottom: "55px",
    },
    "@media only screen and (max-width: 575px)": {
      textAlign: "center",
    },
  },
  contactLinksHeader: {
    textAlign: "center",
    "@media only screen and (max-width: 900px)": {
      width: 120,
      margin: [[0, "auto"]],
    },
    "& a": {
      color: "inherit",
      lineHeight: "inherit",
      textDecoration: "none",
      cursor: "pointer",
    },
    "& img": {
      width: "150px",
      maxWidth: "100%",
      height: "auto",
    },
  },
  socialLinks: {
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
    width: "42px",
    height: "42px",
    background: "#f2f2f2",
    borderRadius: "50%",
    cursor: "pointer",
    "&:hover": {
      color: "#79a206",
    },
    "@media only screen and (max-width: 900px)": {
      width: 36,
      height: 36,
    },
  },
  socialBtnList: {
    textAlign: "center",
    "& li": {
      display: "inline-block",
      marginRight: "8px",
      "@media only screen and (max-width: 767px)": {
        marginRight: "6px",
      },
    },
    "& svg": {
      fontSize: "20px!important",
    },
  },
  footerBottom: {
    padding: "29px 0",
    height: "35px",
    "@media only screen and (max-width: 767px)": {
      padding: "25px 0",
    },
  },
  footerBottomConteiner: {
    maxWidth: "1200px",
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    height: "35px",
  },
  footerBottomGridContainer: {
    alignItems: "center",
    "@media only screen and (max-width: 479px)": {
      width: "100%",
      marginLeft: "80px",
    },
    "@media only screen and (max-width: 767px)": {
      maxWidth: "464px",
    },
  },
  footerBottomGrid: {
    paddingTop: "0px!important",
    "@media only screen and (max-width: 767px)": {
      width: "100%",
      boxSizing: "content-box",
    },
    "& p": {
      textTransform: "capitalize",
      lineHeight: "25px",
      fontSize: "14px",
      "@media only screen and (max-width: 767px)": {
        textAlign: "center",
        letterSpacing: "0",
        fontSize: "13px",
        lineHeight: "20px",
      },
    },
    "& a": {
      color: "#79a206",
      transition: "all 0.3s ease 0s",
      lineHeight: "inherit",
      textDecoration: "none",
      cursor: "pointer",
    },
    "& svg": {
      display: "inline-block",
      font: "normal normal normal 14px/1 FontAwesome",
      fontSize: "14px!important",
      textRendering: "auto",
      color: "#dc3545",
    },
  },
  footerBottomRight: {
    textAlign: "right",
    "& img": {
      "@media only screen and (max-width: 767px)": { width: "100%" },
    },
  },
});

export default footerStyles;
