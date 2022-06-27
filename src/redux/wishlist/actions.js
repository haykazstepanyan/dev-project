import { createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchData } from "../../helpers/helpers";
import { BASE_URL } from "../../constants/constants";
import { showNotification } from "../app/appSlice";

export const getWishlistData = createAsyncThunk(
  "wishlist/getWishlist",
  async (userId, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/wishlist/getWishlist/${userId}`,
      );

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
