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
    loginSuccess: (state) => {
      state.loading = false;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
    },
    registerSuccess: (state) => {
      state.loading = false;
    },
    isActive: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  isActive,
  fetchFail,
} = authSlice.actions;
export default authSlice.reducer;
