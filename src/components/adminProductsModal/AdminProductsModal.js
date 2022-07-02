import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import Typography from "@mui/material/Typography";
import { FormLabel } from "@mui/material";
import Modal from "@mui/material/Modal";
import { v4 } from "uuid";
import { Formik } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux/es/exports";
import { setSnackbar } from "../../redux/app/appSlice";
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
  const dispatch = useDispatch();
  const { productsValidation } = validations;
  const data = type === "add" ? "" : modalData[0];
  const [imageUpload, setImageUpload] = useState(null);
  const [productImg, setProductImg] = useState(
    type === "edit" ? data.productImg : "",
  );
  const [imageLoader, setImageLoader] = useState(false);
  const uploadFile = () => {
    if (imageUpload == null) return;
    setImageLoader(true);
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      if (productImg !== "") {
        const pictureRef = ref(storage, productImg);
        deleteObject(pictureRef)
          .then(() => {
            getDownloadURL(snapshot.ref).then((url) => {
              setProductImg(url);
              setImageLoader(false);
            });
          })
          .catch(() => {
            dispatch(
              setSnackbar({
                snackbarType: "error",
                snackbarMessage: "Oops! Something went wrong",
              }),
            );
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
    console.log(value);
    if (type === "add") {
      // console.log("add", value);
      onSubmit(value);
    } else {
      // console.log("edit", value);
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
      <Box className={classes.boxStyle}>
        <Formik
          initialValues={{
            name: type === "add" ? "" : data.name,
            price: type === "add" ? "" : data.price,
            discount: type === "add" ? "" : data.discount,
            description: type === "add" ? "" : data.description,
            brandId: type === "edit" ? data.brandId : selectBrandData[0].id,
            categoryId:
              type === "edit" ? data.categoryId : selectCategoryData[0].id,
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
              <div className={classes.mb10}>
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
              <div className={classes.mb10}>
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
              <div className={classes.mb10}>
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
              <div className={classes.mb10}>
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
              <div className={classes.mb10}>
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
              <div className={classes.mb10}>
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
                  {errors.categoryId && touched.categoryId && errors.categoryId}
                </div>
              </div>
              {productImg === "" ? (
                <div style={{ marginBottom: 5 }}>Please select an image.</div>
              ) : (
                ""
              )}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <FormLabel htmlFor="contained-button-file">
                    <MuiInput
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={(event) => {
                        setImageUpload(event.target.files[0]);
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
                <div>
                  <Button
                    onClick={() => uploadFile()}
                    style={{ textTransform: "capitalize" }}
                    color="secondary"
                    disableRipple
                    page="admin"
                  >
                    Upload To Storage
                  </Button>
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
  selectBrandData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  selectCategoryData: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object]),
  ),
  type: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default AdminProductsModal;
