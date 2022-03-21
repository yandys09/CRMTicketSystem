import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  error:'',
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserPending: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payLoad }) => {
      state.isLoading = false;
      state.user = payLoad;
      state.error = "";
    },
    getUserFail: (state, { payLoad }) => {
      state.isLoading = false;
      state.error = payLoad;
    },
  },
});

export const { getUserPending, getUserSuccess, getUserFail } =
  userSlice.actions;

export default userSlice.reducer;
