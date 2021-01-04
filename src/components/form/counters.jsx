import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset}>Reset</button>
        {this.props.counters.map(counter => (
          <Counter
            onDelete={this.props.onDelete}
            key={counter.id}
            counter={counter}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
