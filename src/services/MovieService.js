import axios from "axios";

export function getMovies() {
  return axios.get("http://localhost:3900/api/movies");
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    const a = axios.put("http://localhost:3900/api/movies/" + movie._id, body);
    // console.log("data===",a);return;
    return a;
  }

  /* if (movie.id) {
    const id = movie.id;
    const movie1 = getMovieById(id);
    movie1.title = movie.title;
  } else {
    const len = allMovies.length;
    movie.id = len + 1;
    allMovies.push(movie);
  } */
  //   console.log("in movie service = ", movie);
}

export function getMovieById(id) {
  return axios.get("http://localhost:3900/api/movies/" + id);
}
