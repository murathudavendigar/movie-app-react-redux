import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import useMovieCalls from "../hooks/useMovieCalls";
import loadingIcon from "../assets/loadingIcon.svg";

const Main = () => {
  const { getMovies } = useMovieCalls();
  const { movies, loading } = useSelector((state) => state.movie);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getMovies(pageNumber);
  }, [pageNumber]);

  return (
    <div>
      <div className="flex justify-center flex-wrap">
        <form>
          <input type="search" />
          <button type="submit">Search</button>
        </form>
        <div className="flex justify-center flex-wrap gap-8 my-12">
          {loading && <img src={loadingIcon} alt="loadingImg" />}
          {movies?.results.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
      <div className="pagination flex justify-center gap-4 my-24">
        <button onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}>
          Back
        </button>
        <p className="text-2xl">{pageNumber}</p>
        <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Main;
