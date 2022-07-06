import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const tableStyles = createUseStyles({
  tableStyle: {
    "& .MuiTableCell-head": {
      textTransform: "capitalize",
      borderBottom: `3px solid ${colors.green}`,
      borderRight: `1px solid ${colors.milky}`,
      fontSize: 16,
      fontWeight: 600,
      padding: 10,
      textAlign: "center",
      backgroundColor: colors.milky,
    },
    "& .MuiTableCell-body": {
      borderBottom: `1px solid ${colors.milky} !important`,
      borderRight: `1px solid ${colors.milky} !important`,
      borderLeft: `1px solid ${colors.milky} !important`,
      textAlign: "center",
    },
    "& img": {
      width: 100,
      marginBottom: 0,
    },
    "& .qty-input input": {
      width: "60px",
      height: "40px",
      padding: "0 5px 0 10px",
      background: "none",
      border: `1px solid ${colors.milky}`,
    },
    "& .qty-input input:focus": {
      outline: "none",
    },
    "& .qty-input label": {
      fontWeight: "600",
      marginRight: "5px",
    },
    "& .price p": {
      color: colors.black,
      fontSize: 16,
      fontWeight: 600,
    },
    "& .stockStatus": {
      color: colors.black,
      fontSize: 16,
      fontWeight: 500,
    },
    boxShadow: "none !important",
  },
  deleteIcon: {
    color: colors.green,
    cursor: "pointer",
  },
});

export { tableStyles };
