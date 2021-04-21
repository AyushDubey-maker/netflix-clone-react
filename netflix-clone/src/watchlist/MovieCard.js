import React from 'react'
import {  unavailable } from "../config/config";
import  MovieControls  from "./MovieControls";
function MovieCard({movie,type}) {
    return (
        <div className="movie-card">
        <div className="overlay"></div>
       {movie.poster_path?(

         <img
           src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
         alt={`${movie.title}`}
         />
       ):(
        <img
        src={unavailable}
      alt={`${movie.title}`}
      />
       )}
  
        <MovieControls type={type} movie={movie} />
      </div>
    )
}

export default MovieCard
