import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import MuiPagination from "@mui/material/Pagination";

const useStyles = createUseStyles({
  paginationStyle: {
    display: "flex",
    justifyContent: "center",
    margin: 20,
  },
});

function Pagination({ count, onChange }) {
  console.log(count, "counttttttttttttttttt");
  const classes = useStyles();
  return (
    <MuiPagination
      className={classes.paginationStyle}
      count={count}
      onChange={onChange}
      variant="outlined"
      shape="rounded"
    />
  );
}

Pagination.propTypes = {
  count: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;
