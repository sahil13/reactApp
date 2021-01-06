import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-md-12">Not Found</div>
        <div className="col-md-12">
        <button
          onClick={() => this.props.history.push("/movies")}
          className="btn btn-primary btn-sm"
        >
          Back
        </button>
        </div>
      </React.Fragment>
    );
  }
}

export default NotFound;
