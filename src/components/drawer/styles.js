import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const drawerStyles = createUseStyles({
  headerDrawer: {
    position: "relative",
    "& .MuiPaper-root ": {
      padding: [[50, 10, 15]],
      width: 270,
      height: "100vh",
      overflow: "scroll",
    },
  },
  icons: {
    cursor: "pointer",
    "&:hover": {
      color: colors.success,
    },
  },
  outline: {
    padding: 4,
    border: `1px solid ${colors.black}`,
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    color: colors.black,
    border: `1px solid ${colors.milky}`,
    borderRadius: "50%",
    cursor: "pointer",
  },
  "@media screen and (max-width: 900px)": {
    icons: {
      marginRight: 8,
    },
  },
});

export default drawerStyles;
