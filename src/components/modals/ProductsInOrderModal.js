import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { fetchData } from "../../helpers/helpers";
import { colors } from "../../constants/constants";
import { orderStyles } from "../../pages/account/styles";

function SimpleDialog({ onClose, open, orderId }) {
  const classes = orderStyles();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetchData(`orders/${orderId}`).then((data) =>
      setOrder(data.data.data.data),
    );
  }, [orderId]);

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div style={{ padding: 20 }}>
        <DialogTitle>Order Products</DialogTitle>
        <TableContainer component={Paper} className={classes.orderTableStyle}>
          <Table
            sx={{
              minWidth: 350,
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow className={classes.rowTitle}>
                {["Image", "Name", "Price"].map((title) => (
                  <TableCell align="center" key={title}>
                    {title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {order.orderDetails &&
                order.orderDetails.map(({ product }) => (
                  <TableRow key={product.id}>
                    <TableCell scope="row" align="center">
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.productImg}
                          alt=""
                          style={{
                            width: 50,
                            height: 30,
                            objectFit: "contain",
                          }}
                        />
                      </Link>
                    </TableCell>
                    <TableCell align="center">
                      <Link to={`/product/${product.id}`}>
                        <Typography
                          sx={{
                            ":hover": { color: colors.green },
                          }}
                        >
                          {product.name}
                        </Typography>
                      </Link>
                    </TableCell>
                    <TableCell align="center">
                      {order.amount / 100}
                      {order.currency}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  orderId: PropTypes.number,
};

function ProductsInOrderModal({ openModal, setOpenModal, orderId }) {
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      {openModal && (
        <SimpleDialog
          open={openModal}
          onClose={handleClose}
          orderId={orderId}
        />
      )}
    </div>
  );
}

ProductsInOrderModal.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  orderId: PropTypes.number,
};

export default ProductsInOrderModal;
