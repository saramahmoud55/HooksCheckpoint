import React from "react";
import "./styles.css";
export default function MovieCard({ movie, onClick }) {
  return (

    <div className="card movie_card" onClick={onClick}>
      {movie && (
        <>
          <img src={movie.posterURL} alt="imageframe" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="movie_info">{movie.description}</p>
            <span className="float-right">
              <i className="fas fa-star"></i> {movie.rate} / 10
            </span>
          </div>
         
        </>
      )}
    </div>


  )
}