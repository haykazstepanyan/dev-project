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
};
