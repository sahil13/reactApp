import React, { Component } from "react";

class ListGroup extends Component {
  state = {};
  render() {
    return (
      <ul className="list-group m-2">
        <li className="list-group-item">All Genre</li>
        <li
          className="list-group-item"
          onClick={() => this.props.filterMovies("Action")}
        >
          Action
        </li>
        <li
          className="list-group-item"
          onClick={() => this.props.filterMovies("Romance")}
        >
          Romance
        </li>
        <li
          className="list-group-item"
          onClick={() => this.props.filterMovies("Thriller")}
        >
          Thriller{" "}
        </li>
      </ul>
    );
  }
}

export default ListGroup;
