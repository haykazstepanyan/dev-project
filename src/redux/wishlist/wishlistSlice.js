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
      state.wishlistData = state.wishlistData.filter(
        (item) => item.productId !== Number(payload),
      );
      state.loading = false;
    },
    [addToWishlist.fulfilled]: (state, { payload }) => {
      state.wishlistData.push(payload.wishlistItem);
      state.loading = false;
    },
  },
});

const wishlistActions = wishlistSlice.actions;
export { wishlistActions };

export default wishlistSlice;
