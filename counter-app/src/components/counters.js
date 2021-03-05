import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    value = {
        counters : [
            { id: 1, value: 0 },
            { id: 2, value: 4 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    render() {
        return (
            <div>
                {this.value.counters.map( o => <Counter key={o.id} value={o.value} selectrd={true} />)}
            </div>
        );
    }
}
   
export default Counters;