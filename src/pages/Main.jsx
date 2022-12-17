import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import useMovieCalls from "../hooks/useMovieCalls";

const Main = () => {
  const { getMovies } = useMovieCalls();
  const { movies } = useSelector((state) => state.movie);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <div className="flex justify-center flex-wrap">
        <form>
          <input type="search" />
          <button type="submit">Search</button>
        </form>
        <div className="flex justify-center flex-wrap gap-8 my-12">
          {movies?.results.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
