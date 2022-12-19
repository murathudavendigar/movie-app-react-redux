import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import useMovieCalls from "../hooks/useMovieCalls";

const Search = () => {
  const { state } = useLocation();
  const { getSearchMovie } = useMovieCalls();
  const { movies } = useSelector((state) => state.movie);

  useEffect(() => {
    getSearchMovie(state);
  }, []);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-8 my-12">
        {/* {loading && <img src={loadingIcon} alt="loadingImg" />} */}
        {movies?.results.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
};

export default Search;
