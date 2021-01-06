import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./common/navBar";
import Login from "./components/login/login";
import Customers from "./components/movies/customers";
import Movie from "./components/movies/movies";
import Register from "./components/login/register";
import AddMovie from "./components/movies/addMovie";
import NotFound from "./common/notFound";
import Posts from "./components/sampleApp/posts";
import Employee from "./components/employee/employee";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class DashBoard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-md-12">
          <ToastContainer />
          <NavBar />
        </div>
        <Switch>
          <Route path="/movie/new" component={AddMovie} />
          <Route path="/movies" component={Movie} />
          <Route path="/movie/:id" component={AddMovie} />
          <Route path="/customers" component={Customers} />
          <Route path="/login" component={Login} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/register" component={Register} />
          <Route path="/post" component={Posts} />
          <Route path="/employees" component={Employee} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default DashBoard;
