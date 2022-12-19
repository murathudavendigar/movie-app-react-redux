import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: null,
    moviesDetail: null,
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchSuccess: (state, { payload }) => {
      state.loading = false;
      state.movies = payload;
    },
    fetchDetailSuccess: (state, { payload }) => {
      state.loading = false;
      state.moviesDetail = payload;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchDetailSuccess, fetchFail } =
  movieSlice.actions;

export default movieSlice.reducer;
