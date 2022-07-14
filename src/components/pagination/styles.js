import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const paginationStyles = createUseStyles({
  paginationStyle: {
    display: "flex",
    justifyContent: "center",
    margin: [[20, 0, 40]],
    "& .MuiButtonBase-root": {
      background: colors.lightGrey,
      color: colors.black,
      "&:hover": {
        background: colors.green,
        color: colors.white,
      },
    },
    "& .Mui-selected": {
      background: colors.green,
      color: colors.white,
    },
  },
});

export default paginationStyles;
