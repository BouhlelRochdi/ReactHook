import React, { useState } from "react";
// import { Form, Button, FormGroup, FormControl, ControlLabel, Row, Col } from "react-bootstrap";

function AddMovie({ functionAdd }) {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    functionAdd(newMovie);
  };
  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h4 style={{ color: "green", fontFamily: "AmstelvarAlpha" }}>
        Add a new Movie:{" "}
      </h4>
      <form name="movie">
        <span>Title: </span>
        <input type="text" name="title" onChange={handleChange}></input>
        <br />
        <span>Description: </span>
        <input type="text" name="description" onChange={handleChange}></input>
        <br />
        <span>URL: </span>
        <input type="text" name="posterUrl" onChange={handleChange}></input>
        <br />
        <span>Rating: </span>
        <input type="text" name="rating" onChange={handleChange}></input>
        <br />
        <button variant="primary" type="submit" onClick={handleSubmit}>
          Click to Add Movie
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
