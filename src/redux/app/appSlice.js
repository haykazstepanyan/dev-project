import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMobile: false,
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

export const { setIsMobileVersion, showNotification, hideNotification } =
  appSlice.actions;

export default appSlice;
