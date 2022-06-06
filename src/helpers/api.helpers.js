import {API_URL} from '../constants'
export async function getProductsData() {
    try {
      const response = await fetch(`${API_URL}/products`, {
        method: "GET",
        mode: "cors",
        headers: { },
      });
      const res = await response.json();
      return res;
    } catch (e) {
      console.log(e.message);
    }
  }
  export async function getFakeProductsData() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data.products);
    return data.products;
  }
  