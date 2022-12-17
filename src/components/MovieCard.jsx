import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import "../index.css";

const MovieCard = ({ movie }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const [starCount, setStarCount] = useState([]);
  const imageAPI = `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  const getVoteStars = (vote) => {
    vote = vote.toFixed(1);
    if (vote < 5.5) {
      setStarCount([<BsStarFill />, <BsStarHalf />]);
    } else if (vote < 6) {
      setStarCount([<BsStarFill />, <BsStarFill />]);
    } else if (vote < 6.5) {
      setStarCount([<BsStarFill />, <BsStarFill />, <BsStarHalf />]);
    } else if (vote < 7) {
      setStarCount([<BsStarFill />, <BsStarFill />, <BsStarFill />]);
    } else if (vote < 7.5) {
      setStarCount([
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ]);
    } else if (vote < 8) {
      setStarCount([
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
      ]);
    } else if (vote < 8.5) {
      setStarCount([
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ]);
    } else {
      setStarCount([
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
      ]);
    }
  };

  const getVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  useEffect(() => {
    getVoteStars(movie.vote_average);
  }, []);

  return (
    <div className="max-w-sm w-full bg-gray-600">
      <img
        className="transition-all hover:opacity-30 cursor-pointer"
        src={movie.poster_path ? imageAPI : defaultImage}
        alt="poster-movie"
      />
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-6 flex flex-col justify-between leading-normal ">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2 text-center">
            {movie.title}
          </div>
          <p className="text-gray-700 text-base handmade-ellipsis">
            {movie.overview}
          </p>
        </div>
        {currentUser?.email && (
          <div className="flex justify-evenly items-center">
            {/* <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://www.nicepng.com/png/detail/184-1841632_free-png-gold-star-png-images-transparent-yellow.png"
              alt="stars"
            /> */}
            <div className="flex text-yellow-500 gap-1 text-2xl">
              {starCount.map((item) => item)}
            </div>
            <div className="text-sm">
              <p
                className={`text-white leading-none text-3xl movie-vote-border ${getVoteClass(
                  movie.vote_average
                )} py-2 px-4`}>
                {movie.vote_average.toFixed(1)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
