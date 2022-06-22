import { createSlice } from "@reduxjs/toolkit";
import { checkIsAuth, signUp, signIn } from "./actions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    userData: {},
    loading: false,
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
  },
});

const authActions = authSlice.actions;
export { authActions };

export default authSlice;
