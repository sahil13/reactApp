import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { onIncrement, onDecrement, counters, onDelete } = this.props;
    return (
      <React.Fragment>
        {counters.map(c => {
          return (
            <div className="col-md-7">
              <label className="m-2">{c.value}</label>
              <i className="fa fa-plus m-2" onClick={() => onIncrement(c)}></i>
              <i className="fa fa-minus m-2" onClick={() => onDecrement(c)}></i>
              <i className="fa fa-trash m-2" onClick={() => onDelete(c.id)}></i>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Counter;
