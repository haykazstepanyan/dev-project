import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const productItemStyles = createUseStyles({
  productCard: {
    position: "relative",
    maxWidth: 255,
    textAlign: "center",
    background: colors.lightGrey,
  },
  productName: {
    fontSize: 14,
    color: colors.black,
    textTransform: "Capitalize",
    height: 48,
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
