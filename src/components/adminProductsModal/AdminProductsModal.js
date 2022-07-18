import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  // deleteObject,
} from "firebase/storage";
import Typography from "@mui/material/Typography";
import { FormLabel, InputLabel } from "@mui/material";
import Modal from "@mui/material/Modal";
import { v4 } from "uuid";
import { Formik } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import { storage } from "../../firebase/firebase";
import Button from "../button";
import Input from "../input/Input";
import Textarea from "../textarea/Textarea";
import { adminModalStyles } from "./styles";
import validations from "../../pages/admin/products/validations";

const MuiInput = styled("input")({
  display: "none",
});

function AdminProductsModal({
  modalData,
  open,
  onClose,
  type,
  onSubmit,
  selectBrandData,
  selectCategoryData,
}) {
  const { productsValidation } = validations;
  const data = type === "add" ? "" : modalData[0];
  const [imageUpload, setImageUpload] = useState(null);
  const [productImg, setProductImg] = useState(
    type === "edit" ? data.productImg : "",
  );
  const [imageLoader, setImageLoader] = useState(false);
  const uploadFile = (image) => {
    if (image == null) return;
    setImageUpload(image);
    setImageLoader(true);
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      if (productImg !== "") {
        // const pictureRef = ref(storage, productImg);
        // deleteObject(pictureRef)
        //   .then(() => {})
        //   .catch(() => {})
        //   .finally(() => {
        getDownloadURL(snapshot.ref).then((url) => {
          setProductImg(url);
          setImageLoader(false);
          // });
        });
      } else {
        getDownloadURL(snapshot.ref).then((url) => {
          setProductImg(url);
          setImageLoader(false);
        });
      }
    });
  };

  const deleteData = () => {
    onSubmit(data.id);
  };

  const submitProductForm = (value) => {
    if (productImg === "") {
      return;
    }
    value.productImg = productImg;
    value.brandId = +value.brandId;
    value.categoryId = +value.categoryId;

    if (type === "add") {
      onSubmit(value);
    } else {
      value.id = data.id;
      onSubmit(value);
    }
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
      <Box
        style={{ width: type === "add" || type === "edit" ? "600px" : "400px" }}
        className={classes.boxStyle}
      >
        {type === "add" || type === "edit" ? (
          <Formik
            initialValues={{
              name: type === "add" ? "" : data.name,
              price: type === "add" ? "" : data.price,
              discount: type === "add" ? "" : data.discount,
              description: type === "add" ? "" : data.description,
              brandId:
                type === "edit" && data.brandId
                  ? data.brandId
                  : selectBrandData[0].id,
              categoryId:
                type === "edit" && data.categoryId
                  ? data.categoryId
                  : selectCategoryData[0].id,
            }}
            validationSchema={productsValidation}
            onSubmit={(values) => submitProductForm(values)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <h2
                  className={classes.deleteTextStyle}
                  style={{ textTransform: "capitalize" }}
                >
                  {type}
                </h2>
                <div
                  className={`${classes.mb10} ${
                    errors.name &&
                    touched.name &&
                    errors.name &&
                    `${classes.errorInput}`
                  }`}
                >
                  <InputLabel className={classes.labelStyle}>Name</InputLabel>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Name"
                    size="large"
                    borders="square"
                    state="noFocus"
                    htmlFor="subject"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <div style={{ color: "#d22d3d" }}>
                    {errors.name && touched.name && errors.name}
                  </div>
                </div>
                <div
                  className={`${classes.mb10} ${
                    errors.price &&
                    touched.price &&
                    errors.price &&
                    `${classes.errorInput}`
                  }`}
                >
                  <InputLabel className={classes.labelStyle}>Price</InputLabel>
                  <Input
                    name="price"
                    type="number"
                    placeholder="Price"
                    size="large"
                    borders="square"
                    state="noFocus"
                    htmlFor="subject"
                    value={values.price}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <div style={{ color: "#d22d3d" }}>
                    {errors.price && touched.price && errors.price}
                  </div>
                </div>
                <div
                  className={`${classes.mb10} ${
                    errors.discount &&
                    touched.discount &&
                    errors.discount &&
                    `${classes.errorInput}`
                  }`}
                >
                  <InputLabel className={classes.labelStyle}>
                    Discount
                  </InputLabel>
                  <Input
                    name="discount"
                    type="number"
                    placeholder="Discount"
                    size="large"
                    borders="square"
                    state="noFocus"
                    htmlFor="subject"
                    value={values.discount}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <div style={{ color: "#d22d3d" }}>
                    {errors.discount && touched.discount && errors.discount}
                  </div>
                </div>
                <div
                  className={`${classes.mb10} ${
                    errors.description &&
                    touched.description &&
                    errors.description &&
                    `${classes.errorInput}`
                  }`}
                >
                  <InputLabel className={classes.labelStyle}>
                    Description
                  </InputLabel>
                  <Textarea
                    name="description"
                    value={values.description}
                    id="description"
                    placeholder="Description"
                    htmlFor="description"
                    type="standard"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    style={{ marginBottom: 10 }}
                  />
                  <div style={{ color: "#d22d3d" }}>
                    {errors.description &&
                      touched.description &&
                      errors.description}
                  </div>
                </div>
                <div
                  className={`${classes.mb10} ${
                    errors.brandId &&
                    touched.brandId &&
                    errors.brandId &&
                    `${classes.errorInput}`
                  }`}
                >
                  <InputLabel className={classes.labelStyle}>Brands</InputLabel>
                  <select
                    name="brandId"
                    className={classes.selectStyle}
                    value={values.brandId}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  >
                    {selectBrandData.map((elem) => (
                      <option key={elem.id} value={elem.id}>
                        {elem.name}
                      </option>
                    ))}
                  </select>
                  <div style={{ color: "#d22d3d" }}>
                    {errors.brandId && touched.brandId && errors.brandId}
                  </div>
                </div>
                <div
                  className={`${classes.mb10} ${
                    errors.categoryId &&
                    touched.categoryId &&
                    errors.categoryId &&
                    `${classes.errorInput}`
                  }`}
                >
                  <InputLabel className={classes.labelStyle}>
                    Categories
                  </InputLabel>
                  <select
                    name="categoryId"
                    className={classes.selectStyle}
                    value={values.categoryId}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  >
                    {selectCategoryData.map((elem) => (
                      <option key={elem.id} value={elem.id}>
                        {elem.name}
                      </option>
                    ))}
                  </select>
                  <div style={{ color: "#d22d3d" }}>
                    {errors.categoryId &&
                      touched.categoryId &&
                      errors.categoryId}
                  </div>
                </div>
                {productImg === "" ? (
                  <div style={{ marginBottom: 5 }}>Please select an image.</div>
                ) : (
                  ""
                )}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <FormLabel htmlFor="contained-button-file">
                      <MuiInput
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={(event) => {
                          uploadFile(event.target.files[0]);
                        }}
                      />
                      <Button
                        variant="contained"
                        component="span"
                        style={{
                          backgroundColor: "#24695c",
                          textTransform: "capitalize",
                        }}
                      >
                        Upload Image
                      </Button>
                      <div
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          width: "130px",
                        }}
                      >
                        {imageUpload ? imageUpload.name : ""}
                      </div>
                    </FormLabel>
                  </div>
                  <div>
                    {imageLoader ? (
                      <CircularProgress style={{ color: "#717171" }} />
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                {productImg === "" ? (
                  ""
                ) : (
                  <div>
                    <img
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "contain",
                      }}
                      src={productImg}
                      alt="uploaded"
                    />
                  </div>
                )}
                <div className={classes.textRight}>
                  <Button
                    page="admin"
                    letter="capitalize"
                    onClick={onClose}
                    style={{ marginTop: 20, marginRight: 10 }}
                    disableRipple
                  >
                    Cancel
                  </Button>
                  <Button
                    style={{ marginTop: 20 }}
                    page="admin"
                    type="submit"
                    disableRipple
                  >
                    Save
                  </Button>
                </div>
              </form>
            )}
          </Formik>
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
                onClick={onClose}
                style={{ marginTop: 20, marginRight: 10 }}
                page="admin"
                letter="capitalize"
                disableRipple
              >
                Cancel
              </Button>
              <Button
                onClick={deleteData}
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
  selectBrandData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  selectCategoryData: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object]),
  ),
  type: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default AdminProductsModal;
