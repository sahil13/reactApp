import React, { Component } from "react";
import Counter from "./counter";

class Cart extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  increment = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value = counters[index].value + 1;
    this.setState({ counters });
  };
  decrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value = counters[index].value - 1;
    this.setState({ counters });
  };
  handleDelete = counterId => {
    const counters = this.state.counters;
    const filter = counters.filter(c => c.id !== counterId);
    this.setState({ counters: filter });
  };
  render() {
    const { counters } = this.state;
    const totalCount = counters.filter(c => c.value > 0).length;
    return (
      <React.Fragment>
        <div className="col-md-12"> total = {totalCount}</div>
        <Counter
          counters={counters}
          onDecrement={this.decrement}
          onIncrement={this.increment}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default Cart;
