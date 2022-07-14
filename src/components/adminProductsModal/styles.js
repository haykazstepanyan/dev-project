import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const adminModalStyles = createUseStyles({
  boxStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 600,
    height: "max-content",
    maxHeight: "90vh",
    overflow: "auto",
    borderRadius: 10,
    backgroundColor: `${colors.white}`,
    boxShadow: 24,
    padding: 30,
    boxSizing: "border-box",
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent",
      opacity: 0,
      visibility: "hidden",
    },
    "&::-webkit-scrollbar": {
      width: 10,
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  },
  textRight: {
    textAlign: "right",
  },
  deleteTextStyle: {
    color: "#2d3351",
    marginBottom: 20,
  },
  selectStyle: {
    width: "100%",
    border: `1px solid ${colors.milky}`,
    height: 40,
    "&:focus-visible": {
      outline: "none",
    },
  },
  mb10: {
    marginBottom: 10,
  },
  labelStyle: {
    color: "#717482",
    fontSize: 14,
    marginBottom: 5,
  },
});

export { adminModalStyles };
