import { createAsyncThunk } from "@reduxjs/toolkit";
import { showNotification } from "../app/appSlice";
import { BASE_URL } from "../../constants/constants";

export const addBrands = createAsyncThunk(
  "brands/addBrands",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/brands/brand`, {
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
          notificationMessage: "Your brand is successfully added.",
        }),
      );

      return result;
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  },
);

export const deleteBrands = createAsyncThunk(
  "brands/deleteBrands",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/brands/brand/${id}`, {
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
          notificationMessage: "Your brand is successfully deleted.",
        }),
      );

      return result;
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  },
);

export const updateBrands = createAsyncThunk(
  "brands/updateBrands",
  async ({ id, name }, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/brands/brand/${id}`, {
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
          notificationMessage: "Your brand is successfully updated.",
        }),
      );

      return result;
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  },
);
