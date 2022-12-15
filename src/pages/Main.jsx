import React, { useEffect } from "react";
import useMovieCalls from "../hooks/useMovieCalls";

const Main = () => {
  const { getMovies } = useMovieCalls();

  useEffect(() => {
    getMovies();
  }, []);

  return <div>Main</div>;
};

export default Main;
