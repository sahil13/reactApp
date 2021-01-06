import React, { Component } from "react";
import Joi from "joi-browser";

import { saveMovie, getMovieById } from "../../services/fakeMovieService";

class AddMovie extends Component {
  state = {
    movie: {
      title: "",
      genre: "",
      stock: "",
      rate: ""
    },
    errors: {}
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    // console.log("====",id); return false;
    if (id === undefined) {
      return;
    }
    const movie = getMovieById(id);
    if (!movie) {
      this.props.history.replace("/not-found");
      return;
    }
    this.setState({ movie: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      id: movie.id,
      title: movie.title,
      genre: movie.genre,
      stock: movie.stock,
      rate: movie.rate,
      liked: movie.liked
    };
  }

  schema = {
    id: Joi.number(),
    title: Joi.string().required(),
    genre: Joi.string().required(),
    stock: Joi.number().min(0).max(100).required(),
    rate: Joi.number().min(0).max(10).required(),
    liked: Joi.number()
  };

  handleChange = ({ currentTarget: Input }) => {
    const movie = this.state.movie;
    movie[Input.name] = Input.value;
    this.setState({ movie: movie });
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    if (errors) {
      this.setState({ errors: errors });
      return;
    }
    const id = this.state.movie.id;
    saveMovie(this.state.movie);
    this.props.history.push("/movies");
    this.setState({ errors: {} });
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.movie, this.schema, options);
    const errors = {};
    if (error) {
      for (let err of error.details) {
        errors[err.path[0]] = err.message;
      }
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  render() {
    const { movie, errors } = this.state;
    return (
      <div className="col-md-6">
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="title"
              value={movie.title}
              onChange={this.handleChange}
            />
            {errors.title ? (
              <div className="alert alert-danger">{errors.title}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label htmlFor="Genre">Genre</label>
            <select
              className="form-control"
              name="genre"
              value={movie.genre}
              onChange={this.handleChange}
            >
              <option>Select Genre</option>
              <option>Romance</option>
              <option>Action</option>
              <option>Thriller</option>
            </select>
            {errors.genre ? (
              <div className="alert alert-danger">{errors.genre}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label htmlFor="noInStock">Number in Stock</label>
            <input
              type="text"
              name="stock"
              className="form-control"
              id="stock"
              value={movie.stock}
              onChange={this.handleChange}
            />
            {errors.stock ? (
              <div className="alert alert-danger">{errors.stock}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label htmlFor="rate">Rate</label>
            <input
              type="text"
              name="rate"
              className="form-control"
              id="rate"
              value={movie.rate}
              onChange={this.handleChange}
            />
            {errors.rate ? (
              <div className="alert alert-danger">{errors.rate}</div>
            ) : (
              ""
            )}
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
