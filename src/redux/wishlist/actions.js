import { createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchData } from "../../helpers/helpers";
import { BASE_URL } from "../../constants/constants";
import { showNotification } from "../app/appSlice";
// import { setWishlistProducts } from "./wishlistSlice";

export const getWishlistData = createAsyncThunk(
  "wishlist/getWishlist",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/wishlist/getWishlist`);

      if (response.result === "error") {
        dispatch(
          showNotification({
            notificationType: "error",
            notificationMessage: response.message,
          }),
        );
        throw new Error();
      }
      const result = await response.json();

      return result;
    } catch {
      return rejectWithValue();
    }
  },
);
export const deleteItemFromWishlist = createAsyncThunk(
  "wishlist/delete",
  async ({ productId }, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/wishlist/delete/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });

      if (response.result === "error") {
        dispatch(
          showNotification({
            notificationType: "error",
            notificationMessage: response.message,
          }),
        );
        throw new Error();
      }
      const result = await response.json();

      return result;
    } catch {
      return rejectWithValue();
    }
  },
);

export const addToWishlist = createAsyncThunk(
  "wishlist/create",
  async ({ productId }, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/wishlist/create/${productId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      if (response.result === "error") {
        dispatch(
          showNotification({
            notificationType: "error",
            notificationMessage: response.message,
          }),
        );
        throw new Error();
      }
      const result = await response.json();
      return result;
    } catch {
      return rejectWithValue();
    }
  },
);
