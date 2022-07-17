import * as Yup from "yup";

export default {
  accountDetailsValidation: Yup.object().shape({
    firstName: Yup.string()
      .min(3, "First Name is too short.")
      .max(50, "First Name is too big.")
      .required("First Name is required."),
    lastName: Yup.string()
      .min(3, "Last Name is too short.")
      .max(100, "Last Name is too big.")
      .required("Last Name is required."),
    email: Yup.string()
      .email("Please write a valid email.")
      .matches(/^.*\.(ru|com|net)$/, "Please write a valid email.")
      .required("Email is required."),
  }),
  passwordValidation: Yup.object().shape({
    newPassword: Yup.string()
      .matches(/^[a-zA-Z0-9]{3,30}$/, "Please write a valid password.")
      .required("Password is required."),
    newPasswordConfirm: Yup.string()
      .matches(/^[a-zA-Z0-9]{3,30}$/, "Please write a valid password.")
      .required("Password is required."),
    oldPassword: Yup.string()
      .matches(/^[a-zA-Z0-9]{3,30}$/, "Please write a valid password.")
      .required("Password is required."),
  }),
};
