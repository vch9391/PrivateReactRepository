import React, { Component } from 'react';

class Counter extends Component {
  value = { count: this.props.value };

   handleIncrement = (product) => {
    console.log(product);
    this.setState({value: this.value.count+1});
  }
    render() {
        return (
          <div>
            <h1 className="badge badge-primary m-2">{this.foratCount()}</h1>
            <button onClick={()=>this.handleIncrement({id:1})} className="btn btn-secondary btn-sm">Inc</button>
          </div>
        );
    }

    foratCount(){
      const {count} = this.value;
      return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;