import { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Button from "../button";
import { tableStyles } from "./styles";
import { currencySymbols } from "../../constants/constants";

function Table({ type, tableData, deleteData }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedWishlist, setSelectedWishlist] = useState(null);
  const classes = tableStyles();

  const selectedCurrency = useSelector((state) => state.app.currency);
  const ratesData = JSON.parse(localStorage.getItem("rates"));
  const rates = ratesData?.currencyRates;

  const countByCurrencyRate = (price) => {
    const convertedPrice = price * (rates?.[selectedCurrency] || 1);
    if (selectedCurrency === "AMD" || selectedCurrency === "RUB") {
      return Math.trunc(convertedPrice);
    }
    return parseFloat(convertedPrice.toFixed(2));
  };

  const convertedSymbol = currencySymbols[selectedCurrency];

  const onModalClose = () => {
    setOpenModal(false);
    setSelectedWishlist(null);
  };
  const onModalOpen = (id) => {
    setOpenModal(true);
    setSelectedWishlist(id);
  };
  const deleteWishlist = () => {
    deleteData(selectedWishlist);
    onModalClose();
  };

  const deleteModal = (
    <Dialog
      open={openModal}
      onClose={onModalClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Are you sure you want to remove from wishlist?
      </DialogTitle>
      <DialogActions>
        <Button purpose="modalCancel" onClick={onModalClose} disableRipple>
          Cancel
        </Button>
        <Button color="primary" onClick={deleteWishlist} disableRipple>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <>
      <TableContainer component={Paper} className={classes.tableStyle}>
        <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Delete</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              {type === "wishlist" ? (
                <TableCell>Add to cart</TableCell>
              ) : (
                <>
                  <TableCell>Stock Status</TableCell>
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
                    <DeleteOutlineOutlinedIcon
                      className={classes.deleteIcon}
                      onClick={() => onModalOpen(row.id)}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Link to={`/product/${row.productId}`}>
                      <img src={row.product.productImg} alt="product" />
                    </Link>
                  </TableCell>
                  <TableCell>{row.product.name}</TableCell>
                  <TableCell className="price">
                    <p>
                      {convertedSymbol}
                      {countByCurrencyRate(row.product.price)}
                    </p>
                  </TableCell>
                  {type === "wishlist" ? (
                    <TableCell>
                      <Button
                        type="primary"
                        onClick={() => deleteData(row.productId)}
                        disableRipple
                      >
                        Add to cart
                      </Button>
                    </TableCell>
                  ) : (
                    <>
                      <TableCell className="stockStatus">In Stock</TableCell>
                      <TableCell className="qty-input">
                        <label htmlFor="quantity">
                          Quantity
                          <input id="quantity" type="number" />
                        </label>
                      </TableCell>
                      <TableCell className="price">
                        <p>$150</p>
                        {/* {row.total} */}
                      </TableCell>
                    </>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
      {deleteModal}
    </>
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
  deleteData: PropTypes.func,
};

export default Table;
