import { useState, useEffect } from 'react'
import { getMovies } from '../services/movies';

export const MovieServices = () => {
  const [MovieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovies((data) => {
      setMovieList(data.results);
    });
  }, []);

  return { MovieList };
}

export default MovieServices;


  
