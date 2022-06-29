import { createAsyncThunk } from "@reduxjs/toolkit";
import { showNotification } from "../app/appSlice";
import { BASE_URL } from "../../constants/constants";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/categories`, {
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();

      return result;
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  },
);
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
        showNotification({
          notificationType: "success",
          notificationMessage: "Your category is successfully added.",
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
        showNotification({
          notificationType: "success",
          notificationMessage: "Your category is successfully deleted.",
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
        showNotification({
          notificationType: "success",
          notificationMessage: "Your category is successfully updated.",
        }),
      );

      return result;
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  },
);
