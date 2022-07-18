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
import AddToCart from "../addToCart";
import { countByCurrencyRate } from "../../helpers/helpers";
import defaultImg from "../../assets/images/default.png";

function Table({ type, tableData, deleteCart, deleteWishlist, dataRefetch }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedWishlist, setSelectedWishlist] = useState(null);
  const [selectedCartItem, setSelectedCartItem] = useState(null);
  const [imgSrc, setImgSrc] = useState(defaultImg);
  const classes = tableStyles();

  const selectedCurrency = useSelector((state) => state.app.currency);
  const convertedSymbol = currencySymbols[selectedCurrency];

  const onModalClose = () => {
    setOpenModal(false);
    if (type === "wishlist") {
      setSelectedWishlist(null);
    } else {
      setSelectedCartItem(null);
    }
  };

  const onModalOpen = (id) => {
    setOpenModal(true);
    if (type === "wishlist") {
      setSelectedWishlist(id);
    } else {
      setSelectedCartItem(id);
    }
  };
  const deleteItem = () => {
    if (type === "wishlist") {
      deleteWishlist(selectedWishlist);
    } else {
      deleteCart(selectedCartItem);
    }
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
        Are you sure you want to remove from {type} ?
      </DialogTitle>
      <DialogActions>
        <Button purpose="modalCancel" onClick={onModalClose} disableRipple>
          Cancel
        </Button>
        <Button color="primary" onClick={deleteItem} disableRipple>
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
              <TableCell>Image</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              {type === "wishlist" ? (
                <TableCell>Add to cart</TableCell>
              ) : (
                <>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Total</TableCell>
                </>
              )}
              <TableCell>Delete</TableCell>
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
                  <TableCell component="th" scope="row">
                    <Link to={`/product/${row.productId}`}>
                      <img
                        onLoad={() => setImgSrc(row.product.productImg)}
                        src={imgSrc}
                        alt="product"
                      />
                    </Link>
                  </TableCell>
                  <TableCell>
                    <p className={classes.productName}>{row.product.name}</p>
                  </TableCell>
                  <TableCell className="price">
                    <p>
                      {convertedSymbol}
                      {countByCurrencyRate(
                        selectedCurrency,
                        row.product.price,
                        row.product.discount,
                      )}
                    </p>
                  </TableCell>

                  <TableCell className={classes.addToCartBox}>
                    {type === "wishlist" ? (
                      <AddToCart
                        from="wishlist"
                        cart={[
                          {
                            id: row.product.cart[0]?.id,
                            count: row.product.cart[0]?.count,
                          },
                        ]}
                        isAuth
                        btnWidth="180px"
                        deleteCart={deleteCart}
                        productId={row.productId}
                      />
                    ) : (
                      <AddToCart
                        cart={[{ id: row.id, count: row.count }]}
                        isAuth
                        productId={row.productId}
                        btnWidth="180px"
                        deleteCart={deleteCart}
                        dataRefetch={dataRefetch}
                      />
                    )}
                  </TableCell>
                  {type === "cart" ? (
                    <TableCell>
                      {(
                        countByCurrencyRate(
                          selectedCurrency,
                          row.product.price,
                          row.product.discount,
                        ) * row.count
                      ).toFixed(2)}
                    </TableCell>
                  ) : null}
                  <TableCell>
                    <DeleteOutlineOutlinedIcon
                      className={classes.deleteIcon}
                      onClick={() => onModalOpen(row.id)}
                    />
                  </TableCell>
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
  deleteCart: PropTypes.func,
  deleteWishlist: PropTypes.func,
  dataRefetch: PropTypes.func,
};

export default Table;
