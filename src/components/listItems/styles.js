import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const listStyles = createUseStyles({
  list: {
    width: "100%",
    maxHeight: 180,
    overflowY: "auto",
    marginTop: 12,
    textTransform: "capitalize",
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
    fontSize: 14,
    cursor: "pointer",
    paddingLeft: 18,
    marginTop: 12,
    "&:hover": {
      color: colors.green,
    },
  },
});

export { listStyles };
