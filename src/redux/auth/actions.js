import { createAsyncThunk } from "@reduxjs/toolkit";
import { showNotification } from "../app/appSlice";
import { fetchData } from "../../helpers/helpers";

export const checkIsAuth = createAsyncThunk(
  "auth/isAuth",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchData("users/auth");
      return response.data;
    } catch (err) {
      return rejectWithValue();
    }
  },
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const requestOptions = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetchData(
        "users/signUp",
        data,
        requestOptions,
        "POST",
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
        showNotification({
          notificationType: "success",
          notificationMessage: "You have successfully signed up!",
        }),
      );

      return response;
    } catch (err) {
      return rejectWithValue();
    }
  },
);

export const signOut = createAsyncThunk(
  "auth/signOut",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const requestOptions = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetchData(
        "users/signOut",
        { id },
        requestOptions,
        "POST",
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

      return response;
    } catch (err) {
      return rejectWithValue();
    }
  },
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const requestOptions = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetchData(
        "users/signIn",
        data,
        requestOptions,
        "POST",
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
        showNotification({
          notificationType: "success",
          notificationMessage: `Welcome back, ${response.data.user.firstName} ${response.data.user.lastName}!`,
        }),
      );

      return response;
    } catch {
      return rejectWithValue();
    }
  },
);
