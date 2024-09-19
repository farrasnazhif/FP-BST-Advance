import React from 'react'
import Navbar from "../components/Organisms/Navbar";
import RegisterFormLayouts from "../components/Templates/RegisterFormLayouts";
import { Link } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';

const NavbarMenu = [
  {
    id: 1,
    name: "Home",
    link: "/movies",
  },
];

const RegisterPage = () => {
  return (
    <main className="min-h-screen bg-brandDark">
        <Navbar>
          <ul className="flex items-center">
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
        <RegisterFormLayouts /> {/* children */}

    </main>
  )
}

export default RegisterPage;
