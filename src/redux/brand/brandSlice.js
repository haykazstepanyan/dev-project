import { createSlice } from "@reduxjs/toolkit";
import { getBrands } from "./actions";

const brandSlice = createSlice({
  name: "brands",
  initialState: {
    brands: {},
    loading: true,
  },
  extraReducers: {
    [getBrands.pending]: (state) => {
      state.loading = true;
    },
    [getBrands.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.brands = payload.brands;
      state.loading = false;
    },
    [getBrands.rejected]: (state) => {
      state.loading = true;
    },
  },
});

const brandActions = brandSlice.actions;
export { brandActions };

export default brandSlice;
