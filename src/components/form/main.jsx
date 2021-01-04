import React, { Component } from 'react';
import Counters from './counters';
import NavBar from './navBar';

class Main extends Component {
    state = {
        counters: [
          {
            id: 1,
            value: 0
          },
          {
            id: 2,
            value: 4
          }
        ]
      };
    
      handleDelete = counterId => {
        const newCounter = this.state.counters.filter(
          counter => counter.id !== counterId
        );
        this.setState({ counters: newCounter });
      };
    
      handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
      };
    
      handleReset = () => {
        const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
        });
        this.setState({ counters });
      };
    render() { 
        return ( 
            <React.Fragment>
                <NavBar totalCount={this.state.counters.length} />
                <Counters
                    onDelete={this.handleDelete}
                    onReset = {this.handleReset}
                    onIncrement = {this.handleIncrement}
                    counters={this.state.counters}
                />
            </React.Fragment>
         );
    }
}
 
export default Main;