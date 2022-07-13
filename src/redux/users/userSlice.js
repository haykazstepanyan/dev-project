import { createSlice } from "@reduxjs/toolkit";
import { getUsers, deleteUsers, updateUsersRole } from "./actions";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: true,
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users = payload.data;
      state.loading = false;
    },
    [getUsers.rejected]: (state) => {
      state.loading = true;
    },
    [deleteUsers.fulfilled]: (state, { payload }) => {
      const userId = payload.data.id;
      const currState = state.users;
      const newState = currState.filter((elem) => elem.id !== userId);
      state.users = newState;
    },
    [updateUsersRole.fulfilled]: (state, { payload }) => {
      const { userUpdated } = payload;
      const currState = state.users;
      const newState = currState.map((elem) =>
        elem.id === userUpdated.id ? userUpdated : elem,
      );
      state.users = newState;
    },
  },
});

const userActions = userSlice.actions;
export { userActions };

export default userSlice;
