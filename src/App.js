import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const addMovie = (movie) => setList([...list, movie]);

  const removeMovie = (movie) => {
    const newState = list.filter((elem) => {
      return elem !== movie;
    });
    setList(newState);
  };

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <MovieScreen
          addMovie={addMovie}
          list={list}
          page={page}
          setPage={setPage}
          movieList={movieList}
          removeMovie={removeMovie}
        />
        <Watchlist list={list}
         removeMovie={removeMovie}
        />
      </main>
    </div>
  );
}

export default App;
