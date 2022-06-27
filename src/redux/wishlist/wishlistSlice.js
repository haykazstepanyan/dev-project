import { createSlice } from "@reduxjs/toolkit";
import {
  getWishlistData,
  deleteItemFromWishlist,
  addToWishlist,
} from "./actions";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistData: [],
    wishlisProducts: [],
  },
  reducers: {
    setWishlistProducts(state, { payload }) {
      state.wishlisProducts = payload;
    },
  },
  extraReducers: {
    [getWishlistData.pending]: (state) => {
      state.loading = true;
    },
    [getWishlistData.fulfilled]: (state, { payload }) => {
      state.wishlistData = payload;
      state.loading = false;
    },
    [getWishlistData.rejected]: (state) => {
      state.loading = true;
    },
    [deleteItemFromWishlist.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [addToWishlist.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

const wishlistActions = wishlistSlice.actions;
export const { setWishlistProducts } = wishlistSlice.actions;
export { wishlistActions };

export default wishlistSlice;
