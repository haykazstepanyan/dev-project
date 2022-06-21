const styles = {
  footer: {
    lineHeight: "24px",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    visibility: "visible",
    fontFamily: '"Rubik", sans-serif',
    color: "#222222",
    width: "100%",
    paddingRight: "var(--bs-gutter-x,.75rem)",
    paddingLeft: "var(--bs-gutter-x,.75rem)",
    marginRight: "auto",
    marginLeft: "auto",
    boxSizing: "border-box",
  },
  footerContainer: {
    width: "100%",
    paddingRight: "var(--bs-gutter-x,.75rem)",
    paddingLeft: "var(--bs-gutter-x,.75rem)",
    marginRight: "auto",
    marginLleft: "auto",
    "@media only screen and (max-width: 479px)": {
      width: "100%",
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      maxWidth: "464px",
    },
  },
  gridRow: {
    "@media only screen and (max-width: 767px)": { width: "100%" },
  },
  footerTop: {
    padding: "99px 0 89px",
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
      paddingBottom: "2px",
      "@media only screen and (max-width: 767px)": {
        lineHeight: "22px",
        fontSize: "13px",
      },
    },
    "& a": {
      display: "block",
      fontWeight: "400",
      fontSize: "15px",
      transition: "all 0.3s ease 0s",
      color: "inherit",
      textDecoration: "none",
      cursor: "pointer",
      "&:hover": {
        color: "#79a206",
      },
      "@media only screen and (max-width: 767px)": {
        fontSize: "13px",
      },
    },
  },
  widgetsContainer: {
    boxSizing: "border-box",
    "& p": {
      fontSize: "14px",
      lineHeight: "30px",
      marginBottom: "0",
      marginTop: "0",
      "@media only screen and (max-width: 767px)": {
        fontSize: "13px",
      },
    },
    "@media only screen and (max-width: 575px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      marginBottom: "43px",
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
    "@media only screen and (max-width: 767px)": {
      marginBottom: "48px",
    },
    "@media only screen and (max-width: 575px)": {
      textAlign: "center",
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
    marginBottom: "30px",
    textAlign: "center",
    "@media only screen and (max-width: 767px)": {
      marginBottom: "20px",
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
  socialBtnList: {
    marginTop: "23px",
    textAlign: "center",
    "& a": {
      width: "42px",
      height: "42px",
      lineHeight: "50px",
      display: "block",
      textAlign: "center",
      fontSize: "14px",
      background: "#f2f2f2",
      borderRadius: "50%",
      color: "inherit",
      textDecoration: "none",
      cursor: "pointer",
      "&:hover": {
        color: "#79a206",
      },
      "@media only screen and (max-width: 767px)": {
        marginTop: "15px",
      },
    },
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
    paddingRight: "var(--bs-gutter-x,.75rem)",
    paddingLeft: "var(--bs-gutter-x,.75rem)",
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
      textAlign: "center",
      "@media only screen and (max-width: 767px)": {
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
};

export default styles;
