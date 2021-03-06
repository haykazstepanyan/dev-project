import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
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
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "../button";
import AdminProductsModal from "../adminProductsModal/AdminProductsModal";
import { adminTableStyles } from "../styles/styles";
import useLazyFetch from "../../hooks/useLazyFetch";
import { showSnackbar } from "../../redux/app/appSlice";

function AdminProductsTable({
  tableData,
  selectBrandData,
  selectCategoryData,
  setEditProductData,
  setDeleteProductData,
  disabled,
}) {
  const [modalData, setModalData] = useState([]);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const dispatch = useDispatch();

  const { error: editProductError, lazyRefetch: editProduct } = useLazyFetch();

  const { error: deleteProductError, lazyRefetch: deleteProduct } =
    useLazyFetch();

  const filterById = (id) => {
    const rowData = tableData.filter((elem) => elem.id === id);
    setModalData(rowData);
  };

  const handleOpen = (id) => {
    filterById(id);
    setOpen(true);
  };
  const handleOpenDelete = (id) => {
    filterById(id);
    setOpenDelete(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  useEffect(() => {
    if (editProductError || deleteProductError) {
      dispatch(
        showSnackbar({
          snackbarType: "error",
          snackbarMessage: "Oops! Something went wrong!",
        }),
      );
    }
  }, [editProductError, dispatch, deleteProductError]);

  const editData = (value) => {
    const { id } = value;
    delete value.id;

    editProduct(
      `/products/product/${id}`,
      {
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
        },
      },
      "PATCH",
    ).then((e) => {
      if (e) {
        setEditProductData(e);
        handleClose();
      }
    });
  };
  const deleteData = (value) => {
    deleteProduct(
      `/products/product/${value}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
      "DELETE",
    ).then((e) => {
      if (e) {
        setDeleteProductData(e);
        handleCloseDelete();
      }
    });
  };

  const classes = adminTableStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <MuiTable sx={{ minWidth: 650 }} className={classes.tableStyle}>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Discount</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Brand</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">
                <SettingsIcon className="settingsIcon" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">
                  <img
                    src={row.productImg}
                    alt="product-img"
                    style={{
                      width: 70,
                      maxHeight: 60,
                      objectFit: "contain",
                    }}
                  />
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.discount}</TableCell>
                <TableCell align="right">
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "200px",
                      float: "right",
                    }}
                  >
                    {row.description}
                  </p>
                </TableCell>
                <TableCell align="right">{row?.brand?.name}</TableCell>
                <TableCell align="right">{row?.category?.name}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleOpen(row.id)}
                    style={{ backgroundColor: "transparent" }}
                    disabled={disabled}
                  >
                    <EditIcon className="editIcon" />
                  </Button>
                  <Button
                    onClick={() => handleOpenDelete(row.id)}
                    style={{ backgroundColor: "transparent" }}
                    disabled={disabled}
                  >
                    <DeleteIcon className="deleteIcon" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
      {open ? (
        <AdminProductsModal
          type="edit"
          onClose={handleClose}
          open={open}
          modalData={modalData}
          selectCategoryData={selectCategoryData}
          selectBrandData={selectBrandData}
          onSubmit={(value) => editData(value)}
        />
      ) : (
        ""
      )}

      {openDelete ? (
        <AdminProductsModal
          type="delete"
          onClose={handleCloseDelete}
          open={openDelete}
          modalData={modalData}
          selectCategoryData={selectCategoryData}
          selectBrandData={selectBrandData}
          onSubmit={(value) => deleteData(value)}
        />
      ) : (
        ""
      )}
    </>
  );
}

AdminProductsTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
  selectBrandData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
  selectCategoryData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
  setEditProductData: PropTypes.func,
  setDeleteProductData: PropTypes.func,
  disabled: PropTypes.bool,
};

export default AdminProductsTable;
