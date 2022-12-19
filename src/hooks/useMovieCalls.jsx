import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail } from "../features/authSlice";
import {
  fetchDetailSuccess,
  fetchStart,
  fetchSuccess,
} from "../features/movieSlice";

const useMovieCalls = () => {
  const dispatch = useDispatch();
  const apiKey = process.env.REACT_APP_movieApiKey;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
  const urlNewMovie = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;
  const getMovies = async (pageNumber) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${url}&page=${pageNumber}`);
      dispatch(fetchSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getSearchMovie = async (searchMovie) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${urlNewMovie}&query=${searchMovie}`);
      dispatch(fetchSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getMovieById = async (id) => {
    dispatch(fetchStart());
    const urlById = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    try {
      const { data } = await axios.get(urlById);
      dispatch(fetchDetailSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { getMovies, getSearchMovie, getMovieById };
};

export default useMovieCalls;
