import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import movieReducer from "../features/movieSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    movie: movieReducer,
  },
});

export default store;
