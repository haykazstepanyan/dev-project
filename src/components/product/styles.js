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
  cartContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    height: "25px",
    margin: "auto",
    position: "relative",
    backgroundColor: "#fff",
    border: " 2px solid #2cb77e",
    borderRadius: "100px",
    overflow: "hidden",
    "& button": {
      position: "absolute",
      display: "block",
      border: "none",
      background: "none",
      color: "#1c1c1c",
      textAlign: "center",
      top: 0,
      fontWeight: 400,
      fontSize: "20px",
      cursor: "pointer",
    },
  },
  cartInput: {
    border: "none",
    textAlign: "center",
    fontWeight: 400,
    fontSize: "15px",
  },
  desBtn: {
    left: "15px",
  },
  incBtn: {
    right: "15px",
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
