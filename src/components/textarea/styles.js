import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const globalTextAreaStyles = createUseStyles({
  w100: {
    width: "100%",
  },
  textareaLabelStyle: {
    position: "relative",
    transform: "none",
  },
  textareaStyle: {
    padding: 10,
    boxSizing: "border-box",
    color: "#1c171e",
    marginTop: 5,
    border: `1px solid ${colors.milky} !important`,
    maxHeight: 45,
    height: 45,
    background: "#ffffff",
    textIndent: 10,
    marginBottom: 20,
    minWidth: "100%",
    maxWidth: "100%",
    minHeight: 100,
    fontSize: 14,
    fontFamily: "'Rubik', sans-serif",
    "&:focus-visible": {
      // border: `1px solid ${colors.milky} !important`,
      outline: "none",
    },
    "&::placeholder": {
      color: "#c3c3c3",
    },
  },
});

export { globalTextAreaStyles };
