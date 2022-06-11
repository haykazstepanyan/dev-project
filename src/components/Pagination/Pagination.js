import React from "react";
import MuiPagination from "@mui/material/Pagination";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  paginationStyle: {
    display: "flex",
    justifyContent: "center",
    margin: 20,
  },
});

const Pagination = ({ count, onChange }) => {
  const classes = useStyles();
  return (
    <>
      <MuiPagination
        className={classes.paginationStyle}
        count={count}
        onChange={onChange}
        variant="outlined"
        shape="rounded"
      />
    </>
  );
};
export default Pagination;
