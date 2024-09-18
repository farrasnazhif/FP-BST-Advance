import React from 'react'
import Body from '../Organisms/Body'
import MovieList from '../Organisms/MovieList'
import Navbar from '../Organisms/Navbar'

const FilmLayouts = () => {
  return (
    <main className="overflow-x-hidden">
        <Navbar />
        <Body />
        <MovieList />
    </main>
  )
}

export default FilmLayouts;
