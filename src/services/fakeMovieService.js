const allMovies = [
  {
    id: 1,
    title: "DDLJ",
    genre: "Romance",
    stock: 7,
    rate: 5,
    liked: 1
  },
  {
    id: 2,
    title: "Hum Apke hai kon",
    genre: "Romance",
    stock: 8,
    rate: 4,
    liked: 1
  },
  {
    id: 3,
    title: "DON",
    genre: "Action",
    stock: 2,
    rate: 3.5,
    liked: 0
  },
  {
    id: 4,
    title: "wanted",
    genre: "Action",
    stock: 9,
    rate: 4,
    liked: 1
  },
  {
    id: 5,
    title: "BodyGaurd",
    genre: "Thriller",
    stock: 8,
    rate: 5,
    liked: 0
  }
];

export function getMovies() {
  return allMovies;
}

export function saveMovie(movie) {
  if (movie.id) {
    const id = movie.id;
    const movie1 = getMovieById(id);
    movie1.title = movie.title;
  } else {
    const len = allMovies.length;
    movie.id = len+1;
    allMovies.push(movie);
  }
  //   console.log("in movie service = ", movie);
}

export function getMovieById(id) {
  const movieId = +id;
  return allMovies.find(movie => movie.id === movieId);
}
