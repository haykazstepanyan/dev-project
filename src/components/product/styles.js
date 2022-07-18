import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const productItemStyles = createUseStyles({
  product: {
    position: "relative",
    border: "1px solid #e8e8e8",
    boxShadow: "none !important",
    padding: 15,
    "& .MuiCardContent-root": {
      paddingBottom: 0,
    },
  },
  productName: {
    fontSize: 14,
    color: colors.black,
    textTransform: "Capitalize",
    height: 42,
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "& a:hover": {
      color: colors.green,
    },
  },
  productDescription: {
    display: "none",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: 14,
    color: colors.black,
    textTransform: "Capitalize",
    "-webkit-box-orient": "vertical",
  },
  productDiscountedPrice: {
    fontWeight: 500,
    fontSize: 15,
    color: colors.green,
  },
  productRealPrice: {
    marginLeft: 8,
    textDecoration: "line-through",
    fontWeight: 400,
    fontSize: 12,
  },
  multipleProductsCard: {
    textAlign: "center",
  },
  singleProductCard: {
    display: "flex",
    boxShadow: "none",
    "& $productImgLink": {
      "& img": {
        width: 250,
        height: 250,
      },
    },
    "& $productName": {
      fontSize: 18,
      height: "auto",
    },
    "& $productDescription": {
      height: 63,
      "-webkit-line-clamp": 3,
      display: "-webkit-box",
    },
    "& $productPrices": {
      marginTop: 16,
    },
    "& $productIcons": {
      marginTop: 24,
    },
  },
  productImgLink: {
    "& img": {
      objectFit: "contain",
      height: 180,
      width: "100%",
      "&:hover": {
        transform: "scale(1.07)",
        transition: "0.4s all",
      },
    },
  },
  "@media screen and (max-width: 600px)": {
    product: {
      boxShadow: "none",
      background: "transparent",
      marginBottom: 24,
    },
    productCardContent: {
      textAlign: "left",
    },
    productName: {
      fontSize: 18,
    },
    productImgLink: {
      "& img": {
        height: 350,
      },
      width: "fit-content",
      margin: [[0, "auto"]],
    },
    multipleProductsCard: {
      margin: [[0, "auto"]],
    },
    singleProductCard: {
      flexDirection: "column",
    },
  },
  productCardContent: {},
  productPrices: {
    marginBottom: 16,
  },
  productIcons: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 20,
  },
});

const saleStyles = createUseStyles({
  sale: {
    position: "absolute",
    top: 11,
    left: 11,
    background: colors.red,
    color: colors.white,
    padding: [[4, 14]],
    borderRadius: 2,
  },
});

const shopPageProductsStyles = createUseStyles({
  shopItem: {
    padding: [[0, 10]],
    marginBottom: 24,
    "@media screen and (max-width: 600px)": {
      padding: 0,
    },
  },
});

const ToolbarStyles = createUseStyles({
  shopWrapper: {
    border: "solid 1px #e8e8e8",
    padding: 12,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: [[0, 20, 24]],
    borderRadius: 4,
  },
  shopWrapperIconsContainer: {},
  productsLength: {},
  shopWrapperIcons: {
    marginRight: 12,
    cursor: "pointer",
    padding: 0,
    "&:hover": {
      color: colors.green,
    },
  },
  activeOrder: {
    color: colors.green,
  },
  sortingForm: {
    minWidth: 160,
    "& >div:hover fieldset": {
      border: "solid 1px #e8e8e8",
      borderColor: "#e8e8e8 !important",
    },
    "& .MuiSelect-select": {
      fontSize: 14,
    },
    "& fieldset": {
      border: "solid 1px #e8e8e8",
    },
    "& .Mui-focused fieldset": {
      border: "solid 1px #e8e8e8 !important",
    },
  },
  sortingFormControls: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  radioFormControl: {
    marginLeft: 16,
  },
  radioButtons: {
    "& span": {
      paddingTop: 0,
      paddingBottom: 0,
      fontSize: 12,
      "&:hover": {
        background: "transparent",
      },
    },
    "& svg": {
      width: 12,
      height: 12,
    },
  },
  selectedRadioButton: {
    "& span": {
      color: colors.green,
    },
  },
  "@media screen and (max-width: 600px)": {
    shopWrapper: {
      flexDirection: "column",
    },
    shopWrapperIconsContainer: {
      display: "none",
    },
    productsLength: {
      paddingTop: 16,
    },
  },
});

export { productItemStyles, saleStyles, shopPageProductsStyles, ToolbarStyles };
