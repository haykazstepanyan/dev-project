import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "../button";
import { tableStyles } from "./styles";
import { setWishlistProducts } from "../../redux/wishlist/wishlistSlice";
import { deleteItemFromWishlist } from "../../redux/wishlist/actions";

function Table({ type, deleteProduct }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userData);
  const wishlistProducts = useSelector(
    (state) => state.wishlist.wishlisProducts,
  );
  const classes = tableStyles();

  useEffect(() => {}, [wishlistProducts]);

  function deleteFromWishlist(event, productId) {
    const data = wishlistProducts.filter((item) => item.id !== productId);
    dispatch(setWishlistProducts(data));
    dispatch(deleteItemFromWishlist({ userId: user.id, productId }));
  }
  return (
    <TableContainer component={Paper} className={classes.tableStyle}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Delete</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Stock Status</TableCell>
            {type === "wishlist" ? (
              <TableCell>Add to cart</TableCell>
            ) : (
              <>
                <TableCell>Quantity</TableCell>
                <TableCell>Total</TableCell>
              </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {wishlistProducts.map((row) => (
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
                <ClearIcon
                  onClick={(event) => deleteFromWishlist(event, row.id)}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <img
                  src="https://www.jquery-az.com/html/images/banana.jpg"
                  alt="product"
                />
              </TableCell>
              <TableCell>
                {row.name}
                {row.id}
              </TableCell>
              <TableCell className="price">
                <p>£{row.price}</p>
              </TableCell>
              <TableCell className="stockStatus">In Stock</TableCell>
              {type === "wishlist" ? (
                <TableCell>
                  <Button
                    type="primary"
                    onClick={() => deleteProduct(row.id)}
                    disableRipple
                  >
                    Add to cart
                  </Button>
                </TableCell>
              ) : (
                <>
                  <TableCell className="qty-input">
                    <label htmlFor="quantity">
                      Quantity
                      <input id="quantity" type="number" />
                    </label>
                  </TableCell>
                  <TableCell className="price">
                    <p>£150</p>
                    {/* {row.total} */}
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

Table.propTypes = {
  type: PropTypes.string,
  deleteProduct: PropTypes.func,
};
// tableData: PropTypes.arrayOf(
//   PropTypes.shape({
//     productId: PropTypes.number,
//     name: PropTypes.string,
//     image: PropTypes.string,
//     price: PropTypes.number,
//     total: PropTypes.number,
//     stockStatus: PropTypes.string,
//   }),
// ).isRequired,
export default Table;
