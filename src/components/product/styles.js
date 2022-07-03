import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const productItemStyles = createUseStyles({
  productCard: {
    position: "relative",
    maxWidth: 255,
    textAlign: "center",
    overflow: "visible",
  },
  productImgContainer: {
    "&:hover $productImg": {
      position: "relative",
      transform: "rotate(-15deg) translateX(-35px)",
    },
    "&:hover $productIcons": {
      opacity: 1,
      transition: "opacity 1.2s",
    },
  },
  productImg: {
    transition: "transform 0.6s ease",
    zIndex: 20,
  },
  productIcons: {
    position: "absolute",
    top: 85,
    right: 5,

    // visibility: "hidden",
    opacity: 0,
  },
  productIconButton: {
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    padding: 5,
    background: colors.lightGrey,
    // color: colors.black,
  },
  productName: {
    fontSize: 14,
    color: colors.black,
    textTransform: "Capitalize",
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

export { productItemStyles, saleStyles };
