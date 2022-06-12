import React from "react";
import {NavLink} from "react-router-dom"
import {Table, TableBody, TableCell, TableContainer, TableHead,TableRow,Paper } from "@mui/material";
import { TABLE_TITLES } from "../../constants/constants";
import { orderStyles } from "./styles";

function createData(order, date, status, total, action) {
  return { order, date, status, total, action };
}

const rows = [
  createData(1, "May 10 2018", "Completed", "$25.00 For 1 Item", "View"),
  createData(2, "May 10 2018", "Completed", "$25.00 For 1 Item", "View"),
];

const Orders = (props) => {
  const classes = orderStyles();
  return (
    <>
      <h3 className={classes.orderTitle}>Orders</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.rowTitle}>
              <TableCell>Order</TableCell>
              {TABLE_TITLES.map((title) => {
                return <TableCell align="right">{title}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.order}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.order}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
                <TableCell className={classes.greenText} align="right ">
                  <NavLink to="cart"> {row.action}</NavLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default Orders;
