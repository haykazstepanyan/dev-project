import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMobile: false,
  },
  reducers: {
    setIsMobileVersion(state, action) {
      state.isMobile = action.payload.isMobile;
    },
  },
});

export const appActions = appSlice.actions;

export default appSlice;
