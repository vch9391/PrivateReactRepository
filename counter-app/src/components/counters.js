import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    render() {
        const {counters, onReset,onDelete,onIncrement} = this.props;
        return (
            <div>
                <button onClick={onReset}
                        className="btn btn-secondary btn-sm m-2">
                            ReSet
                </button>
                {counters.map( o => <Counter key={o.id} counter={o} 
                            onDelete={onDelete} 
                            onIncrement={onIncrement}/>)}
            </div>
        );
    }
}
   
export default Counters;