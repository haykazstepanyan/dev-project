import { createSlice } from "@reduxjs/toolkit";
import {
  getProductsPagination,
  getProductsCount,
  getProducts,
  addProducts,
} from "./actions";

const productSlice = createSlice({
  name: "products",
  initialState: {
    paginationProducts: [],
    products: [],
    loading: false,
    productsLength: 0,
  },

  extraReducers: {
    [getProductsPagination.pending]: (state) => {
      state.loading = true;
    },
    [getProductsPagination.fulfilled]: (state, { payload }) => {
      state.paginationProducts = payload.data.products;
      state.loading = false;
    },
    [getProductsPagination.rejected]: (state) => {
      state.loading = false;
    },
    [getProductsCount.pending]: (state) => {
      state.loading = true;
    },
    [getProductsCount.fulfilled]: (state, { payload }) => {
      state.productsLength = payload.data.productsLength;
      state.loading = true;
    },
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload.products;
      state.loading = false;
    },
    [getProducts.rejected]: (state) => {
      state.loading = true;
    },
    [addProducts.fulfilled]: (state, { payload }) => {
      console.log(payload);
      console.log("payload", payload.data.product.data);
      state.products.push(payload.data.product.data);
      state.loading = false;
    },
  },
});

export default productSlice;
