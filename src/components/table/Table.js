import { useState, useEffect } from "react";
import PropTypes from "prop-types";
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

function Table({
  type,
  tableData,
  deleteData,
  changeCount,
  count,
  ides,
  handleAddToCart,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedWishlist, setSelectedWishlist] = useState(null);
  const [selectedCartItem, setSelectedCartItem] = useState(null);
  const [productIdes, setProductIdes] = useState([]);
  const classes = tableStyles();

  useEffect(() => {
    if (ides?.length > 0) {
      setProductIdes(ides);
    }
  }, [ides]);

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
  const deleteWishlist = () => {
    if (type === "wishlist") {
      deleteData(selectedWishlist);
    } else {
      deleteData(selectedCartItem);
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
              tableData.map((row, rowIndex) => (
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
                      <img src={row.product?.productImg} alt="product" />
                    </Link>
                  </TableCell>
                  <TableCell>{row.product?.name}</TableCell>
                  <TableCell className="price">
                    <p>
                      $
                      {Number(row.product?.price) -
                        (Number(row.product?.price) *
                          Number(row.product?.discount)) /
                          100}
                    </p>
                  </TableCell>
                  {type === "wishlist" ? (
                    <TableCell>
                      {/* <div className={classes.cartContainer}
                            <button
                              className={classes.desBtn}
                              type="button"
                              onClick={() => handleChangeCount("dec")}
                            >
                              -
                            </button>
                            <input
                              className={classes.cartInput}
                              type="text"
                              value={count}
                              onChange={(e) => inputOnchange(e.target.value)}
                            />
                            <button
                              className={classes.incBtn}
                              type="button"
                              onClick={() => handleChangeCount("inc")}
                            >
                              +
                            </button>
                          
                      </div> */}
                      {productIdes.length > 0 &&
                      productIdes.some(
                        (item) => item.productId === row?.productId,
                      ) ? (
                        "Already in cart"
                      ) : (
                        <Button
                          type="primary"
                          onClick={() =>
                            handleAddToCart(row?.productId, rowIndex)
                          }
                          disableRipple
                        >
                          Add to cart
                        </Button>
                      )}
                    </TableCell>
                  ) : (
                    <>
                      <TableCell className="stockStatus">In Stock</TableCell>
                      <TableCell className="qty-input">
                        <label htmlFor="quantity">
                          Quantity
                          <input
                            id="quantity"
                            type="number"
                            // defaultValue={1}
                            value={count[rowIndex]?.quantity || row.count}
                            onChange={(e) =>
                              changeCount(e.target.value, row.id, rowIndex)
                            }
                          />
                        </label>
                      </TableCell>
                      <TableCell className="price">
                        {(
                          (Number(row.product?.price) -
                            (Number(row.product?.price) *
                              Number(row.product?.discount)) /
                              100) *
                          Number(row?.count)
                        ).toFixed(2)}
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
  handleAddToCart: PropTypes.func,
  changeCount: PropTypes.func,
  count: PropTypes.arrayOf([
    PropTypes.shape({
      cardId: PropTypes.number,
      quantity: PropTypes.number,
    }),
  ]),
  productIdes: PropTypes.arrayOf([
    PropTypes.shape({
      productId: PropTypes.number,
    }),
  ]),
};

export default Table;
