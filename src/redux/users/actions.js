import { createAsyncThunk } from "@reduxjs/toolkit";
import { showSnackbar } from "../app/appSlice";
import { BASE_URL } from "../../constants/constants";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/users`, {
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

export const deleteUsers = createAsyncThunk(
  "users/deleteUsers",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/users/user/${id}`, {
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
          snackbarMessage: "User is successfully deleted.",
        }),
      );

      return result;
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  },
);

export const updateUsersRole = createAsyncThunk(
  "users/updateUsersRole",
  async ({ id, role }, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/users/user/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ role }),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();

      dispatch(
        showSnackbar({
          snackbarType: "success",
          snackbarMessage: "User is successfully updated.",
        }),
      );

      return result;
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  },
);

export const updateUsersDashboard = createAsyncThunk(
  "users/updateUsersDashboard",
  async (
    { id, firstName, lastName, email, gender, password, newPassword },
    { rejectWithValue, dispatch },
  ) => {
    try {
      const response = await fetch(`${BASE_URL}/users/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          gender,
          password,
          newPassword,
        }),
      });

      const result = await response.json();

      if (result.type === "error") {
        dispatch(
          showSnackbar({
            snackbarType: "error",
            snackbarMessage: result.message,
          }),
        );
        throw new Error();
      }

      dispatch(
        showSnackbar({
          snackbarType: "success",
          snackbarMessage: "User is successfully updated.",
        }),
      );
      return result;
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  },
);
