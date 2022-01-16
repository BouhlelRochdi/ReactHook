import React, { useState } from "react";
import MovieList from "./Component/MovieList";
import AddMovie from "./Component/AddMovie";
import Filter from "./Component/Filter";

function App() {
  const [movieList, setMovieList] = useState([
    {
      title: "film 1",
      description: "description 1",
      posterUrl: "./img.jpg",
      rating: "1 stars",
    },
    {
      title: "film 2",
      description: "description 2",
      posterUrl: "./img.jpg",
      rating: "2 stars",
    },
    {
      title: "test 3",
      description: "description 3",
      posterUrl: "./img.jpg",
      rating: "3 stars",
    },
    {
      title: "xyz 4",
      description: "description 4",
      posterUrl: "./img.jpg",
      rating: "4 stars",
    },
  ]);

  const [filterName, setFilterName] = useState("");
  const addMovie = (singleMovie) => {
    setMovieList([...movieList, singleMovie]);
  };
  const search =(movieName)=>{
    setFilterName(movieName)
  }
  // create state for filter and compare with rating and title .. watch event function in add
  return (
    <div>
      <Filter search={search} />
      <MovieList movies={movieList.filter(elem => {
        if(filterName == null)
        return elem;
        else
        return elem.title.includes(filterName.toLowerCase())
      })} />
      <AddMovie functionAdd={addMovie} />
    </div>
  );
}

export default App;
