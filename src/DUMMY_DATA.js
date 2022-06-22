const brands = [
  "Apple",
  "Samsung",
  "Xiaomi",
  "Huawei",
  "Lenovo",
  "Asus",
  "HP",
  "Sony",
  "Acer",
];

const categories = [
  "smart phone",
  "tablet",
  "notebook",
  "watches",
  "tv",
  "computers",
  "camera",
  "accessories",
  "other",
];

const messages = [
  {
    name: "Name 1",
    email: "Email 1",
    subject: "Subject 1",
    message: "Message 1",
  },
  {
    name: "Name 2",
    email: "Email 2",
    subject: "Subject 2",
    message: "Message 2",
  },
  {
    name: "Name 3",
    email: "Email 3",
    subject: "Subject 3",
    message: "Message 3",
  },
  {
    name: "Name 4",
    email: "Email 4",
    subject: "Subject 4",
    message: "Message 4",
  },
];

const products = [
  {
    name: "Name 1",
    price: 100,
    discount: 5,
    description:
      "className can either be a string or a function that returns a string. If the function className is used, the link’s active state is passed as a parameter. This is helpful if you want to exclusively apply a className to an inactive link.",
    brand: "Apple",
    category: "smart phone",
    brandId: 0,
    categoryId: 0,
  },
  {
    name: "Name 2",
    price: 200,
    discount: 6,
    description:
      "className can either be a string or a function that returns a string. If the function className is used, the link’s active state is passed as a parameter. This is helpful if you want to exclusively apply a className to an inactive link.",
    brand: "Sony",
    category: "computers",
    brandId: 7,
    categoryId: 5,
  },
  {
    name: "Name 3",
    price: 400,
    discount: 7,
    description:
      "className can either be a string or a function that returns a string. If the function className is used, the link’s active state is passed as a parameter. This is helpful if you want to exclusively apply a className to an inactive link.",
    brand: "Acer",
    category: "camera",
    brandId: 8,
    categoryId: 6,
  },
  {
    name: "Name 8",
    price: 400,
    discount: 9,
    description:
      "className can either be a string or a function that returns a string. If the function className is used, the link’s active state is passed as a parameter. This is helpful if you want to exclusively apply a className to an inactive link.",
    brand: "Huawei",
    category: "accessories",
    brandId: 3,
    categoryId: 7,
  },
];

export { brands, categories, messages, products };
