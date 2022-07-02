import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../helpers/helpers";
import { setSnackbar } from "../app/appSlice";
import { checkIsAuth } from "../auth/actions";

export const getWishlistData = createAsyncThunk(
  "wishlist/getWishlist",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchData("wishlist/getWishlist");

      return response.data;
    } catch {
      return rejectWithValue();
    }
  },
);
export const deleteItemFromWishlist = createAsyncThunk(
  "wishlist/delete",
  async ({ productId }, { rejectWithValue }) => {
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

      // if (response.result === "error") {
      //   dispatch(
      //     showNotification({
      //       notificationType: "error",
      //       notificationMessage: response.message,
      //     }),
      //   );
      //   throw new Error();
      // }

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

      dispatch(checkIsAuth());

      if (response.result !== "error") {
        dispatch(
          setSnackbar({
            snackbarType: "error",
            snackbarMessage: response.message,
          }),
        );
      }
      return response.data;
    } catch {
      return rejectWithValue();
    }
  },
);
