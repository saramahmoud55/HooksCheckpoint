import React from "react";
import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
    return (
        <div  className="row justify-content-center">
            {movies.map((item , index)=>(
         <MovieCard movie={item} key={index}/>))}
        </div>
    );
}