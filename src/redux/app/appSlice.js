import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMobile: false,
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
    setLoader(state, { payload }) {
      const loaderIndex = state.loading.findIndex((item) => {
        return item?.key === payload.key;
      });

      if (loaderIndex === -1) {
        state.loading.push(payload);
      } else {
        state.loading.splice(loaderIndex, 1);
      }
    },
    setSnackbar(state, { payload }) {
      state.snackbar = {
        type: payload.snackbarType,
        message: payload.snackbarMessage,
      };
    },
    resetSnackbar(state) {
      state.snackbar = {
        type: null,
        message: null,
      };
    },
  },
});

export const { setIsMobileVersion, setLoader, setSnackbar, resetSnackbar } =
  appSlice.actions;

export default appSlice;
