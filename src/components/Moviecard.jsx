import React from "react";

const Moviecard = ({ movie, addMovie, removeMovie, list }) => {
  const inWatchlist = list.filter((elem) => {
    return elem.id === movie.id;
  });

  const button = inWatchlist.length === 0 ? (
    <button onClick={() => addMovie(movie)}>Add to List</button>
  ) : (
    <button onClick={() => removeMovie(movie)}>Remove</button>
  )
  
  return (
    <div className="movie-card">
        <div>
            <img src= {`https://image.tmdb.org/t/p/original${movie.poster_path}`} ></img>
            <h3>{movie.original_title}</h3>
        </div>
        {button}
    </div>
  );
};
export default Moviecard