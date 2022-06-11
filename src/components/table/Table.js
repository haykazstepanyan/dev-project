import React from "react";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "../button";
import { tableStyles } from "./style";

const Table = (props) => {
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
            {props.type === "wishlist" ? (
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
          {props.tableData.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
                height: "122px",
              }}
            >
              <TableCell>
                <ClearIcon />
              </TableCell>
              <TableCell component="th" scope="row">
                <img src={row.image} alt="product" />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell className="price">
                <p>£{row.price}</p>
              </TableCell>
              <TableCell className="stockStatus">{row.stockStatus}</TableCell>
              {props.type === "wishlist" ? (
                <TableCell>
                  <Button
                    type="primary"
                    onClick={() => props.deleteProduct(row.productId)}
                    disableRipple
                  >
                    Add to cart
                  </Button>
                </TableCell>
              ) : (
                <>
                  <TableCell className="qty-input">
                    <label>Quantity</label>
                    <input type="number" />
                  </TableCell>
                  <TableCell className="price">
                    <p>£{row.total}</p>
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
