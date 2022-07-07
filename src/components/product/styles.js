import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const productItemStyles = createUseStyles({
  productCard: {
    position: "relative",
    maxWidth: 255,
    textAlign: "center",
    background: colors.lightGrey,
  },
  cardContent: {
    position: "relative",
  },
  goBackIcon: {
    position: "absolute",
    left: 0,
    top: 0,
    color: colors.green,
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
  "@media screen and (max-width: 600px)": {
    productCard: {
      margin: [[0, "auto"]],
    },
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
    padding: [[0, 5]],
    marginBottom: 24,
  },
});

export { productItemStyles, saleStyles, shopPageProductsStyles };
