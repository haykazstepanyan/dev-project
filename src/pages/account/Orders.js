// import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  // List,
  // ListItemText,
  // Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  TABLE_TITLES,
  // colors
} from "../../constants/constants";
import { orderStyles } from "./styles";
import { fetchData } from "../../helpers/helpers";
import ModalOpener from "../../components/modalOpener/ModalOpener";

function Orders() {
  const [orders, setOrders] = useState();
  const classes = orderStyles();

  useEffect(() => {
    (async () => {
      setOrders(await (await fetchData("orders")).data.data);
    })();
  }, []);

  return (
    <div>
      <div>
        <h3 className={classes.orderTitle}>Orders</h3>
        <TableContainer component={Paper} className={classes.orderTableStyle}>
          <Table
            sx={{
              minWidth: 650,
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow className={classes.rowTitle}>
                <TableCell align="center">Order ID</TableCell>
                {TABLE_TITLES.map((title) => (
                  <TableCell align="center" key={title}>
                    {title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders &&
                orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell scope="row" align="center">
                      {order.id}
                    </TableCell>
                    <TableCell align="center">
                      {new Date(order.createdAt).toLocaleString()}
                    </TableCell>
                    <TableCell align="center">
                      {order.isDelivered ? "Delivered" : "On Road"}
                    </TableCell>
                    <TableCell align="center">
                      {order.amount / 100 + order.currency}
                    </TableCell>
                    <TableCell align="center">
                      {/* <List> */}
                      <ModalOpener orderId={order.id} />
                      {/* </List> */}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
export default Orders;
