import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const shopSidebarStyles = createUseStyles({
  shopSidebar: {
    marginRight: 16,
  },
  filterName: {
    textTransform: "uppercase",
    fontSize: 15,
    marginBottom: 20,
    paddingBottom: 10,
    fontWeight: 500,
    borderBottom: `1px solid ${colors.milky}`,
  },
  filterRange: {
    marginLeft: 5,
    width: "-webkit-fill-available",
  },
  filterRangeInputs: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  minMaxValues: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    "& > div": {
      width: 35,
      marginLeft: 15,
    },
    "& .MuiInput-input::after": {
      "&::after": {
        display: "none",
      },
    },
  },
});

export { shopSidebarStyles };
