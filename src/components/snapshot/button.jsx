import React, { Component } from "react";

class Button extends Component {
  render() {
    const { label, func } = this.props;
    return (
      <React.Fragment>
        <button className="btn btn-info btn-sm m-2" onClick={() => func(label)}>
          {label}
          </button>
        </React.Fragment>
    );
  }
}

export default Button;
