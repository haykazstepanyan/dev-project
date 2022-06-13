import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const hoverableDropdownStyles = createUseStyles({
  menuItems: {
    padding: 0,
    margin: [[6, 16]],
    minHeight: "auto",
    "&:hover": {
      background: "transparent",
      color: colors.green,
    },
  },
});

export { hoverableDropdownStyles };
