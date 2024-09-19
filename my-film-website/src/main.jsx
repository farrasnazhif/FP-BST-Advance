import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import FilmPage from "./pages/film.jsx";
import BuyTicketPage from "./pages/buyticket.jsx";
import { Provider } from 'react-redux';
import store from './redux/store.js'


const router = createBrowserRouter([

  {
    path: "/",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/Register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "/Movies",
    element: <FilmPage/>
  },
  {
    path: "/BuyTicket",
    element: <BuyTicketPage></BuyTicketPage>,
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);




