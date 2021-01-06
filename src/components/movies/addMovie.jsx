import React, { Component } from "react";
import Joi from "joi-browser";

import { saveMovie, getMovieById } from "../../services/MovieService";

import { toast } from "react-toastify";
import axios from "axios";

axios.interceptors.response.use(null, error => {
  console.log("interceptor called");
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("logging error", error);
    toast.error("an unexpected error occur");
  }
  return Promise.reject(error);
});

class AddMovie extends Component {
  state = {
    movie: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    errors: {}
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    if (id === undefined) {
      return;
    }
    try {
      const { data } = await getMovieById(id);
      this.setState({ movie: this.mapToViewModel(data) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.info("Post is already deleted or post not exist");
        this.props.history.replace("/not-found");
        return;
      } else {
        console.log("====Unexecpted");
      }
    }
  }

  saveMapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genreId,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
      // liked: movie.liked
    };
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
      // liked: movie.liked
    };
  }

  schema = {
    id: Joi.number(),
    title: Joi.string().required(),
    genreId: Joi.string().required(),
    numberInStock: Joi.number().min(0).max(100).required(),
    dailyRentalRate: Joi.number().min(0).max(10).required()
  };

  handleChange = ({ currentTarget: Input }) => {
    const movie = this.state.movie;
    movie[Input.name] = Input.value;
    this.setState({ movie: movie });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const errors = this.validate();
    if (errors) {
      this.setState({ errors: errors });
      return;
    }
    const { data } = await saveMovie(this.saveMapToViewModel(this.state.movie));
    this.props.history.push("/movies");
    this.setState({ errors: {} });
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.movie, this.schema, options);
    const errors = {};
    if (error) {
      for (let err of error.details) {
        if (err.path[0] === "_id") {
        } else {
          errors[err.path[0]] = err.message;
        }
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
            <label htmlFor="genreId">Genre --{movie.genreId}</label>
            <select
              className="form-control"
              name="genreId"
              value={movie.genreId}
              onChange={this.handleChange}
            >
              <option>Select Genre</option>

              <option value="5ff56cab536bf43254e5315f">Romance</option>
              <option value="5ff56cab536bf43254e5315b">Action</option>
              <option value="5ff56cab536bf43254e53163">Thriller</option>
              <option value="5ff56cab536bf43254e53157">Comedy</option>
            </select>
            {errors.genre ? (
              <div className="alert alert-danger">{errors.genre}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label htmlFor="numberInStock">Number in Stock</label>
            <input
              type="text"
              name="numberInStock"
              className="form-control"
              id="numberInStock"
              value={movie.numberInStock}
              onChange={this.handleChange}
            />
            {errors.numberInStock ? (
              <div className="alert alert-danger">{errors.numberInStock}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label htmlFor="dailyRentalRate">Rate</label>
            <input
              type="text"
              name="dailyRentalRate"
              className="form-control"
              id="dailyRentalRate"
              value={movie.dailyRentalRate}
              onChange={this.handleChange}
            />
            {errors.dailyRentalRate ? (
              <div className="alert alert-danger">{errors.dailyRentalRate}</div>
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
