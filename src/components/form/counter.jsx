import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };
  render() {
    return (
      <div>
        <span>{this.props.counter.value}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          delete
        </button>
      </div>
    );
  }
}

export default Counter;
