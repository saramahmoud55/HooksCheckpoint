import React from "react";
import MovieCard from './MovieCard';
import { useNavigate } from "react-router-dom";

export default function MovieList({ movies }) {
    const navigate =useNavigate();
    return (
        <div  className="row justify-content-center">
            {movies.map((item , index)=>(
         <MovieCard movie={item} key={index} onClick={()=>navigate(`/Home/${index}`)}/>))}
        </div>
    );
}