import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app/appSlice";
import authSlice from "./auth/authSlice";
import brandSlice from "./brand/brandSlice";
import productSlice from "./product/productSlice";
import categorySlice from "./category/categorySlice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    auth: authSlice.reducer,
    brands: brandSlice.reducer,
    products: productSlice.reducer,
    categories: categorySlice.reducer,
  },
});

export default store;
