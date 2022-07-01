import { createSlice } from "@reduxjs/toolkit";
import { getBrands, addBrands, deleteBrands, updateBrands } from "./actions";

const brandSlice = createSlice({
  name: "brands",
  initialState: {
    brands: [],
    loading: true,
  },
  extraReducers: {
    [getBrands.pending]: (state) => {
      state.loading = true;
    },
    [getBrands.fulfilled]: (state, { payload }) => {
      state.brands = payload.brands;
      state.loading = false;
    },
    [getBrands.rejected]: (state) => {
      state.loading = true;
    },
    [addBrands.fulfilled]: (state, { payload }) => {
      console.log("payload brand", payload);
      state.brands.push(payload.brand.data);
      state.loading = false;
    },
    [deleteBrands.fulfilled]: (state, { payload }) => {
      const brandId = payload.data.id;
      const currState = state.brands;
      const newState = currState.filter((elem) => elem.id !== brandId);
      state.brands = newState;
    },
    [updateBrands.fulfilled]: (state, { payload }) => {
      const { brand } = payload;
      const currState = state.brands;
      const newState = currState.map((elem) =>
        elem.id === brand.id ? brand : elem,
      );
      state.brands = newState;
    },
  },
});

const brandActions = brandSlice.actions;
export { brandActions };

export default brandSlice;
