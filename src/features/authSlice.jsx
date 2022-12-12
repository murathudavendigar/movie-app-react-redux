import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload;
    },
  },
});

export const { fetchStart, loginSuccess } = authSlice.actions;
export default authSlice.reducer;
