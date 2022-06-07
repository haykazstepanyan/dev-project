import Pagination from "@mui/material/Pagination";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  paginationStyle: {
    display: "flex",
    justifyContent: "center",
    margin: 20,
  },
});

const PaginationBlock = ({ count, onChange }) => {
  const classes = useStyles();

  return (
    <>
      <Pagination
        className={classes.paginationStyle}
        count={count}
        onChange={onChange}
        variant="outlined"
        shape="rounded"
      />
    </>
  );
};
export default PaginationBlock;
