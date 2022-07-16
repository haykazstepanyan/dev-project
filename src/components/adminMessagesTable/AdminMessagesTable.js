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
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "../button";
import AdminModal from "../adminModal/AdminModal";
import { adminTableStyles } from "./styles";
import useLazyFetch from "../../hooks/useLazyFetch";
import { showSnackbar } from "../../redux/app/appSlice";

function AdminMessagesTable({ tableData, pageType, setDeleteContactData }) {
  const [modalData, setModalData] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);
  const dispatch = useDispatch();

  const { error: deleteContactError, lazyRefetch: deleteContact } =
    useLazyFetch();

  const filterById = (id) => {
    const rowData = tableData.filter((elem) => elem.id === id);
    setModalData(rowData);
  };

  const handleOpenDelete = (id) => {
    filterById(id);
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  useEffect(() => {
    if (deleteContactError) {
      dispatch(
        showSnackbar({
          snackbarType: "error",
          snackbarMessage: "Oops! Something went wrong!",
        }),
      );
    }
  }, [deleteContactError, dispatch]);

  const deleteData = (value) => {
    const { id } = value;
    if (Number.isInteger(id)) {
      deleteContact(
        `/contacts/contact/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        "DELETE",
      ).then((e) => {
        setDeleteContactData(e);

        dispatch(
          showSnackbar({
            snackbarType: "success",
            snackbarMessage: "Message is successfully deleted!",
          }),
        );

        handleCloseDelete();
      });
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
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Subject</TableCell>
              <TableCell align="right">Message</TableCell>
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
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.subject}</TableCell>
                <TableCell align="right">{row.message}</TableCell>
                <TableCell align="right">
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

      {openDelete ? (
        <AdminModal
          type="delete"
          pageType={pageType}
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

AdminMessagesTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
  pageType: PropTypes.string,
  setDeleteContactData: PropTypes.func,
};

export default AdminMessagesTable;
