import React, { Component } from 'react';

class Counter extends Component {
  state = { count: 0 };

    render() {
        return (
          <div>
            <h1>{this.foratCount()}</h1>
            <button>Inc</button>
          </div>
        );
    }

    foratCount(){
      const {count} = this.state;
      return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;