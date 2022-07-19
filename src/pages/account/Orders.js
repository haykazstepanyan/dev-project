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
import { useEffect, useState, useMemo } from "react";
import { io } from "socket.io-client";
import { TABLE_TITLES, BASE_URL } from "../../constants/constants";
import { orderStyles } from "./styles";
import { fetchData } from "../../helpers/helpers";
import ModalOpener from "../../components/modalOpener/ModalOpener";

function Orders() {
  const [orders, setOrders] = useState();
  const classes = orderStyles();
  const socket = useMemo(() => io(BASE_URL), []);

  useEffect(() => {
    (async () => {
      setOrders(await (await fetchData("orders")).data.data);
    })();
  }, []);

  useEffect(() => {
    socket.on("delivered", (data) => {
      if (data.action === "isDelivered") {
        (async () => {
          setOrders(await (await fetchData("orders")).data.data);
        })();
      }
    });
  }, [socket]);

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
