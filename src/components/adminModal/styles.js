import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const adminModalStyles = createUseStyles({
  boxStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 30,
    boxSizing: "border-box",
  },
  textRight: {
    textAlign: "right",
  },
  deleteTextStyle: {
    color: "#2d3351",
    marginBottom: 20,
  },
  toggleButtonStyle: {
    "& button.Mui-selected": {
      color: "white",
      backgroundColor: "rgb(190 185 172)",
    },
    "& button.Mui-selected:hover": {
      color: "white",
      backgroundColor: "rgb(190 185 172)",
    },
    "& button:hover": {
      backgroundColor: "white",
      color: "rgba(0, 0, 0, 0.54)",
    },
  },
});

export { adminModalStyles };
