import { createSlice } from "@reduxjs/toolkit";
import { addBrands, deleteBrands, updateBrands } from "./actions";

const brandSlice = createSlice({
  name: "brands",
  initialState: {
    brands: [],
    loading: false,
  },
  extraReducers: {
    [addBrands.fulfilled]: (state, { payload }) => {
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
