import React from "react";

function MovieCard(props) {
  return (
    <div>
      <b>Title: </b>
      <span style={{ color: "red" }}> {props.elementOfMovie.title}</span>
      <b> Description: </b>
      <span style={{ color: "red" }}> {props.elementOfMovie.description}</span>
      <b> URL: </b>
      <span style={{ color: "red" }}> {props.elementOfMovie.posterUrl}</span>
      <b> Rating: </b>
      <span style={{ color: "red" }}> {props.elementOfMovie.rating}</span>
    </div>
  );
}

export default MovieCard;
