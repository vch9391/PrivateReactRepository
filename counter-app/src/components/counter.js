import React, { Component } from 'react';

class Counter extends Component {
  state = { count: 0 };

    render() {
        return (
          <div>
            <h1 className="badge badge-primary m-2">{this.foratCount()}</h1>
            <button className="btn btn-secondary btn-sm">Inc</button>
          </div>
        );
    }

    foratCount(){
      const {count} = this.state;
      return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;