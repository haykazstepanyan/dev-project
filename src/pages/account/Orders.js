import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import { TABLE_TITLES } from "../../constants/constants";
import { orderStyles } from "./styles";
import { fetchData } from "../../helpers/helpers";

function Orders() {
  const [orders, setOrders] = useState();
  const classes = orderStyles();

  useEffect(() => {
    (async () => {
      setOrders(await (await fetchData("orders")).data.data);
    })();
  }, []);

  return (
    <>
      <h3 className={classes.orderTitle}>Orders</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.rowTitle}>
              <TableCell>Order</TableCell>
              {TABLE_TITLES.map((title) => (
                <TableCell align="right" key={title}>
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {orders &&
              orders.map((order) => (
                <TableRow
                  key={order.order}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {order.id}
                  </TableCell>
                  <TableCell align="right">{order.date}</TableCell>
                  <TableCell align="right">
                    {order.isDelivered ? "Delivered" : "On Road"}
                  </TableCell>
                  <TableCell align="right">
                    {order.amount / 100 + order.currency}
                  </TableCell>
                  <TableCell align="right">
                    {order.orderDetails.map(({ product }) => product.name)}
                  </TableCell>
                  <TableCell className={classes.greenText} align="right">
                    <Link to="cart"> {order.action}</Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default Orders;
