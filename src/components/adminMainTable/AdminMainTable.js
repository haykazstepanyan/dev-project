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
import { useDispatch } from "react-redux";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "../button";
import AdminModal from "../adminModal/AdminModal";
import { adminTableStyles } from "./styles";
import useLazyFetch from "../../hooks/useLazyFetch";
import { showSnackbar } from "../../redux/app/appSlice";

function AdminMainTable({
  tableData,
  type,
  setEditBrandData,
  setDeleteBrandData,
  setEditCategoryData,
  setDeleteCategoryData,
}) {
  const [modalData, setModalData] = useState([]);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const dispatch = useDispatch();

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

  const { error: editBrandError, lazyRefetch: editBrand } = useLazyFetch();
  const { error: deleteBrandError, lazyRefetch: deleteBrand } = useLazyFetch();
  const { error: editCategoryError, lazyRefetch: editCategory } =
    useLazyFetch();

  const { error: deleteCategoryError, lazyRefetch: deleteCategory } =
    useLazyFetch();

  useEffect(() => {
    if (editBrandError || deleteBrandError) {
      dispatch(
        showSnackbar({
          snackbarType: "error",
          snackbarMessage: "Oops! Something went wrong!",
        }),
      );
    }
  }, [editBrandError, deleteBrandError, dispatch]);

  useEffect(() => {
    if (editCategoryError || deleteCategoryError) {
      dispatch(
        showSnackbar({
          snackbarType: "error",
          snackbarMessage: "Oops! Something went wrong!",
        }),
      );
    }
  }, [editCategoryError, deleteCategoryError, dispatch]);

  const editData = (value) => {
    const { id, name } = value;
    if (type === "brand") {
      editBrand(
        `/brands/brand/${id}`,
        {
          body: JSON.stringify({ name }),
          headers: {
            "Content-Type": "application/json",
          },
        },
        "PATCH",
      ).then((e) => {
        if (e) {
          setEditBrandData(e);
          handleClose();
        }
      });
    } else {
      editCategory(
        `/categories/category/${id}`,
        {
          body: JSON.stringify({ name }),
          headers: {
            "Content-Type": "application/json",
          },
        },
        "PATCH",
      ).then((e) => {
        if (e) {
          setEditCategoryData(e);
          handleClose();
        }
      });
    }
  };
  const deleteData = (value) => {
    if (Number.isInteger(value)) {
      if (type === "brand") {
        deleteBrand(
          `/brands/brand/${value}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
          "DELETE",
        ).then((e) => {
          setDeleteBrandData(e);

          dispatch(
            showSnackbar({
              snackbarType: "success",
              snackbarMessage: "Brand is successfully deleted!",
            }),
          );

          handleCloseDelete();
        });
      } else {
        deleteCategory(
          `/categories/category/${value}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
          "DELETE",
        ).then((e) => {
          setDeleteCategoryData(e);

          dispatch(
            showSnackbar({
              snackbarType: "success",
              snackbarMessage: "Category is successfully deleted!",
            }),
          );

          handleCloseDelete();
        });
      }
    }
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
              <TableCell align="right">Created At</TableCell>
              <TableCell align="right">Updated At</TableCell>
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
                <TableCell align="right">{row.createdAt}</TableCell>
                <TableCell align="right">{row.updatedAt}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleOpen(row.id)}
                    style={{ backgroundColor: "transparent" }}
                  >
                    <EditIcon className="editIcon" />
                  </Button>
                  <Button
                    onClick={() => handleOpenDelete(row.id)}
                    style={{ backgroundColor: "transparent" }}
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
        <AdminModal
          type="edit"
          onClose={() => handleClose()}
          open={open}
          modalData={modalData}
          onSubmit={(value) => editData(value)}
        />
      ) : (
        ""
      )}

      {openDelete ? (
        <AdminModal
          type="delete"
          onClose={() => handleCloseDelete()}
          open={openDelete}
          modalData={modalData}
          onSubmit={(value) => deleteData(value)}
        />
      ) : (
        ""
      )}
    </>
  );
}

AdminMainTable.propTypes = {
  type: PropTypes.string,
  tableData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
  setEditBrandData: PropTypes.func,
  setDeleteBrandData: PropTypes.func,
  setEditCategoryData: PropTypes.func,
  setDeleteCategoryData: PropTypes.func,
};

export default AdminMainTable;
