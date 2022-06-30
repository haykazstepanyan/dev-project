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
  reducers: {
    setAuthAndUser(state, { payload }) {
      state.isAuth = payload.isAuth;
      state.userData = payload.userData;
    },
  },
  extraReducers: {
    [checkIsAuth.fulfilled]: (state, { payload }) => {
      state.isAuth = payload.isAuth;
      if (payload.role) {
        state.role = payload.role;
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

export const { setAuthAndUser } = authSlice.actions;

export default authSlice;
