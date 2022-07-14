import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../helpers/helpers";
import { showSnackbar } from "../app/appSlice";

export const getProductsPagination = createAsyncThunk(
  "products/getProductsPagination",
  async ({ page, limit = 9 }, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetchData(
        `products/getProducts?take=${limit}&skip=${(page - 1) * limit}`,
      );

      if (response.result === "error") {
        dispatch(
          showSnackbar({
            snackbarType: "error",
            snackbarMessage: response.message,
          }),
        );
        throw new Error();
      }
      return response;
    } catch {
      return rejectWithValue();
    }
  },
);

export const getProductsCount = createAsyncThunk(
  "products/getProductsCount",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetchData("products/count");

      if (response.result === "error") {
        dispatch(
          showSnackbar({
            snackbarType: "error",
            snackbarMessage: response.message,
          }),
        );
        throw new Error();
      }
      return response;
    } catch {
      return rejectWithValue();
    }
  },
);

// export const getProducts = createAsyncThunk(
//   "products/getProducts",
//   async (_, { dispatch, rejectWithValue }) => {
//     try {
//       const response = await fetchData("products");
//       if (response.result === "error") {
//         dispatch(
//           showSnackbar({
//             snackbarType: "error",
//             snackbarMessage: response.message,
//           }),
//         );
//         throw new Error();
//       }
//       return response;
//     } catch (err) {
//       return rejectWithValue();

export const addProducts = createAsyncThunk(
  "products/addProducts",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const requestOptions = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetchData(
        "products/product",
        data,
        requestOptions,
        "POST",
      );

      if (response.result === "error") {
        dispatch(
          showSnackbar({
            snackbarType: "error",
            snackbarMessage: response.message,
          }),
        );
        throw new Error();
      }

      dispatch(
        showSnackbar({
          snackbarType: "success",
          snackbarMessage: "Your product is successfully added.",
        }),
      );

      return response;
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  },
);

// export const updateProducts = createAsyncThunk(
//   "brands/updateBrands",
//   async ({ id, name }, { rejectWithValue, dispatch }) => {
//     try {
//       const response = await fetch(`${BASE_URL}/brands/brand/${id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify({ name }),
//       });

//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       const result = await response.json();

//       dispatch(
//         showSnackbar({
//           snackbarType: "success",
//           snackbarMessage: "Your brand is successfully updated.",
//         }),
//       );

//       return result;
//     } catch (err) {
//       return rejectWithValue({ message: err.message });
//     }
//   },
// );
