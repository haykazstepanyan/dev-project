import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../helpers/helpers";
import { showNotification } from "../app/appSlice";
import { setAuthAndUser } from "../auth/authSlice";

export const getProductsPagination = createAsyncThunk(
  "products/getProductsPagination",
  async ({ page, limit = 9 }, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetchData(
        `products/getProducts?take=${limit}&skip=${(page - 1) * limit}`,
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

      dispatch(
        setAuthAndUser({
          isAuth: response.data.isAuth,
          userData: response.data.user,
        }),
      );
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
          showNotification({
            notificationType: "error",
            notificationMessage: response.message,
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
//           showNotification({
//             notificationType: "error",
//             notificationMessage: response.message,
//           }),
//         );
//         throw new Error();
//       }
//       return response;
//     } catch (err) {
//       return rejectWithValue();
//     }
//   },
// );
