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
    setIsMobileVersion(state, action) {
      state.isMobile = action.payload.isMobile;
    },
    showNotification(state, action) {
      state.notification = {
        show: true,
        type: action.payload.notificationType,
        message: action.payload.notificationMessage,
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
