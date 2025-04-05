
//import React from "react";

import MovieCard from "./components/MovieCard";
import MovieTrailer from "./components/MovieTrailer";
import ThemeToggle from "./components/ThemeToggle";
import GenreFilter from "./components/GenreFilter";
import RatingFilter from "./components/RatingFilter";
import SortDropdown from "./components/SortDropdown";
import SearchBar from "./components/SearchBar";
import "./Styles2.css";


import React, {useEffect} from "react";
import { useDispatch, UseDispatch,useSelector } from "react-redux";
import { fetchMovies } from "./redux/movieSlice";
import { RootState } from "./redux/store";
import { AppDispatch } from "./redux/store";


const App: React.FC = ()=> {


  const dispatch = useDispatch<AppDispatch>();
  const {movies,status} = useSelector((state:RootState) => state.movies);

  useEffect(() =>{
    dispatch(fetchMovies());
  }, [dispatch]);

  return(
   <div className="container">
    <h1>Movie Explorer</h1>
    <ThemeToggle/>

    <div className="filters">
    <SearchBar />
    <SortDropdown />
    <RatingFilter />
    <GenreFilter />
    </div>
    
    <MovieTrailer/>

    {status=== "loading" ? (
      <p>Loading Movies...</p>
    ) : (

    <div className="movie-grid">
      {movies.map((movie: {
        id:number;
        title:string;
        image:string;
        description:string;
      }) => (

    <MovieCard
    key = {movie.id}
    title={movie.title}
    image={movie.image}
    desc={movie.description} />
      ))}
    </div>
    )}
  </div>
);
};

export default App;






    