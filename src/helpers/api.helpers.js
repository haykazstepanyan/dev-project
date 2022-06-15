import { API_URL } from "../constants/constants";

export async function getProductsData() {
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: "GET",
      mode: "cors",
      headers: {},
    });
    const res = await response.json();
    return res;
  } catch (e) {
    // console.log(e.message);
    return null;
  }
}
export async function getFakeProductsData() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
}
