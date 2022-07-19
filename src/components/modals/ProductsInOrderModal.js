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
  const [products, setProducts] = useState([]);
  const { currency, rate } = {
    currency: localStorage.getItem("currency"),
    rate: JSON.parse(localStorage.getItem("rates")).currencyRates[
      localStorage.getItem("currency")
    ],
  };

  useEffect(() => {
    fetchData(`orders/${orderId}`).then((data) =>
      setProducts(data.data.data.data),
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
              // border: "1px solid black"
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
              {products &&
                products.map((product) => (
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
                      {Math.trunc(product.price * rate)}
                      {currency}
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

export default function ProductsInOrderModal({
  openModal,
  setOpenModal,
  orderId,
}) {
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
