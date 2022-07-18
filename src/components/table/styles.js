import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const tableStyles = createUseStyles({
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
  tableStyle: {
    "& .MuiTableCell-head": {
      textTransform: "capitalize",
      borderBottom: `3px solid ${colors.green}`,
      borderRight: `1px solid ${colors.milky}`,
      fontSize: 16,
      fontWeight: 600,
      padding: 10,
      textAlign: "center",
      backgroundColor: colors.milky,
    },
    "& .MuiTableCell-body": {
      borderBottom: `1px solid ${colors.milky} !important`,
      borderRight: `1px solid ${colors.milky} !important`,
      borderLeft: `1px solid ${colors.milky} !important`,
      textAlign: "center",
      "& > div": {
        margin: [[0, "auto"]],
      },
    },
    "& img": {
      maxHeight: 40,
      maxWidth: 60,
      marginBottom: 0,
    },
    "& .price p": {
      color: colors.black,
      fontSize: 16,
      fontWeight: 600,
    },
    "& .stockStatus": {
      color: colors.black,
      fontSize: 16,
      fontWeight: 500,
    },
    boxShadow: "none !important",
  },
  productName: {
    maxWidth: 250,
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  deleteIcon: {
    color: colors.green,
    cursor: "pointer",
  },
  addToCartBox: {
    width: "auto",
  },
});

export { tableStyles };
