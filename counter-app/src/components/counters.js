import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = {
        counters : [
            { id: 1, count: 0 },
            { id: 2, count: 4 },
            { id: 3, count: 0 },
            { id: 4, count: 0 },
            { id: 5, count: 0 }
        ]
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
        const counters2 = this.state.counters.map(o => { 
            o.count = 0; 
            return o 
        });
        this.setState({ counters: counters2 });
    };

    render() {
        return (
            <div>
                <button onClick={()=>this.handleReset()}
                        className="btn btn-secondary btn-sm m-2">
                            ReSet
                </button>
                {this.state.counters.map( o => <Counter key={o.id} counter={o} 
                            onDelete={this.handleDelete} 
                            onIncrement={this.handleIncrement}/>)}
            </div>
        );
    }
}
   
export default Counters;