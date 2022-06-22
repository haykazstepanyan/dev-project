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
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import Button from "../button";
import AdminModal from "../adminModal/AdminModal";
import { adminTableStyles } from "./styles";

function AdminMessagesTable({ tableData }) {
  const [modalData, setModalData] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);

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

  const deleteData = (value) => {
    console.log(value);
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
                key={row.name}
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
};

export default AdminMessagesTable;
