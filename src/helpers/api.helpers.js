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