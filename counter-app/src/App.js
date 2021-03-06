import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
    state = {
      counters : [
          { id: 1, count: 0 },
          { id: 2, count: 0 },
          { id: 3, count: 0 },
          { id: 4, count: 0 },
          { id: 5, count: 0 }]
    };

    handleIncrement = (counter) => {
        const counters2 = [...this.state.counters];
        const index = counters2.indexOf(counter);
        counters2[index] = {...counter};
        counters2[index].count++;
        this.setState({ counters: counters2 });
    }

    handleDelete = (counterId) => {
        console.log("counterId",counterId);
        const counters = this.state.counters.filter(o => o.id !== counterId);
        this.setState({counters:counters});
    }

    handleReset = () => {
      const counters = this.state.counters.map(o => { 
            o.count = 0; 
            return o 
        });
        this.setState({ counters });
    };

    render() {
      return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(o => o.count > 0 ).length}/>
        <main className="container">
          <Counters onIncrement={this.handleIncrement} 
                    onDelete={this.handleDelete} 
                    onReset={this.handleReset}
                    counters={this.state.counters}/>
        </main>
      </React.Fragment>
      );
    }
}

export default App;
