import React from 'react'
import { MovieServices } from '../../services/movieServices'
import { useNavigate } from 'react-router-dom'

{/*  
const MovieList = [
  {
    id: 1,
    name: "Interstellar",
    url: "images/interstellar.jpg",
    age: "18+",
  },
  {
    id: 2,
    name: "The Batman",
    url: "images/thebatman.jpg",
    age: "18+",
  },
  {
    id: 3,
    name: "Shutter Island",
    url: "images/shutterisland.jpg",
    age: "18+",
  },
  {
    id: 4,
    name: "Spiderman: No Way home",
    url: "images/spidermannwh.jpg",
    age: "18+",
  },
  {
    id: 5,
    name: "The Good Guys",
    url: "images/thegoodguys.jpg",
    age: "18+",
  },
  {
    id: 6,
    name: "The Green Mile",
    url: "images/thegreenmile.jpg",
    age: "18+",
  },
  {
    id: 7,
    name: "Fury",
    url: "images/fury.webp",
    age: "18+",
  },
  {
    id: 8,
    name: "Barbie",
    url: "images/barbie.jpg",
    age: "18+",
  },
] 
  */}


const MovieList = () => {

  const { MovieList } = MovieServices();

  const navigate = useNavigate();

  const handleImageClick = (moviePath, movieTitle, movieDescription) => {
    navigate('/BuyTicket', { state: { moviePath, movieTitle, movieDescription } });
  };
  return (
    <>
      <section id="list" className="bg-gray-800 font-poppins py-8">
        <div className="container">
          <h1 className="text-2xl lg:text-5xl md:text-4xl font-bold text-center text-brandWhite my-4">
            MOVIE LIST
          </h1>
        </div>
        <div  className="grid xl:grid-cols-5 gap-4 
          md:grid-cols-4 sm:grid-cols-3
          items-center justify-center p-5 text-white">
          {MovieList.map((movie, id) => (
            <div className='w-full' key={id}>
              <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`Image ${movie.id}`} 
              onClick={() => handleImageClick(movie.poster_path, movie.title, movie.overview)}  
              className="items-center w-full" />
                <div className="mt-2 mb-5 font-sans text-sm ">
                  <p 
                  className='text-center font-semibold '>{movie.title}</p>
                  <p className='text-center mt-2 mb-2'>Ratings : {movie.vote_average}</p>
                </div>
            </div>
              ))}
          </div>

      </section>
    </>
  )
}

export default MovieList;
