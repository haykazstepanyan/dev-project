import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants/constants";
import { showNotification } from "../app/appSlice";

export const checkIsAuth = createAsyncThunk(
  "auth/isAuth",
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

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/users/createUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errMessage = await response.text();
        dispatch(
          showNotification({
            notificationType: "error",
            notificationMessage: errMessage,
          }),
        );
        throw new Error(errMessage);
      }
      const result = await response.json();
      dispatch(
        showNotification({
          notificationType: "success",
          notificationMessage: "You have successfully signed up!",
        }),
      );
      return result;
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  },
);

export const signOut = createAsyncThunk(
  "auth/signOut",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/users/signOut`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        const errMessage = await response.text();
        dispatch(
          showNotification({
            notificationType: "error",
            notificationMessage: errMessage,
          }),
        );
        throw new Error(errMessage);
      }
      const result = await response.json();
      dispatch(
        showNotification({
          notificationType: "success",
          notificationMessage: "You have successfully signed out!",
        }),
      );

      return result;
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  },
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/users/signIn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errMessage = await response.text();
        dispatch(
          showNotification({
            notificationType: "error",
            notificationMessage: errMessage,
          }),
        );
        throw new Error(errMessage);
      }

      const result = await response.json();
      dispatch(
        showNotification({
          notificationType: "success",
          notificationMessage: "You have successfully signed in!",
        }),
      );

      return result;
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  },
);
