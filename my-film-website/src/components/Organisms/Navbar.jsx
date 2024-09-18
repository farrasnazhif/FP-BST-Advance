import React from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";

const NavbarMenu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Tv Shows",
    link: "#list",
  },
  {
    id: 3,
    name: "Movies",
    link: "#list",
  },
  {
    id: 4,
    name: "Upcoming",
    link: "#",
  },
]

const Navbar = () => {
  return (
    <>
      <div className="bg-brandDark text-white py-6"> 
        <nav className="container flex justify-between items-center">
        {/* logo section */}
        <div>
          <a href="#" className="text-2xl font-bold uppercase">
            28 <span className="font-extralight">CINEMA</span>
          </a>
        </div>
        {/* menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 ">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="hover:text-slate-300
                    transition duration-300 ease-in-out transform hover:scale-105
                    text-xs py-2 px-3 uppercase">
                  <a href={menu.link}
                    
                  >{menu.name}</a>
              </li>
            ))}
              <button 
              className="hover:text-slate-300
                      transition duration-300 ease-in-out transform hover:scale-105 text-xl ps-14"
                      >
              <Link to="/login">
              <MdAccountCircle/>
              </Link>
              </button>
          </ul>
        </div>
        {/* mobile hamburger */}
        <div className="md:hidden">
          <MdMenu />
        </div>
      </nav>
      </div>
    
    </>
    
    
  );
};

export default Navbar;
