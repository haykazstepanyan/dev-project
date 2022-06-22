import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "../button";
import Input from "../input/Input";
import { adminModalStyles } from "./styles";

function AdminModal({ modalData, open, onClose, type, onSubmit }) {
  const data = type === "add" ? "" : modalData[0];
  const [inputValue, setInputValue] = useState(type === "add" ? "" : data.name);

  const handleValue = (e) => {
    setInputValue(e.target.value);
  };
  const editData = () => {
    const brandData = {
      id: data.id,
      name: inputValue,
    };
    onSubmit(brandData);
  };
  const deleteData = () => {
    onSubmit(data.id);
  };
  const addData = () => {
    onSubmit(inputValue);
  };

  const classes = adminModalStyles();
  return (
    <Modal
      className={classes.modalStyle}
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.boxStyle}>
        {type === "edit" ? (
          <>
            <h2 className={classes.deleteTextStyle}>Edit</h2>
            <Input
              type="text"
              placeholder="Name"
              size="large"
              borders="square"
              state="noFocus"
              htmlFor="subject"
              value={inputValue}
              onChange={handleValue}
            />
            <div className={classes.textRight}>
              <Button
                onClick={() => editData()}
                style={{ marginTop: 20 }}
                page="admin"
                disableRipple
              >
                Save
              </Button>
            </div>
          </>
        ) : (
          ""
        )}
        {type === "add" ? (
          <>
            <h2 className={classes.deleteTextStyle}>Add</h2>
            <Input
              type="text"
              placeholder="Name"
              size="large"
              borders="square"
              state="noFocus"
              htmlFor="subject"
              value={inputValue}
              onChange={handleValue}
            />
            <div className={classes.textRight}>
              <Button
                onClick={() => addData()}
                style={{ marginTop: 20 }}
                page="admin"
                disableRipple
              >
                Save
              </Button>
            </div>
          </>
        ) : (
          ""
        )}
        {type === "delete" ? (
          <>
            <Typography
              className={classes.deleteTextStyle}
              variant="h6"
              component="h2"
            >
              Are you sure?
            </Typography>
            <div className={classes.textRight}>
              <Button
                onClick={() => deleteData()}
                style={{ marginTop: 20 }}
                page="admin"
                disableRipple
              >
                Yes
              </Button>
            </div>
          </>
        ) : (
          ""
        )}
      </Box>
    </Modal>
  );
}

AdminModal.propTypes = {
  modalData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  open: PropTypes.bool,
  onClose: PropTypes.func,
  type: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default AdminModal;
