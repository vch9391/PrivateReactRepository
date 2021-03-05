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

    handleDelete = (counterId) => {
        console.log("counterId",counterId);
        const counters = this.state.counters.filter(o => o.id !== counterId);
        this.setState({counters:counters});
    }

    render() {
        return (
            <div>
                {this.state.counters.map( o => <Counter key={o.id} counter={o} onDelete={this.handleDelete}/>)}
            </div>
        );
    }
}
   
export default Counters;