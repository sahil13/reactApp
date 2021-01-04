import React, { Component } from "react";
import Pagination from "../../common/pagination";
import _ from "lodash";
import MovieList from "./movieList";
import { paginate } from "../../utils/paginate";
import ListGroup from "../../common/listGroup";

class Movie extends Component {
  state = {
    movies: [
      {
        id: 1,
        title: "DDLJ",
        genre: "Romance",
        stock: 7,
        rate: 5,
        liked: true
      },
      {
        id: 2,
        title: "Hum Apke hai kon",
        genre: "Romance",
        stock: 8,
        rate: 4,
        liked: true
      },
      {
        id: 3,
        title: "DON",
        genre: "Action",
        stock: 2,
        rate: 3.5,
        liked: false
      },
      {
        id: 4,
        title: "wanted",
        genre: "Action",
        stock: 9,
        rate: 4,
        liked: true
      },
      {
        id: 5,
        title: "BodyGaurd",
        genre: "Thriller",
        stock: 8,
        rate: 5,
        liked: false
      }
    ],
    pageNumber: 1,
    selectedGenre: ""
  };

  handleLike = movie1 => {
    const moviesArr = [...this.state.movies];
    const index = this.state.movies.indexOf(movie1);

    const arr = moviesArr[index];
    arr.liked = !arr.liked;
    this.state.movies[index] = arr;
    const movies = this.state.movies;
    this.setState({ movies });
  };

  handleDelete = id => {
    const newMoviesArr = this.state.movies.filter(movie => movie.id !== id);
    this.setState({ movies: newMoviesArr });
  };

  filterMovies = genre => {
    this.setState({ selectedGenre: genre });
  };

  handlePagination = pageNo => {
    this.setState({ pageNumber: pageNo });
  };

  render() {
    const { movies: allMovies, pageNumber, selectedGenre } = this.state;

    const filtered = selectedGenre
      ? allMovies.filter(movies => movies.genre === selectedGenre)
      : allMovies;

    console.log(pageNumber, "==", filtered);

    const pageSize = 2;

    const paginateMovies = paginate(filtered, pageNumber, pageSize);

    return (
      <React.Fragment>
        <div className="col-md-3">
          <ListGroup filterMovies={this.filterMovies} />
        </div>
        <div className="col-md-9">
          
          <MovieList
            movies={paginateMovies}
            onMovieLiked={this.handleLike}
            onDelete={this.handleDelete}
          />
          <Pagination
            totalRecords={filtered.length}
            noOfRecordsOnPage={pageSize}
            onpagination={this.handlePagination}
            currPage={pageNumber}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Movie;
