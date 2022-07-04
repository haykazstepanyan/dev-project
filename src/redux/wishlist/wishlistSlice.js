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
      // if(payload)
      state.wishlistData = [];
      if (payload.wishlist) {
        state.wishlistData = payload.wishlist;
      }
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
      state.wishlistData.push(payload);
      state.loading = false;
    },
  },
});

const wishlistActions = wishlistSlice.actions;
export { wishlistActions };

export default wishlistSlice;
