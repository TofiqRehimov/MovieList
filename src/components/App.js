import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import axios from 'axios';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // });

  // return <h1>I have rendered {count} times!</h1>;


  const [state, setState] = useState([]);
  const [search, setSearch] = useState('')
  const apiMovie = "http://localhost:3002/movies";


  // useEffect(() => {
  //   loadMoviesData();
  // }, []);

useEffect(()=>{
  const loadMoviesData = async () =>{
    const {data:mov} = await axios.get(apiMovie)
    setState(mov)
  };
  loadMoviesData()
},[]);

const addMovies = async () =>{
  const newMovie = {name:"New Movie",rating:"5.5", imageURL: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4hne3v6jN4MlCnhSkxOW7YspJhr.jpg",
  overview: "When a mafia accountant is taken hostage on his beat, a police officer – wracked by guilt from a prior stint as a negotiator – must negotiate the standoff, even as his own family is held captive by the mob."};
  await axios.post(apiMovie,newMovie);
  setState([newMovie, ...state]);
} 


  const updateMovie = async (movie) =>{
      movie.name = "Update name Movie";
      console.log(await axios.put(apiMovie +"/" + movie.id))
      const MovieClone = [...state];
      const index = MovieClone.indexOf(movie);
      console.log(index)
      MovieClone[index] = {movie};
      setState(MovieClone);
      console.log(MovieClone)
  }


const deleteMovie = async (movie) =>{

  await axios.delete(apiMovie + "/" + movie.id);
  setState(state.filter(m => m.id !== movie.id))
}



  const Search = (mov) => {
    return mov.filter((state) => state.name.toLowerCase().includes(search))

  }


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <SearchBar setSearch={setSearch} />
        </div>
      </div>
      <MovieList movies={Search(state)} addMovies={addMovies} updateMovie={updateMovie} deleteMovie={deleteMovie} />
     
    </div>
  );
};

export default App;