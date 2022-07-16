import PropTypes from "prop-types";
import MuiPagination from "@mui/material/Pagination";
import paginationStyles from "./styles";

function Pagination({ count, page, onChange }) {
  const classes = paginationStyles();

  return (
    <MuiPagination
      className={classes.paginationStyle}
      count={count}
      page={page}
      onChange={onChange}
      shape="rounded"
    />
  );
}

Pagination.propTypes = {
  count: PropTypes.number,
  page: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;
