import React from "react";
import "./MoviesList.css";
import { moviesData } from "../../constants/Data";
import Movie from "../Movie/Movie";
const MoviesList = () => {
  const filtredMovies = moviesData.filter((el) => el.date > 2000);
  return (
    <div className="cardList">
      <div className="cards">
        {moviesData.map((movie, i) => (
          <Movie movie={movie} key={i} />
        ))}
      </div>
      <h1>Movies after 20s</h1>
      <div className="filtredCards">
        {filtredMovies.map((movie) => (
          <Movie movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
