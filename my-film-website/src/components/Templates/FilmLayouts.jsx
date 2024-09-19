import React from 'react'
import Body from '../Organisms/Body'
import MovieList from '../Organisms/MovieList'
import Navbar from '../Organisms/Navbar'
import { Link } from 'react-router-dom'
import { MdAccountCircle } from 'react-icons/md'

const NavbarMenu = [
  {
    id: 1,
    name: "Home",
    link: "/movies",
  },
  {
    id: 2,
    name: "Movies",
    link: "#list",
  },
  {
    id: 4,
    name: "Upcoming",
    link: "#list",
  },
];

const FilmLayouts = () => {
  return (
    <main className="overflow-x-hidden">
        <Navbar>
          <ul className="flex items-center gap-4">
            {NavbarMenu.map((menu) => (
              <li
                key={menu.id}
                className="hover:text-slate-300
                      transition duration-300 ease-in-out transform hover:scale-105
                      text-xs py-2 px-3 uppercase"
              >
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
            <button className="hover:text-slate-300 transition duration-300 ease-in-out transform hover:scale-105 text-xl ps-14">
              <Link to="/">
                <MdAccountCircle />
              </Link>
            </button>
          </ul>
        </Navbar>
        <Body />
        <MovieList />
    </main>
  )
}

export default FilmLayouts;
