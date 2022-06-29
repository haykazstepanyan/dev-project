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
import { useState } from "react";
import Button from "../button";
import AdminModal from "../adminModal/AdminModal";
import { deleteBrands, updateBrands } from "../../redux/brand/actions";
import { adminTableStyles } from "./styles";
import {
  deleteCategories,
  updateCategories,
} from "../../redux/category/actions";

function AdminMainTable({ tableData, type }) {
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

  const editData = (value) => {
    if (type === "brand") {
      dispatch(updateBrands(value));
    } else {
      dispatch(updateCategories(value));
    }
    handleClose();
  };
  const deleteData = (value) => {
    if (Number.isInteger(value)) {
      if (type === "brand") {
        dispatch(deleteBrands(value));
      } else {
        dispatch(deleteCategories(value));
      }
      handleCloseDelete();
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
};

export default AdminMainTable;
