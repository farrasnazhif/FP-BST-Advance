import { useState, useEffect } from 'react'
import { getMovies } from '../services/movies';

export const MovieServices = () => {
  const [MovieList, setMovieList] = useState([]);
  const [BuyTicketPage, setBuyTicketPage] = useState([]);


  useEffect(() => {
    getMovies((data) => {
      setMovieList(data.results);
      setBuyTicketPage(data.results);
    });
  }, []);

  return { MovieList, BuyTicketPage };
};

export default MovieServices;


  