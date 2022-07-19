import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import { io } from "socket.io-client";
import { TABLE_TITLES, colors, BASE_URL } from "../../constants/constants";
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
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, border: "2px solid black" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow className={classes.rowTitle}>
                <TableCell align="center" sx={{ border: "1px solid black" }}>
                  Order ID
                </TableCell>
                {TABLE_TITLES.map((title) => (
                  <TableCell
                    align="center"
                    key={title}
                    sx={{ border: "1px solid black" }}
                  >
                    {title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders &&
                orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ border: "1px solid black" }}
                      align="center"
                    >
                      {order.id}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: "1px solid black" }}
                    >
                      {new Date(order.createdAt).toLocaleString()}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: "1px solid black" }}
                    >
                      {order.isDelivered ? "Delivered" : "On Road"}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: "1px solid black" }}
                    >
                      {order.amount / 100 + order.currency}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: "1px solid black" }}
                    >
                      <List>
                        {order.orderDetails.map(({ product }) => (
                          <ListItemText
                            key={product.id}
                            sx={{
                              display: "list-item",
                              listStyleType: "disclosure-closed",
                            }}
                          >
                            <Link to={`/product/${product.id}`}>
                              <Typography
                                sx={{
                                  ":hover": { color: colors.green },
                                }}
                              >
                                {product.name}
                              </Typography>
                            </Link>
                          </ListItemText>
                        ))}
                        <ModalOpener orderId={order.id} />
                      </List>
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
