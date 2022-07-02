import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../helpers/helpers";
import { setSnackbar } from "../app/appSlice";

export const getWishlistData = createAsyncThunk(
  "wishlist/getWishlist",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetchData("wishlist/getWishlist");

      if (response.result === "error") {
        dispatch(
          setSnackbar({
            snackbarType: "error",
            snackbarMessage: response.message,
          }),
        );
        throw new Error();
      }
      return response.data;
    } catch {
      return rejectWithValue();
    }
  },
);
export const deleteItemFromWishlist = createAsyncThunk(
  "wishlist/delete",
  async ({ productId }, { dispatch, rejectWithValue }) => {
    try {
      const requestOptions = {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      };
      const response = await fetchData(
        `wishlist/delete/${productId}`,
        null,
        requestOptions,
        "DELETE",
      );

      if (response.result === "error") {
        dispatch(
          setSnackbar({
            snackbarType: "error",
            snackbarMessage: response.message,
          }),
        );
        throw new Error();
      }

      return response.data;
    } catch {
      return rejectWithValue();
    }
  },
);

export const addToWishlist = createAsyncThunk(
  "wishlist/create",
  async ({ productId }, { dispatch, rejectWithValue }) => {
    try {
      const requestOptions = {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      };
      const response = await fetchData(
        `wishlist/create/${productId}`,
        null,
        requestOptions,
        "POST",
      );
      if (response.result === "error") {
        dispatch(
          setSnackbar({
            snackbarType: "error",
            snackbarMessage: response.message,
          }),
        );
        throw new Error();
      }
      return response.data;
    } catch {
      return rejectWithValue();
    }
  },
);
