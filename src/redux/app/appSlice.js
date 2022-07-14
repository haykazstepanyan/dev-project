import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMobile: false,
    currency: localStorage.getItem("currency") || "USD",
    loading: [],
    snackbar: {
      type: null,
      message: null,
    },
  },
  reducers: {
    setIsMobileVersion(state, { payload }) {
      state.isMobile = payload.isMobile;
    },
    showLoader(state, { payload }) {
      state.loading.push(payload);
    },
    hideLoader(state, { payload }) {
      const loaderIndex = state.loading.findIndex((item) => {
        return item?.key === payload.key;
      });
      if (loaderIndex > -1) {
        state.loading.splice(loaderIndex, 1);
      }
    },
    showSnackbar(state, { payload }) {
      state.snackbar = {
        type: payload.snackbarType,
        message: payload.snackbarMessage,
      };
    },
    hideSnackbar(state) {
      state.snackbar = {
        type: null,
        message: null,
      };
    },
    setCurrency(state, { payload }) {
      state.currency = payload;
    },
  },
});

export const {
  setIsMobileVersion,
  showLoader,
  hideLoader,
  showSnackbar,
  hideSnackbar,
  setCurrency,
} = appSlice.actions;

export default appSlice;
