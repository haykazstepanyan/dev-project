import { createAsyncThunk } from "@reduxjs/toolkit";
import { showNotification } from "../app/appSlice";
import { fetchData } from "../../helpers/helpers";
import { errorKeys } from "../../errorKeys";

export const checkIsAuth = createAsyncThunk(
  "auth/isAuth",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchData("users/auth");

      return response;
    } catch (err) {
      return rejectWithValue();
    }
  },
);
export const checkAdminAuth = createAsyncThunk(
  "auth/checkAdminAuth",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchData("users/adminAuth");

      return response;
    } catch (err) {
      return rejectWithValue();
    }
  },
);
export const checkMainAdminAuth = createAsyncThunk(
  "auth/checkMainAdminAuth",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchData("users/mainAdminAuth");

      return response;
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
        const result = JSON.parse(response.message);
        if (result.key) {
          const { key } = result;
          dispatch(
            showNotification({
              notificationType: "error",
              notificationMessage: errorKeys[key],
            }),
          );
        }
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
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const requestOptions = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetchData(
        "users/signOut",
        null,
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
        const result = JSON.parse(response.message);
        if (result.key) {
          const { key } = result;
          dispatch(
            showNotification({
              notificationType: "error",
              notificationMessage: errorKeys[key],
            }),
          );
        }
        // console.log("ssss", result);
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
