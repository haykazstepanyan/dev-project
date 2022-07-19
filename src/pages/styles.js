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
    lineHeight: "25px",
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
      fontWeight: 400,
      display: "block",
      fontSize: 14,
    },
    "& textarea": {
      border: "1px solid #e1e1e1",
      maxHeight: 45,
      height: 45,
      background: "#ffffff",
      textIndent: 5,
      color: "#757575",
      minWidth: "100%",
      maxWidth: "100%",
      paddingTop: 13,
      minHeight: 100,
      marginBottom: 0,
    },
    "& input:focus, textarea:focus": {
      outline: "none",
    },
  },
});

const accountStyles = createUseStyles({
  listItem: {
    cursor: "pointer",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
    color: "#FFF",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: "3px",
    margin: [[10, 0]],
    padding: 0,
    textTransform: "capitalize",
    "&:hover": {
      background: "rgb(121, 162, 6)",
    },
    "& button": {
      background: "transparent",
      fontSize: 14,
      textTransform: "capitalize",
      width: "100%",
      display: "block",
      textAlign: "left",
      padding: [[11, 16]],
    },
  },
  navLinks: {
    display: "inline-block",
    width: "100%",
    padding: [[14, 16]],
    height: 18,
  },
  activeLink: {
    "& li": {
      backgroundColor: colors.green,
    },
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
  coupon: {
    height: "100%",
  },
  couponBottomBlock: {
    padding: "25px",
    border: "1px solid #e1e1e1",
    "& p": {
      fontSize: "14px",
      marginBottom: "20px",
    },
  },
  cartTotals: {
    padding: "15px 0",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    "& p": {
      fontSize: "18px",
      fontWeight: "500",
      textAlign: "right",
      "& span": {
        marginRight: "20px",
      },
    },
  },
});

const mainStyles = createUseStyles({
  shipingArea: {
    padding: "99px 0",
    "@media only screen and (max-width: 767px)": {
      padding: "59px 0 58px",
    },
  },
  container: {
    paddingRight: "var(--bs-gutter-x,.75rem)",
    paddingLeft: " var(--bs-gutter-x,.75rem)",
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "1200px",
    width: "100%",
    boxSizing: "border-box",
    "@media only screen and (max-width: 479px)": {
      width: "100%",
    },
    "@media only screen and (max-width: 767px)": {
      maxWidth: "464px",
    },
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    "@media only screen and (max-width: 479px)": {
      display: "-webkit-box;",
    },
    justifyContent: "center",
  },
  colLg4: {
    width: "33.33333333%",
    "@media only screen and (max-width: 767px)": {
      width: "auto",
    },
  },
  singleShipping: {
    borderRight: "1px solid #ebebeb",
    display: "flex",
    alignItems: "center",
    "@media only screen and (max-width: 767px)": {
      marginBottom: "23px",
      borderRight: "0",
    },
  },
  shippingIcone: {
    marginRight: "18px",
    marginLeft: "18px",
    "@media only screen and (max-width: 767px)": {
      marginRight: "15px",
    },
    "& img": {
      "@media only screen and (max-width: 767px)": {
        maxWidth: "42px",
      },
    },
  },
  shippingContent: {
    "& h3": {
      fontSize: "14px",
      lineHeight: "16px",
      textTransform: "capitalize",
      fontWeight: "500",
      marginBottom: "7px",
      "@media only screen and (max-width: 767px)": {
        fontSize: "13px",
      },
    },
    "& p": {
      fontSize: "14px",
      lineHeight: "18px",
      fontWeight: "300",
      "@media only screen and (max-width: 767px)": {
        fontSize: "13px",
      },
    },
  },

  bannerArea: {
    marginBottom: "88px",
    "@media only screen and (max-width: 767px)": {
      marginBottom: "27px",
    },
  },
  colLg6: {
    width: "45%",
    "@media only screen and (max-width: 767px)": {
      width: "auto",
    },
  },
  singleBanner: {
    "@media only screen and (max-width: 767px)": {
      marginBottom: "30px",
    },
  },
  bannerThumb: {
    position: "relative",
    "& img": {
      width: "100%",
      height: 300,
      objectFit: "cover",
    },
  },
  bannerContent: {
    position: "absolute",
    top: "50%",
    transform: "translatey(-50%)",
    left: "21px",
    boxSizing: "border-box",
    "& h3": {
      fontSize: "18px",
      lineHeight: "21px",
      fontWeight: "400",
      marginTop: 20,
      color: "#2d383f",
    },
    "& h2": {
      fontSize: "21px",
      lineHeight: "21px",
      marginBottom: "0",
      fontWeight: "400",
      marginTop: "0",
    },
    "& h4": {
      fontWeight: "500",
      color: "#2d383f",
    },
    "& >div": {
      background: "#ffffff57",
      padding: 20,
      borderRadius: 4,
    },
  },
  bannerContentLink: {
    lineHeight: "17px",
    fontWeight: "500",
    display: "inline-block",
    borderBottom: "2px solid #79a206",
    textTransform: "uppercase",
    marginTop: "36px",
    fontSize: 14,
    paddingBottom: 5,
    color: "#232424",
  },
  imgResponsive: {
    maxWidth: "100%",
    height: "auto",
  },
  welcomeHomeStore: {
    marginBottom: "90px",
    "@media only screen and (max-width: 767px)": {
      marginBottom: "57px",
    },
  },
  welcomeHomeContainer: {
    padding: "70px 0 50px",
    "@media only screen and (max-width: 767px)": {
      padding: "59px 0 53px",
    },
  },
  colLg5: {
    "@media (min-width: 992px)": {
      width: "41.66666667%",
    },
  },
  welcomeHomeThumb: {
    textAlign: "center",
  },
  colLg7: {
    "@media (min-width: 992px)": {
      width: "58.33333333%",
    },
  },
  welcomHomeContent: {
    "@media only screen and (max-width: 900px)": {
      textAlign: "center",
      width: 565,
    },
    "@media only screen and (max-width: 767px)": {
      textAlign: "center",
      width: "100% !important",
    },
  },
  welcomeHomeHeader: {
    marginBottom: "23px",
    "@media only screen and (max-width: 767px)": {
      marginBottom: "18px",
    },
    "& h3": {
      color: "#79a206",
      fontSize: "14px",
      lineHeight: "16px",
      fontWeight: "500",
      textTransform: "uppercase",
      marginBottom: "7px",
    },
    "& h2": {
      fontSize: "40px",
      lineHeight: "48px",
      fontWeight: "400",
      fontFamily: " 'Lora', serif",
      "@media only screen and (max-width: 767px)": {
        fontSize: "27px",
        lineHeight: "30px",
      },
    },
  },
  welcomeLukaniDesc: {
    "& p": {
      fontSize: "14px",
      lineHeight: "24px",
      marginBottom: "25px",
      "@media only screen and (max-width: 767px)": {
        marginBottom: "15px",
      },
    },
  },
  welcomeHomeFooter: {
    "@media only screen and (max-width: 767px)": {
      marginTop: "23px",
    },
    "& p": {
      fontSize: "14px",
      lineHeight: "25px",
      textTransform: "uppercase",
      marginTop: "16px",
      "@media only screen and (max-width: 767px)": {
        marginTop: "13px",
      },
    },
    "& span": {
      fontWeight: "500",
      "@media only screen and (max-width: 767px)": {
        padding: "57px 0 60px",
      },
    },
  },
  newsletterAreaStart: {
    padding: "92px 0 100px",
  },
  col12: {
    width: "100%",
  },
  sectionTitle: {
    textAlign: "center",
    marginBottom: "30px",
    "@media only screen and (max-width: 767px)": {
      marginBottom: "25px",
    },
    "& h2": {
      fontSize: "40px",
      lineHeight: "48px",
      fontWeight: "400",
      marginBottom: "0",
      fontFamily: "'Lora', serif",
      paddingBottom: "22px",
      "& span": {
        color: "#79a206",
      },
      "@media only screen and (max-width: 767px)": {
        fontSize: "19px",
        lineHeight: "20px",
        paddingBottom: "13px",
      },
    },
  },
  newsletterContainer: {
    width: "100%",
    boxSizing: "border-box",
    paddingTop: "16px",
    "@media only screen and (max-width: 767px)": {
      paddingTop: "0",
    },
    "& form": {
      position: "relative",
      borderBottom: "1px solid #373737",
      width: "630px",
      margin: "0 auto",
      "@media only screen and (max-width: 767px)": {
        width: "100%",
      },
    },
    "& input": {
      width: "100%",
      border: "0",
      background: "none",
      padding: "0 108px 0 45px",
      height: "48px",
      fontSize: "15px",
      color: " #222",
      "@media only screen and (max-width: 767px)": {
        height: "40px",
        fontSize: "13px",
        padding: "0 74px 0 33px",
      },
    },
    "& button": {
      fontSize: "14px",
      textTransform: "uppercase",
      fontWeight: "500",
      height: "100%",
      border: "0",
      position: "absolute",
      top: "0",
      right: "0",
      transition: "0.3s",
      padding: "0",
      background: "inherit",
      cursor: "pointer",
      "&:hover": {
        color: "#79a206",
      },
      "@media only screen and (max-width: 767px)": {
        fontSize: "12px",
      },
    },
  },
  subscribeFormEmailIcon: {
    position: "absolute",
    top: "56%",
    left: "0",
    transform: "translatey(-50%)",
  },
});

const signUpInStyles = createUseStyles({
  formContainer: {
    padding: [[50, 0]],
  },
  errorInput: {
    "& fieldset": {
      border: "1px solid #d22d3d !important",
    },
    "& textarea": {
      border: "1px solid #d22d3d !important",
    },
  },
  formStyle: {
    width: 350,
    border: `1px solid ${colors.milky}`,
    padding: "23px 20px 29px",
    boxSizing: "border-box",
  },
  btnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  authLink: {
    "&:hover": {
      color: colors.green,
    },
  },
  mb10: {
    marginBottom: 10,
  },
});

const shopStyles = createUseStyles({
  shop: {
    "& >div": {
      marginTop: "40px !important",
    },
    "@media screen and (max-width: 600px)": {
      padding: 0,
    },
  },
  shopContainer: {
    "@media screen and (max-width: 900px)": {
      flexDirection: "column-reverse",
    },
  },
});

const productViewStyles = createUseStyles({
  productContainer: {
    position: "relative",
    paddingTop: 24,
    "& .MuiGrid-root": {
      alignItems: "start",
    },
  },
  goBackIcon: {
    position: "absolute",
    top: 40,
    left: 25,
    "& svg": {
      fontSize: 40,
      color: colors.green,
      cursor: "pointer",
    },
  },
  goBackText: {
    fontSize: 12,
    marginLeft: 12,
    color: colors.green,
  },
  productImgContainer: {
    paddingTop: 80,
    "& img": {
      height: 400,
      objectFit: "contain",
      width: "100%",
    },
  },
  "container_grid-container": {
    alignItems: "center",
  },

  "grid-item_img_container": {
    padding: "10px !important",
  },
  "grid-item_img_img": {
    maxWidth: "100% !important",
  },

  "grid-item_content": {
    padding: "5px !important",
  },
  "grid-item_content_container": {
    maxWidth: "100% !important",
  },

  "product-name-price_container": {
    marginBottom: "3px !important",
  },

  "product_current-price": { fontWeight: 500, fontSize: 23, color: "#79a206" },

  "product_old-price": {
    textDecoration: "line-through",
    fontWeight: 400,
    fontSize: 20,
    marginLeft: "10px !important",
  },

  product_description_container: {
    marginBottom: "6px !important",
  },

  product_form_container: {
    marginTop: "3px !important",
  },
  "product_form-button": {
    display: "inline",
    marginLeft: "3px !important",
  },
  "product_add-to-wishlist_container": {
    marginTop: "3px !important",
  },

  "product_add-to-wishlist_text": {
    fontSize: 12,
  },

  product_category_container: {
    marginTop: "3px !important",
  },

  productCategoryText: {
    marginRight: 4,
  },

  "social-network-icons_container": {
    display: "flex",
    justifyContent: "space-between",
    width: 100,
  },

  fb_icon: {
    cursor: "pointer",
    color: "#4267B2",
  },

  pinterest_icon: {
    cursor: "pointer",
    color: "#E60023",
  },

  linkedIn_icon: {
    cursor: "pointer",
    color: "#0072b1",
  },
});

export {
  aboutUsStyles,
  contactUsStyles,
  accountStyles,
  cartStyles,
  mainStyles,
  signUpInStyles,
  productViewStyles,
  shopStyles,
};
