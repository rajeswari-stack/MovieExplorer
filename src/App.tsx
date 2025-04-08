
//import React from "react";

import MovieCard from "./components/MovieCard";
import MovieTrailer from "./components/MovieTrailer";
import ThemeToggle from "./components/ThemeToggle";
import GenreFilter from "./components/GenreFilter";
import RatingFilter from "./components/RatingFilter";
import SortDropdown from "./components/SortDropdown";
import SearchBar from "./components/SearchBar";
import "./Styles2.css";


import React, {useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./redux/movieSlice";
import { RootState } from "./redux/store";
import { AppDispatch } from "./redux/store";


const App: React.FC = ()=> {


  const dispatch = useDispatch<AppDispatch>();
  const {movies,status} = useSelector((state:RootState) => state.movies);

  const [ratingFilter,setRatingFilter]=useState<string>("");
  const[genreFilter,setGenreFilter] = useState<string[]>([]);
  const[sortOption,setSortOption] = useState<string>("");
  

  useEffect(() =>{
    dispatch(fetchMovies(""));
  }, [dispatch]);

  const filteredMovies = movies
  .filter((movie) =>{
  if(ratingFilter && !movie.description.toLowerCase().includes(ratingFilter.toLowerCase())){
    return false;
}
return true;
})
.sort((a,b) =>{
  if (sortOption === "Popularity"){
    return b.id - a.id;
  }
  if(sortOption === "Release-year"){
    return b.id - a.id;
  }
  return 0;
});

  return(
   <div className="container">
    <h1>Movie Explorer</h1>
    <ThemeToggle/>

    <div className="filters">
    <SearchBar />
    <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
    <RatingFilter rating={ratingFilter} setRatingFilter={setRatingFilter}/>
    <GenreFilter selectedGenres={genreFilter} setGenreFilter={setGenreFilter} />
    </div>
    
    <MovieTrailer/>

    {status=== "loading" ? (
      <p>Loading Movies...</p>
    ) : (

    <div className="movie-grid">
      {filteredMovies.map((movie) =>(
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






    