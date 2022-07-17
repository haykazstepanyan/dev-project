import { createAsyncThunk } from "@reduxjs/toolkit";
import { showSnackbar, setWishlistCount, setCartCount } from "../app/appSlice";
import { fetchData } from "../../helpers/helpers";
import { errorKeys } from "../../errorKeys";
import { getCartCount, getWishlistCount } from "../app/actions";

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
            showSnackbar({
              snackbarType: "error",
              snackbarMessage: errorKeys[key],
            }),
          );
        }
        throw new Error();
      }

      dispatch(
        showSnackbar({
          snackbarType: "success",
          snackbarMessage: "You have successfully signed up!",
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
          showSnackbar({
            snackbarType: "error",
            snackbarMessage: response.message,
          }),
        );
        throw new Error();
      }
      dispatch(setCartCount(0));
      dispatch(setWishlistCount(0));
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
            showSnackbar({
              snackbarType: "error",
              snackbarMessage: errorKeys[key],
            }),
          );
        }
        throw new Error();
      }

      dispatch(
        showSnackbar({
          snackbarType: "success",
          snackbarMessage: `Welcome back, ${response.data.user.firstName} ${response.data.user.lastName}!`,
        }),
      );
      dispatch(getCartCount());
      dispatch(getWishlistCount());

      return response;
    } catch {
      return rejectWithValue();
    }
  },
);
