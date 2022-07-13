import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const listStyles = createUseStyles({
  list: {
    width: "100%",
    maxHeight: 180,
    overflowY: "auto",
    marginTop: 12,
    textTransform: "capitalize",
    /* width */
    "&::-webkit-scrollbar": {
      width: 10,
    },

    /* Track */
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },

    /* Handle */
    "&::-webkit-scrollbar-thumb": {
      background: "#e0dfdf",
    },

    /* Handle on hover */
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  },
  listItems: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  listCheckbox: {
    padding: 0,
    marginRight: 12,
  },
  moreLess: {
    display: "inline-block",
    fontSize: 13,
    cursor: "pointer",
    paddingLeft: 18,
    marginTop: 12,
    "&:hover": {
      color: colors.green,
    },
  },
});

export { listStyles };
