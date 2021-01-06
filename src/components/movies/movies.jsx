import React, { Component } from "react";
import Pagination from "../../common/pagination";
import _ from "lodash";
import MovieList from "./movieList";
import { paginate } from "../../utils/paginate";
import ListGroup from "../../common/listGroup";
import { NavLink } from "react-router-dom";
import { getMovies } from "../../services/MovieService";

class Movie extends Component {
  searchElement = React.createRef();
  state = {
    movies: [],
    pageNumber: 1,
    selectedGenre: "",
    searchQuery: ""
  };

  filterList = movieName => {
    const { searchQuery } = this.state;
    this.setState({ searchQuery: movieName });
  };

  async componentDidMount() {
    const { data } = await getMovies();
    // console.log(data);return;
    this.setState({ movies: data });
  }

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
    const newMoviesArr = this.state.movies.filter(movie => movie._id !== id);
    this.setState({ movies: newMoviesArr });
  };

  filterMovies = genre => {
    this.setState({ selectedGenre: genre });
  };

  handlePagination = pageNo => {
    this.setState({ pageNumber: pageNo });
  };

  /* addMovie = () => {
    history.push('/customers')
  }; */

  render() {
    const {
      movies: allMovies,
      pageNumber,
      selectedGenre,
      searchQuery
    } = this.state;

    const filtered = selectedGenre
      ? allMovies.filter(movies => movies.genre === selectedGenre)
      : allMovies;

    const pageSize = 4;

    var paginateMovies = paginate(filtered, pageNumber, pageSize);
    if (searchQuery) {
      paginateMovies = allMovies.filter(m => {
        return searchQuery
          ? m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
          : this.state.movies;
      });
    }

    return (
      <React.Fragment>
        <div className="col-md-3">
          <ListGroup filterMovies={this.filterMovies} />
        </div>
        <div className="col-md-9">
          <div className="col-md-12">
            <NavLink to="/movie/new" className="btn btn-primary">
              Add Movie
            </NavLink>
          </div>

          <div className="col-md-9 m-2">
            <input
              type="text"
              className="form-control"
              name="searchQuery"
              value={this.state.searchQuery}
              onChange={e => this.filterList(e.currentTarget.value)}
            />
          </div>

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
