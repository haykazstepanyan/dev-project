import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app/appSlice";
import authSlice from "./auth/authSlice";
import brandSlice from "./brand/brandSlice";
import categorySlice from "./category/categorySlice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    auth: authSlice.reducer,
    brands: brandSlice.reducer,
    categories: categorySlice.reducer,
  },
});

export default store;
