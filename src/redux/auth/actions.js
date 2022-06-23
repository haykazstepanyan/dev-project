import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants/constants";
import { appActions } from "../app/appSlice";

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
          appActions.showNotification({
            notificationType: "error",
            notificationMessage: errMessage,
          }),
        );
        throw new Error(errMessage);
      }
      const result = await response.json();
      dispatch(
        appActions.showNotification({
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
          appActions.showNotification({
            notificationType: "error",
            notificationMessage: errMessage,
          }),
        );
        throw new Error(errMessage);
      }

      const result = await response.json();
      dispatch(
        appActions.showNotification({
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
