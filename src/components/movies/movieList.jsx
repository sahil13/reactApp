import React, { Component } from "react";

import Like from "../../common/like";
import { Link } from "react-router-dom";

class MovieList extends Component {
  render() {
    return (
      <div className="col-md-8">
        <div className="m-2">
          showing {this.props.movies.length} in the Database
        </div>

        <table className="table table-stripped">
          <thead>
            <tr>
              <td>Title</td>
              <td>Genre</td>
              <td>Stock</td>
              <td>Rating</td>
              <td></td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {this.props.movies.map(movie => {
              return (
                <tr key={movie.id}>
                  <td>
                    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                  </td>
                  <td>{movie.genre}</td>
                  <td>{movie.stock}</td>
                  <td>{movie.rate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onMovieLiked={this.props.onMovieLiked}
                      movie={movie}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.props.onDelete(movie.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieList;
