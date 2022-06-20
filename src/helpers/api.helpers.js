import { API_URL } from "../constants/constants";

export async function getProductsDataByPage(pageNumber, limit = 9) {
  let res;
  try {
    const response = await fetch(
      `${API_URL}/api/v1/products/getProducts?page=${pageNumber}&limit=${limit}`,
      {
        method: "GET",
        mode: "cors",
      },
    );
    res = await response.json();
    return res;
  } catch (e) {
    console.log(e.message);
  }
  return res;
}
// export async function getFakeProductsData() {
//   const res = await fetch("https://dummyjson.com/products");
//   const data = await res.json();
//   return data.products;
// }
