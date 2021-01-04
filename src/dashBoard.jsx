import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./common/navBar";
import Login from "./components/login/login";
import Customers from "./components/movies/customers";
import Movie from "./components/movies/movies";
import Register from './components/login/register';

class DashBoard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-md-12">
          <NavBar />
        </div>
        <Switch>         
          <Route path="/customers" component={Customers} />
          <Route path="/movies" component={Movie} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={DashBoard} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default DashBoard;
