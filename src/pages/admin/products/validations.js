import * as Yup from "yup";

export default {
  productsValidation: Yup.object().shape({
    name: Yup.string()
      .min(3, "Name is too short.")
      .required("Name is required."),
    categoryId: Yup.number()
      .required()
      .positive()
      .integer()
      .required("Please check a category."),
    brandId: Yup.number()
      .positive()
      .integer()
      .required("Please check a brand."),
    description: Yup.string().required("Please write a description."),
    price: Yup.number()
      .positive()
      .integer()
      .required("Please write a valid price."),
    discount: Yup.number().test(
      "The number must be greater or equal to 0",
      (value) => value >= 0,
    ),
  }),
  contactUsValidation: Yup.object().shape({
    name: Yup.string()
      .min(3, "Name is too short.")
      .required("Name is required."),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    subject: Yup.string().required("Please write a subject."),
    message: Yup.string().required("Please write a message."),
  }),
  signInValidation: Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string()
      .required("No password provided.")
      .matches("^[a-zA-Z0-9]{3,30}$", "Password is invalid."),
  }),
  signUpValidation: Yup.object().shape({
    firstName: Yup.string()
      .min(3, "First name is too short.")
      .required("First name is required."),
    lastName: Yup.string()
      .min(3, "Last name is too short.")
      .required("Last name is required."),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string()
      .required("No password provided.")
      .matches("^[a-zA-Z0-9]{3,30}$", "Password is invalid."),
  }),
};
