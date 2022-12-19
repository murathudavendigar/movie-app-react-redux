import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import useMovieCalls from "../hooks/useMovieCalls";
import loadingIcon from "../assets/loadingIcon.svg";
import { toastWarningNotify } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const { getMovies } = useMovieCalls();
  const { movies, loading } = useSelector((state) => state.movie);
  const { currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(1);
  const [searchMovie, setSearchMovie] = useState("");

  useEffect(() => {
    getMovies(pageNumber);
  }, [pageNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchMovie && currentUser) {
      navigate("/search", { state: searchMovie });
    } else if (!currentUser) {
      toastWarningNotify("Please login to see details");
    } else {
      toastWarningNotify("Please enter a text");
    }
  };

  return (
    <div>
      <div className="flex justify-center flex-wrap">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={(e) => setSearchMovie(e.target.value)}
          />
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
