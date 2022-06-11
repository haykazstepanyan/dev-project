import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const shopSidebarStyles = createUseStyles({
  shopSidebar: {
    marginRight: 16,
  },
  filterBox: {
    marginBottom: 32,
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
      width: 50,
      marginLeft: 15,
    },
  },
  minMaxInputs: {
    "& input": {
      padding: "5px !important",
      textAlign: "center",
      "&::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
      },
    },
  },
});

export { shopSidebarStyles };
