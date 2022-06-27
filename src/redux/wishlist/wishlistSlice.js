import { createSlice } from "@reduxjs/toolkit";
import { getWishlistData } from "./actions";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistData: [],
    wishlisProducts: [],
  },
  reducers: {
    setWishlistProducts(state, { payload }) {
      console.log("payload", payload);
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
  },
});

const wishlistActions = wishlistSlice.actions;
export const { setWishlistProducts } = wishlistSlice.actions;
export { wishlistActions };

export default wishlistSlice;
