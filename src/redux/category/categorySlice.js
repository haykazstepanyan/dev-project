import { createSlice } from "@reduxjs/toolkit";
import {
  getCategories,
  addCategories,
  deleteCategories,
  updateCategories,
} from "./actions";

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: true,
  },
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.loading = true;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.categories = payload.categories;
      state.loading = false;
    },
    [getCategories.rejected]: (state) => {
      state.loading = true;
    },
    [addCategories.fulfilled]: (state, { payload }) => {
      state.categories.push(payload.category.data);
      state.loading = false;
    },
    [deleteCategories.fulfilled]: (state, { payload }) => {
      const categoryId = payload.data.id;
      const currState = state.categories;
      const newState = currState.filter((elem) => elem.id !== categoryId);
      state.categories = newState;
    },
    [updateCategories.fulfilled]: (state, { payload }) => {
      const { category } = payload;
      const currState = state.categories;
      const newState = currState.map((elem) =>
        elem.id === category.id ? category : elem,
      );
      state.categories = newState;
    },
  },
});

const categoryActions = categorySlice.actions;
export { categoryActions };

export default categorySlice;
