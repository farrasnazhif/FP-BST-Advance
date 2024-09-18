import axios from "axios";

export const getMovies = (callback) => {
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=3e099320b3621c37816f59823a886759')
  .then((res) => {
      callback(res.data);
    });
};

