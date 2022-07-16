import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../helpers/helpers";

export const getWishlistCount = createAsyncThunk(
  "wishlist/count",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchData("wishlist/count");
      if (response.result === "error") {
        throw new Error();
      }

      return response;
    } catch (err) {
      return rejectWithValue();
    }
  },
);

export const getCartCount = createAsyncThunk(
  "cart/count",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchData("cart/count");
      if (response.result === "error") {
        throw new Error();
      }

      return response;
    } catch (err) {
      return rejectWithValue();
    }
  },
);
