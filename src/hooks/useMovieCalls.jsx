import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail } from "../features/authSlice";
import { fetchStart, fetchSuccess } from "../features/movieSlice";

const useMovieCalls = () => {
  const dispatch = useDispatch();
  const apiKey = process.env.REACT_APP_movieApiKey;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

  const getMovies = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(url);
      dispatch(fetchSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { getMovies };
};

export default useMovieCalls;
