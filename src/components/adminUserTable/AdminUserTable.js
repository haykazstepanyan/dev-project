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
import { useEffect, useState } from "react";
import Button from "../button";
import AdminModal from "../adminModal/AdminModal";
import { adminTableStyles } from "../styles/styles";
import useLazyFetch from "../../hooks/useLazyFetch";
import { showSnackbar } from "../../redux/app/appSlice";

function AdminUserTable({ tableData, setEditUserData }) {
  const [modalData, setModalData] = useState([]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { error: editUserError, lazyRefetch: editUser } = useLazyFetch();

  useEffect(() => {
    if (editUserError) {
      dispatch(
        showSnackbar({
          snackbarType: "error",
          snackbarMessage: "Oops! Something went wrong!",
        }),
      );
    }
  }, [editUserError, dispatch]);

  const filterById = (id) => {
    const rowData = tableData.filter((elem) => elem.id === id);
    setModalData(rowData);
  };

  const handleOpen = (id) => {
    filterById(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editData = ({ id, role }) => {
    editUser(`/users/user/${id}`, {
      body: JSON.stringify({ role }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    }).then((res) => {
      console.log(res);
      setEditUserData(res.data);
      handleClose();
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
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Role</TableCell>
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
                <TableCell align="right">{row.firstName}</TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.role}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleOpen(row.id)}
                    style={{ backgroundColor: "transparent" }}
                  >
                    <EditIcon className="editIcon" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
      {open ? (
        <AdminModal
          type="changeRole"
          onClose={handleClose}
          open={open}
          modalData={modalData}
          onSubmit={(value) => editData(value)}
        />
      ) : (
        ""
      )}
    </>
  );
}

AdminUserTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
  setEditUserData: PropTypes.func,
};

export default AdminUserTable;
