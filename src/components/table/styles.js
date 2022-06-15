import { createUseStyles } from "react-jss";

const tableStyles = createUseStyles({
  tableStyle: {
    "& .MuiTableCell-head": {
      textTransform: "capitalize",
      borderBottom: "3px solid #79a206",
      borderRight: "1px solid #e1e1e1",
      fontSize: 16,
      fontWeight: 600,
      padding: 10,
      textAlign: "center",
      backgroundColor: "#e1e1e1",
    },
    "& .MuiTableCell-body": {
      borderBottom: "1px solid #e1e1e1 !important",
      borderRight: "1px solid #e1e1e1 !important",
      borderLeft: "1px solid #e1e1e1 !important",
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
      border: "1px solid #e1e1e1",
    },
    "& .qty-input input:focus": {
      outline: "none",
    },
    "& .qty-input label": {
      fontWeight: "600",
      marginRight: "5px",
    },
    "& .price p": {
      color: "#222222",
      fontSize: 16,
      fontWeight: 600,
    },
    "& .stockStatus": {
      color: "#222222",
      fontSize: 16,
      fontWeight: 500,
    },
    boxShadow: "none !important",
  },
});

export { tableStyles };
