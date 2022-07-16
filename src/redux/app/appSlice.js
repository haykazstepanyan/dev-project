import { createSlice } from "@reduxjs/toolkit";
import { getCartCount, getWishlistCount } from "./actions";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMobile: false,
    currency: localStorage.getItem("currency") || "USD",
    loading: [],
    cartCount: 0,
    wishlistCount: 0,
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
    getWishlistCount(state, { payload }) {
      state.wishlistCount = payload;
    },
    getCartCount(state, { payload }) {
      state.cartCount = payload;
    },
    setWishlistCount(state, { payload }) {
      state.wishlistCount = payload;
    },
    setCartCount(state, { payload }) {
      state.cartCount = payload;
    },
  },
  extraReducers: {
    [getWishlistCount.fulfilled]: (state, { payload }) => {
      state.wishlistCount = payload.data.count;
    },
    [getWishlistCount.rejected]: (state) => {
      state.wishlistCount = 0;
    },
    [getCartCount.fulfilled]: (state, { payload }) => {
      state.cartCount = payload.data.count;
    },
    [getCartCount.rejected]: (state) => {
      state.cartCount = 0;
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
  setCartCount,
  setWishlistCount,
} = appSlice.actions;

export default appSlice;
