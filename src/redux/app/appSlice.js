import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMobile: false,
    loading: [],
    notification: {
      show: false,
      type: "",
      message: "",
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
    showNotification(state, { payload }) {
      state.notification = {
        show: true,
        type: payload.notificationType,
        message: payload.notificationMessage,
      };
    },
    hideNotification(state) {
      state.notification = {
        show: false,
        type: "",
        message: "",
      };
    },
  },
});

export const {
  setIsMobileVersion,
  setLoader,
  showNotification,
  hideNotification,
} = appSlice.actions;

export default appSlice;
