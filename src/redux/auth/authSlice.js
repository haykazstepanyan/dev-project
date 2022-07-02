import { createSlice } from "@reduxjs/toolkit";
import { checkIsAuth, signUp, signIn, signOut } from "./actions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    role: "",
    loading: false,
    authLoading: true,
  },
  extraReducers: {
    [checkIsAuth.fulfilled]: (state, { payload }) => {
      if (payload.result === "error") {
        const data = JSON.parse(payload.message);
        if (data.error === "Unauthorized") {
          // sign out
          state.loading = false;
          state.isAuth = false;
          state.role = "";
        }
      } else {
        state.isAuth = payload.data.isAuth;
        if (payload.data.role) {
          state.role = payload.data.role;
        } else {
          state.role = "";
        }
      }
      state.authLoading = false;
    },
    [checkIsAuth.rejected]: (state) => {
      state.authLoading = false;
    },
    [signUp.pending]: (state) => {
      state.loading = true;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isAuth = payload.data.isAuth;
      state.role = payload.data.user.role;
    },
    [signUp.rejected]: (state) => {
      state.loading = false;
    },
    [signIn.pending]: (state) => {
      state.loading = true;
    },
    [signIn.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isAuth = payload.data.isAuth;
      state.role = payload.data.user.role;
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
      state.role = "";
    },
    [signOut.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default authSlice;
