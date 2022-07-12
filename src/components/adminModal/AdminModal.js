import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Checkbox } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "../button";
import Input from "../input/Input";
import { adminModalStyles } from "./styles";

function AdminModal({ modalData, open, onClose, type, onSubmit }) {
  const data = type === "add" ? "" : modalData[0];
  const [inputValue, setInputValue] = useState(type === "add" ? "" : data.name);
  const [inputValueUser, setInputValueUser] = useState(data.role);
  const [relatedProductsDelete, setRelatedProductsDelete] = useState(false);

  const handleValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleValueUser = (e) => {
    setInputValueUser(e.target.value);
  };
  const editData = (e) => {
    e.preventDefault();
    const brandData = {
      id: data.id,
      name: inputValue,
    };
    onSubmit(brandData);
  };

  const editDataUser = () => {
    const userData = {
      id: data.id,
      role: inputValueUser,
    };
    onSubmit(userData);
  };

  const deleteData = () => {
    const deletedData = {
      relatedProductsDelete,
      id: data.id,
    };
    onSubmit(deletedData);
  };
  const addData = (e) => {
    e.preventDefault();

    onSubmit(inputValue);
  };

  const productsDeleteCheck = (e) => {
    setRelatedProductsDelete(e.target.checked);
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
        {type === "changeRole" ? (
          <>
            <h2 className={classes.deleteTextStyle}>Edit</h2>
            <ToggleButtonGroup
              className={classes.toggleButtonStyle}
              color="primary"
              value={inputValueUser}
              exclusive
              onChange={handleValueUser}
            >
              <ToggleButton value="ADMIN">ADMIN</ToggleButton>
              <ToggleButton value="USER">USER</ToggleButton>
            </ToggleButtonGroup>
            <div className={classes.textRight}>
              <Button
                onClick={() => editDataUser()}
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
        {type === "edit" ? (
          <form onSubmit={(e) => editData(e)}>
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
                type="submit"
                style={{ marginTop: 20 }}
                page="admin"
                disableRipple
              >
                Save
              </Button>
            </div>
          </form>
        ) : (
          ""
        )}
        {type === "add" ? (
          <form onSubmit={(e) => addData(e)}>
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
                type="submit"
                style={{ marginTop: 20 }}
                letter="capitalize"
                page="admin"
                disableRipple
              >
                Save
              </Button>
            </div>
          </form>
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
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onChange={(e) => productsDeleteCheck(e)} />}
                label="Delete all products related to this"
              />
            </FormGroup>
            <div className={classes.textRight}>
              <Button
                onClick={() => onClose()}
                style={{ marginTop: 20, marginRight: 10 }}
                page="admin"
                letter="capitalize"
                disableRipple
              >
                Cancel
              </Button>
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
