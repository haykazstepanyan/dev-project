import { createSlice } from "@reduxjs/toolkit";
import { checkIsAuth, signUp, signIn, signOut } from "./actions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    userData: {},
    loading: true,
  },
  extraReducers: {
    [checkIsAuth.pending]: (state) => {
      state.loading = true;
    },
    [checkIsAuth.fulfilled]: (state, { payload }) => {
      state.isAuth = payload.isAuth;
      state.userData = payload.user;
      state.loading = false;
    },
    [checkIsAuth.rejected]: (state) => {
      state.loading = false;
    },
    [signUp.pending]: (state) => {
      state.loading = true;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isAuth = payload.isAuth;
      state.userData = payload.data;
    },
    [signUp.rejected]: (state) => {
      state.loading = false;
    },
    [signIn.pending]: (state) => {
      state.loading = true;
    },
    [signIn.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isAuth = payload.isAuth;
      state.userData = payload.data;
    },
    [signIn.rejected]: (state) => {
      state.loading = false;
    },
    [signOut.pending]: (state) => {
      state.loading = true;
    },
    [signOut.fulfilled]: (state) => {
      state.loading = false;
      state.isAuth = false;
      state.userData = {};
    },
    [signIn.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default authSlice;
