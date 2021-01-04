import "font-awesome/css/font-awesome.css";
import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        onClick={() => this.props.onMovieLiked(this.props.movie)}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;
