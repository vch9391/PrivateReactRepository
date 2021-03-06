import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onReset}
                        className="btn btn-secondary btn-sm m-2">
                            ReSet
                </button>
                {this.props.counters.map( o => <Counter key={o.id} counter={o} 
                            onDelete={this.props.onDelete} 
                            onIncrement={this.props.onIncrement}/>)}
            </div>
        );
    }
}
   
export default Counters;