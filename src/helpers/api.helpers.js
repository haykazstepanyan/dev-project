import { WISHLIST_URL, PRODUCTS_URL } from "../constants/constants";

export async function getProductsDataByPage(pageNumber, limit = 9) {
  let res;
  try {
    const response = await fetch(
      `${PRODUCTS_URL}/getProducts?page=${pageNumber}&limit=${limit}`,
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

export async function addToWishlist(userId, productId) {
  let response;
  try {
    response = await fetch(`${WISHLIST_URL}/create/${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        userId,
        productId,
      }),
    });
    return response;
  } catch (e) {
    console.log(e.message);
  }
  return response;
}

export async function deleteItemFromWishlist(userId, productId) {
  let response;
  try {
    response = await fetch(`${WISHLIST_URL}/delete/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        userId,
      }),
    });
    return response;
  } catch (e) {
    console.log(e.message);
  }
  return response;
}
export async function getWishlistData(userId) {
  let res;
  try {
    const response = await fetch(`${WISHLIST_URL}/getWishlist/${userId}`);
    res = await response.json();
    return res;
  } catch (err) {
    console.log(err.message);
  }
  return res;
}
