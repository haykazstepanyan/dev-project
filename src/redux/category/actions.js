import { createAsyncThunk } from "@reduxjs/toolkit";
import { showSnackbar } from "../app/appSlice";
import { BASE_URL } from "../../constants/constants";
import { fetchData } from "../../helpers/helpers";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchData("categories");
      if (response.result === "error") {
        throw new Error();
      }

      return response;
    } catch (err) {
      return rejectWithValue();
    }
  },
);

// ?????? change to fetch data

export const addCategories = createAsyncThunk(
  "categories/addCategories",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/categories/category`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();

      dispatch(
        showSnackbar({
          snackbarType: "success",
          snackbarMessage: "Your category is successfully added.",
        }),
      );

      return result;
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  },
);

export const deleteCategories = createAsyncThunk(
  "categories/deleteCategories",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/categories/category/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();

      dispatch(
        showSnackbar({
          snackbarType: "success",
          snackbarMessage: "Your category is successfully deleted.",
        }),
      );

      return result;
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  },
);

export const updateCategories = createAsyncThunk(
  "categories/updateCategories",
  async ({ id, name }, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/categories/category/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ name }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();

      dispatch(
        showSnackbar({
          snackbarType: "success",
          snackbarMessage: "Your category is successfully updated.",
        }),
      );

      return result;
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  },
);
