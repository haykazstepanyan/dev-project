import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import {
  Container,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
} from "@mui/material";
import { Formik, Form } from "formik";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import validationAccountDetails from "./ValidationAccountDetails";
import {
  updateUserPersonalInfo,
  updateUserPassword,
} from "../../redux/users/actions";
import Button from "../../components/button/Button";
import { detailsStyles } from "./styles";
import { showNotification } from "../../redux/app/appSlice";

function AccountDetails() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth);

  const [showPasswordChange, setShowPasswordChange] = useState(true);
  const [passwordChange, setPasswordChange] = useState({
    showNewPassword: false,
    showPassword: false,
    showNewPasswordConfirm: false,
  });
  const { accountDetailsValidation, passwordValidation } =
    validationAccountDetails;
  const classes = detailsStyles();

  const handleClickUserInfo = (e) => {
    const data = {
      firstName: e.firstName,
      lastName: e.lastName,
      email: e.email,
      gender: e.gender,
    };
    dispatch(updateUserPersonalInfo(data));
  };

  const handleClickPasswordChange = (e) => {
    if (e.newPassword === e.newPasswordConfirm) {
      const data = {
        newPassword: e.newPassword,
        password: e.oldPassword,
      };
      dispatch(updateUserPassword(data));
    }
    dispatch(
      showNotification({
        notificationType: "error",
        notificationMessage: "passwords do not match",
      }),
    );
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
    <Container className={classes.container}>
      <h3 className={classes.detailsTitle}>Account Details</h3>
      <Formik
        initialValues={{
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          gender: userData.gender,
        }}
        validationSchema={accountDetailsValidation}
        onSubmit={(values) => handleClickUserInfo(values)}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form className={classes.formControl}>
            <p>
              Already have an account <Link to="/login">Log in instead!</Link>
            </p>
            <RadioGroup
              className={classes.radioGroup}
              value={values.gender}
              name="gender"
              onChange={handleChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Mr." />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Mrs."
              />
            </RadioGroup>
            <div className={classes.inputsContainer}>
              <div className={classes.inputContainer}>
                <TextField
                  name="firstName"
                  label="First Name"
                  value={values.firstName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <div style={{ color: "#d22d3d" }}>
                  {errors.firstName && touched.firstName && errors.firstName}
                </div>
              </div>
              <div className={classes.inputContainer}>
                <TextField
                  name="lastName"
                  label="Last Name"
                  value={values.lastName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <div style={{ color: "#d22d3d" }}>
                  {errors.lastName && touched.lastName && errors.lastName}
                </div>
              </div>
              <div className={classes.inputContainer}>
                <TextField
                  name="email"
                  label="Email"
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
                borders="rounded"
                size="small"
                type="submit"
              >
                Save
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <Button
        color="primary"
        borders="rounded"
        size="small"
        onClick={() => setShowPasswordChange(!showPasswordChange)}
        className={classes.passwordForm}
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
          onSubmit={(values) => handleClickPasswordChange(values)}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form className={classes.passwordForm}>
              <div className={classes.inputContainer}>
                <FormControl
                  className={classes.passwordInput}
                  sx={{ m: 1, width: "25ch" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    New Password
                  </InputLabel>
                  <OutlinedInput
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
                        >
                          {passwordChange.showNewPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="New Password"
                  />
                </FormControl>
                <div style={{ color: "#d22d3d" }}>
                  {errors.newPassword &&
                    touched.newPassword &&
                    errors.newPassword}
                </div>
              </div>
              <div className={classes.inputContainer}>
                <FormControl
                  className={classes.passwordInput}
                  sx={{ m: 1, width: "25ch" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    New Password Confirm
                  </InputLabel>
                  <OutlinedInput
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
                        >
                          {passwordChange.showNewPasswordConfirm ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="New Password Confirm"
                  />
                </FormControl>
                <div style={{ color: "#d22d3d" }}>
                  {errors.newPasswordConfirm &&
                    touched.newPasswordConfirm &&
                    errors.newPasswordConfirm}
                </div>
              </div>
              <div className={classes.inputContainer}>
                <FormControl
                  className={classes.passwordInput}
                  sx={{ m: 1, width: "25ch" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Enter Password
                  </InputLabel>
                  <OutlinedInput
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
                        >
                          {passwordChange.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Enter Password"
                  />
                </FormControl>
                <div style={{ color: "#d22d3d" }}>
                  {errors.oldPassword &&
                    touched.oldPassword &&
                    errors.oldPassword}
                </div>
              </div>

              <div className={classes.saveBtnContainer}>
                <Button
                  color="primary"
                  borders="rounded"
                  size="small"
                  type="submit"
                >
                  Save
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </Container>
  );
}

export default AccountDetails;
