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

function SimpleDialog({ onClose, open, orderId }) {
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
      <DialogTitle>Products in Order</DialogTitle>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 350, border: "1px solid black" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              {["Image", "Name", "Price"].map((title) => (
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
            {products &&
              products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ border: "1px solid black" }}
                    align="center"
                  >
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.productImg}
                        alt=""
                        style={{ maxWidth: 50 }}
                      />
                    </Link>
                  </TableCell>
                  <TableCell align="center" sx={{ border: "1px solid black" }}>
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
                  <TableCell align="center" sx={{ border: "1px solid black" }}>
                    {Math.trunc(product.price * rate)}
                    {currency}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* {products.map((product) => {
          return (
            <div
              key={product.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <ImageListItem>
                <img
                  src={product.productImg}
                  alt="text"
                  style={{ maxWidth: 60 }}
                />
              </ImageListItem>
              <ListItemText>{product.name}</ListItemText>
              <ListItemText>{product.price}</ListItemText>
            </div> */}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  // products: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
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
