import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, FormLabel } from "@mui/material";
import { Formik } from "formik";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import validationAccountDetails from "./ValidationAccountDetails";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { detailsStyles } from "./styles";
import { showSnackbar } from "../../redux/app/appSlice";
import useLazyFetch from "../../hooks/useLazyFetch";
import useFetch from "../../hooks/useFetch";
import { errorKeys } from "../../errorKeys";

function AccountDetails() {
  const dispatch = useDispatch();
  const { data: userInfo, error: userInfoError } =
    useFetch("/users/getUserData");
  const role = useSelector((state) => state.auth.role);

  const {
    data: updatedUserData,
    error: updateUserDataError,
    lazyRefetch: updateUserData,
  } = useLazyFetch();
  const { error: updateUserPasswordError, lazyRefetch: updateUserPassword } =
    useLazyFetch();

  const [userData, setUserData] = useState();

  useEffect(() => {
    if (userInfo?.data) {
      setUserData(userInfo.data);
    }
  }, [userInfo, dispatch]);

  useEffect(() => {
    if (updatedUserData) {
      dispatch(
        showSnackbar({
          snackbarType: "success",
          snackbarMessage: "Your data is successfully updated!",
        }),
      );
    }
  }, [updatedUserData, dispatch]);

  useEffect(() => {
    if (userInfoError) {
      dispatch(
        showSnackbar({
          snackbarType: "error",
          snackbarMessage: "Oops! Something went wrong!",
        }),
      );
    }
  }, [userInfoError, dispatch]);

  useEffect(() => {
    if (updateUserPasswordError) {
      const result = JSON.parse(updateUserPasswordError);
      if (result?.key) {
        dispatch(
          showSnackbar({
            snackbarType: "error",
            snackbarMessage: errorKeys[result.key],
          }),
        );
      }
    }
  }, [updateUserPasswordError, dispatch]);

  useEffect(() => {
    if (updateUserDataError) {
      const result = JSON.parse(updateUserDataError);
      if (result?.key) {
        dispatch(
          showSnackbar({
            snackbarType: "error",
            snackbarMessage: errorKeys[result.key],
          }),
        );
      }
    }
  }, [updateUserDataError, dispatch]);

  const [showPasswordChange, setShowPasswordChange] = useState(true);
  const [passwordChange, setPasswordChange] = useState({
    showNewPassword: false,
    showPassword: false,
    showNewPasswordConfirm: false,
  });
  const { accountDetailsValidation, passwordValidation } =
    validationAccountDetails;
  const classes = detailsStyles();

  const handleClickUserInfo = (formData) => {
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    };

    updateUserData(
      "/users/personalInfo",
      {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      },
      "PATCH",
    );
  };

  const handleClickPasswordChange = (formData, actions) => {
    if (formData.newPassword !== formData.newPasswordConfirm) {
      dispatch(
        showSnackbar({
          snackbarType: "error",
          snackbarMessage: "Passwords don't match",
        }),
      );
      return;
    }
    const data = {
      newPassword: formData.newPassword,
      password: formData.oldPassword,
    };

    updateUserPassword(
      "/users/password",
      {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      },
      "PATCH",
    ).then(() => {
      dispatch(
        showSnackbar({
          snackbarType: "success",
          snackbarMessage: "Your password is successfully updated!",
        }),
      );

      actions.resetForm({
        values: {
          newPassword: "",
          newPasswordConfirm: "",
          oldPassword: "",
        },
      });
    });
  };

  const handleClickShowNewPassword = () => {
    setPasswordChange({
      ...passwordChange,
      showNewPassword: !passwordChange.showNewPassword,
    });
  };

  const handleClickShowNewPasswordConfirm = () => {
    setPasswordChange({
      ...passwordChange,
      showNewPasswordConfirm: !passwordChange.showNewPasswordConfirm,
    });
  };

  const handleClickShowPassword = () => {
    setPasswordChange({
      ...passwordChange,
      showPassword: !passwordChange.showPassword,
    });
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  return (
    <Container
      className={role === "USER" ? classes.container : classes.adminContainer}
    >
      {role === "USER" && (
        <h3 className={classes.detailsTitle}>Account Details</h3>
      )}
      {userData && (
        <Formik
          initialValues={{
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
          }}
          validationSchema={accountDetailsValidation}
          onSubmit={(values) => handleClickUserInfo(values)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form className={classes.formControl} onSubmit={handleSubmit}>
              <div className={classes.inputsContainer}>
                <div
                  className={`${classes.inputContainer} ${
                    errors.firstName &&
                    touched.firstName &&
                    errors.firstName &&
                    `${classes.errorInput}`
                  }`}
                >
                  <Input
                    htmlFor="firstName"
                    labelValue="First Name"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    size="large"
                    borders="square"
                    state="noFocus"
                    value={values.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />

                  <div style={{ color: "#d22d3d" }}>
                    {errors.firstName && touched.firstName && errors.firstName}
                  </div>
                </div>
                <div
                  className={`${classes.inputContainer} ${
                    errors.lastName &&
                    touched.lastName &&
                    errors.lastName &&
                    `${classes.errorInput}`
                  }`}
                >
                  <Input
                    htmlFor="lastName"
                    labelValue="Last Name"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    size="large"
                    borders="square"
                    state="noFocus"
                    value={values.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <div style={{ color: "#d22d3d" }}>
                    {errors.lastName && touched.lastName && errors.lastName}
                  </div>
                </div>
                <div
                  className={`${classes.inputContainer} ${
                    errors.email &&
                    touched.email &&
                    errors.email &&
                    `${classes.errorInput}`
                  }`}
                >
                  <Input
                    htmlFor="email"
                    labelValue="Email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    size="large"
                    borders="square"
                    state="noFocus"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                  />
                  <div style={{ color: "#d22d3d" }}>
                    {errors.email && touched.email && errors.email}
                  </div>
                </div>
              </div>
              <div className={classes.saveBtnContainer}>
                <Button
                  color="primary"
                  borders="square"
                  size="small"
                  type="submit"
                  page={role !== "USER" ? "admin" : ""}
                >
                  Save
                </Button>
              </div>
            </form>
          )}
        </Formik>
      )}
      <hr className={classes.hrStyle} />
      <Button
        color="secondary"
        borders="square"
        size="small"
        onClick={() => setShowPasswordChange(!showPasswordChange)}
        className={classes.passwordForm}
        page={role !== "USER" ? "admin" : ""}
      >
        Change Password
      </Button>
      {showPasswordChange ? (
        ""
      ) : (
        <Formik
          initialValues={{
            newPassword: "",
            newPasswordConfirm: "",
            oldPassword: "",
          }}
          validationSchema={passwordValidation}
          onSubmit={(values, actions) =>
            handleClickPasswordChange(values, actions)
          }
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form className={classes.passwordForm} onSubmit={handleSubmit}>
              <div
                className={`${classes.inputContainer} ${
                  errors.oldPassword &&
                  touched.oldPassword &&
                  errors.oldPassword &&
                  `${classes.errorInput}`
                }`}
              >
                <FormControl
                  className={classes.passwordInput}
                  sx={{ width: "25ch" }}
                  variant="outlined"
                >
                  <FormLabel htmlFor="outlined-adornment-password">
                    Current Password
                  </FormLabel>
                  <OutlinedInput
                    placeholder="Current Password"
                    id="outlined-adornment-password1-oldPassword"
                    name="oldPassword"
                    type={passwordChange.showPassword ? "text" : "password"}
                    value={values.oldPassword}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDown}
                          edge="end"
                          disableRipple
                        >
                          {passwordChange.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <div style={{ color: "#d22d3d" }}>
                  {errors.oldPassword &&
                    touched.oldPassword &&
                    errors.oldPassword}
                </div>
              </div>
              <div
                className={`${classes.inputContainer} ${
                  errors.newPassword &&
                  touched.newPassword &&
                  errors.newPassword &&
                  `${classes.errorInput}`
                }`}
              >
                <FormControl
                  className={classes.passwordInput}
                  sx={{ width: "25ch" }}
                  variant="outlined"
                >
                  <FormLabel htmlFor="outlined-adornment-password">
                    New Password
                  </FormLabel>
                  <OutlinedInput
                    placeholder="New Password"
                    id="outlined-adornment-password-newPassword"
                    name="newPassword"
                    type={passwordChange.showNewPassword ? "text" : "password"}
                    value={values.newPassword}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          name="showNewPaswword"
                          aria-label="toggle password visibility"
                          onClick={handleClickShowNewPassword}
                          onMouseDown={handleMouseDown}
                          edge="end"
                          disableRipple
                        >
                          {passwordChange.showNewPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <div style={{ color: "#d22d3d" }}>
                  {errors.newPassword &&
                    touched.newPassword &&
                    errors.newPassword}
                </div>
              </div>
              <div
                className={`${classes.inputContainer} ${
                  errors.newPasswordConfirm &&
                  touched.newPasswordConfirm &&
                  errors.newPasswordConfirm &&
                  `${classes.errorInput}`
                }`}
              >
                <FormControl
                  className={classes.passwordInput}
                  sx={{ width: "25ch" }}
                  variant="outlined"
                >
                  <FormLabel htmlFor="outlined-adornment-password">
                    Confirm New Password
                  </FormLabel>
                  <OutlinedInput
                    placeholder="Confirm New Password"
                    id="outlined-adornment-password-newPasswordConfirm"
                    name="newPasswordConfirm"
                    type={
                      passwordChange.showNewPasswordConfirm
                        ? "text"
                        : "password"
                    }
                    value={values.newPasswordConfirm}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowNewPasswordConfirm}
                          onMouseDown={handleMouseDown}
                          edge="end"
                          disableRipple
                        >
                          {passwordChange.showNewPasswordConfirm ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <div style={{ color: "#d22d3d" }}>
                  {errors.newPasswordConfirm &&
                    touched.newPasswordConfirm &&
                    errors.newPasswordConfirm}
                </div>
              </div>

              <div
                className={classes.saveBtnContainer}
                style={{ marginBottom: 20 }}
              >
                <Button
                  color="primary"
                  borders="square"
                  size="small"
                  type="submit"
                  page={role !== "USER" ? "admin" : "home"}
                >
                  Save
                </Button>
              </div>
            </form>
          )}
        </Formik>
      )}
    </Container>
  );
}

export default AccountDetails;
