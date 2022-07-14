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
    "& button": {
      padding: 0,
      fontFamily: '"Rubik", sans-serif',
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: 0,
    },
  },
});

const clickableDropdownStyles = createUseStyles({
  dropdownMenu: ({ topDistance = 0 }) => ({
    "& .MuiPaper-root": {
      marginTop: topDistance,
      minWidth: 200,
      "&::-webkit-scrollbar": {
        width: 7,
      },

      /* Track */
      "&::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },

      /* Handle */
      "&::-webkit-scrollbar-thumb": {
        background: "rgb(211 210 210)",
      },

      /* Handle on hover */
      "&::-webkit-scrollbar-thumb:hover": {
        background: "#555",
      },
    },
  }),
  dropdownMenuItems: {
    "& a": {
      width: "100%",
    },
  },
});

export { hoverableDropdownStyles, clickableDropdownStyles };
