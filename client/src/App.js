import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from "./Movies/UpdateMovie";
import AddMovie from "./Movies/AddMovie";
import axios from 'axios';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    axios
    .get("http://localhost:5000/api/movies")
    .then(res => {
      console.log('movies get res.data',res.data)
      setMovies(res.data)
    })
    .catch(err => console.log(err.response));
  }, [])

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" render={props => {
        return <MovieList {...props} movies={movies}/>
      }}
      />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route
        path="/update-movie/:id"
        render={props => {
          return <UpdateMovie {...props} />;
        }}
      />
      <Route
        path="/add-movie"
        render={props => {
          return <AddMovie {...props} />;
        }}
      />
    </>
  );
};

export default App;
