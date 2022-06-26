import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants/constants";

export const getAllProducts = createAsyncThunk(
    "getWishlist",
    async (_, { rejectWithValue }) => {
      try {
        const response = await fetch(`${BASE_URL}/products`, {
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const result = await response.json();
  
        return result;
      } catch (err) {
        //   console.log("data", data);
        // return data;
        return rejectWithValue({ message: err.message });
      }
    },
  );
  