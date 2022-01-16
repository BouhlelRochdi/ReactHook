import React from "react";
import MovieCard from "./MovieCard";

function MovieList(props) {
  return (
    <div>
      <h4 style={{ color: "purple", fontFamily: "AmstelvarAlpha" }}>
        List Of Movies:{" "}
      </h4>
      {props.movies.map((elem) => {
        return <MovieCard elementOfMovie={elem} />;
      })}
    </div>
  );
}

export default MovieList;
