import React, { useState } from "react";
import { MdMenu } from "react-icons/md";

const Navbar = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu

  return (
    <>
      <div className="bg-brandDark text-white py-6">
        <nav className="container flex justify-between items-center">
          {/* Logo section */}
          <div>
            <a href="/movies" className="text-2xl font-bold uppercase">
              28 <span className="font-extralight">CINEMA</span>
            </a>
          </div>
          {/* Menu section for desktop */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {children}
            </ul>
          </div>
          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <MdMenu />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col items-center gap-4">
              {children}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
