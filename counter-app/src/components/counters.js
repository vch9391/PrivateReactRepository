import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    values = {
        counters : [
            { id: 1, count: 0 },
            { id: 2, count: 4 },
            { id: 3, count: 0 },
            { id: 4, count: 0 },
            { id: 4, count: 0 }
        ]
    };

    render() {
        return (
            <div>
                {this.values.counters.map( o => <Counter key={o.id} count={o.count} selectrd={true} />)}
            </div>
        );
    }
}
   
export default Counters;