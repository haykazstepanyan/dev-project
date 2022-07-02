import PropTypes from "prop-types";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "../button";
import { tableStyles } from "./styles";

function Table({ type, tableData, deleteProduct }) {
  const classes = tableStyles();

  return (
    <TableContainer component={Paper} className={classes.tableStyle}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Delete</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Stock Status</TableCell>
            {type === "wishlist" ? (
              <TableCell>Add to cart</TableCell>
            ) : (
              <>
                <TableCell>Quantity</TableCell>
                <TableCell>Total</TableCell>
              </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData &&
            tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                  height: "122px",
                }}
              >
                <TableCell>
                  <ClearIcon
                    onClick={(event) => deleteProduct(event, row.productId)}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  <img
                    src="https://images.unsplash.com/photo-1514826786317-59744fe2a548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt="product"
                  />
                </TableCell>
                <TableCell>
                  {row.Product?.name}
                  {row.productId}
                </TableCell>
                <TableCell className="price">
                  <p>£{row.Product?.price}</p>
                </TableCell>
                <TableCell className="stockStatus">In Stock</TableCell>
                {type === "wishlist" ? (
                  <TableCell>
                    <Button
                      type="primary"
                      onClick={() => deleteProduct(row.productId)}
                      disableRipple
                    >
                      Add to cart
                    </Button>
                  </TableCell>
                ) : (
                  <>
                    <TableCell className="qty-input">
                      <label htmlFor="quantity">
                        Quantity
                        <input id="quantity" type="number" />
                      </label>
                    </TableCell>
                    <TableCell className="price">
                      <p>£150</p>
                      {/* {row.total} */}
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

Table.propTypes = {
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
      total: PropTypes.number,
      stockStatus: PropTypes.string,
    }),
  ).isRequired,
  type: PropTypes.string,
  deleteProduct: PropTypes.func,
};

export default Table;
