import { useState } from "react";
// import { FormControl, Select, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "../button";
import Input from "../input/Input";
import Textarea from "../textarea/Textarea";
import { adminModalStyles } from "./styles";

function AdminProductsModal({
  modalData,
  open,
  onClose,
  type,
  onSubmit,
  selectBrandData,
  selectCategoryData,
}) {
  const data = type === "add" ? "" : modalData[0];
  const [inputValue, setInputValue] = useState(type === "add" ? "" : data.name);
  const [description, setDescription] = useState(
    type === "add" ? "" : data.description,
  );
  const [price, setPrice] = useState(type === "add" ? "" : data.price);
  const [discount, setDiscount] = useState(type === "add" ? "" : data.discount);
  const [brandId, setBrandId] = useState(type === "add" ? 0 : data.brandId);
  const [categoryId, setCategoryId] = useState(
    type === "add" ? 0 : data.categoryId,
  );

  const handleBrandId = (e) => {
    // console.log(e.target.value);
    setBrandId(+e.target.value);
  };
  const handleCategoryId = (e) => {
    // console.log(e.target.value);
    setCategoryId(+e.target.value);
  };

  const handleValue = (e) => {
    setInputValue(e.target.value);
  };
  const handlePrice = (e) => {
    if (e.target.value === "") {
      setPrice("");
    } else {
      setPrice(+e.target.value);
    }
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleDiscount = (e) => {
    if (e.target.value === "") {
      setDiscount("");
    } else {
      setDiscount(+e.target.value);
    }
  };
  const editData = () => {
    const brandData = {
      id: data.id,
      name: inputValue,
      description,
      price,
      discount,
      brandId,
      categoryId,
    };
    onSubmit(brandData);
  };
  const deleteData = () => {
    onSubmit(data.id);
  };
  const addData = () => {
    const brandData = {
      name: inputValue,
      description,
      price,
      discount,
      brandId,
      categoryId,
    };
    onSubmit(brandData);
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
        {type === "edit" || type === "add" ? (
          <>
            <h2 className={classes.deleteTextStyle}>Edit</h2>
            <div className={classes.mb10}>
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
            </div>
            <div className={classes.mb10}>
              <Input
                type="number"
                placeholder="Price"
                size="large"
                borders="square"
                state="noFocus"
                htmlFor="subject"
                value={price}
                onChange={handlePrice}
              />
            </div>
            <div className={classes.mb10}>
              <Input
                type="number"
                placeholder="Discount"
                size="large"
                borders="square"
                state="noFocus"
                htmlFor="subject"
                value={discount}
                onChange={handleDiscount}
              />
            </div>
            <div className={classes.mb10}>
              <Textarea
                value={description}
                id="description"
                placeholder="Description"
                htmlFor="description"
                type="standard"
                onChange={handleDescription}
              />
            </div>
            <div className={classes.mb10}>
              <select
                className={classes.selectStyle}
                value={brandId}
                onChange={handleBrandId}
              >
                {selectBrandData.map((elem, index) => (
                  <option key={elem} value={index}>
                    {elem}
                  </option>
                ))}
              </select>
            </div>
            <div className={classes.mb10}>
              <select
                className={classes.selectStyle}
                value={categoryId}
                onChange={handleCategoryId}
              >
                {selectCategoryData.map((elem, index) => (
                  <option key={elem} value={index}>
                    {elem}
                  </option>
                ))}
              </select>
            </div>
            {type === "edit" ? (
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
            ) : (
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
            )}
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

AdminProductsModal.propTypes = {
  modalData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  open: PropTypes.bool,
  onClose: PropTypes.func,
  selectBrandData: PropTypes.arrayOf([PropTypes.string]),
  selectCategoryData: PropTypes.arrayOf([PropTypes.string]),
  type: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default AdminProductsModal;
