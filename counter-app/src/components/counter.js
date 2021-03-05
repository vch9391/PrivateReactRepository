import React, { Component } from 'react';

class Counter extends Component {
  state = { count: 0 };

  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement(){
  //   console.log("Increment called",this);
  // }

   handleIncrement = (product) => {
    console.log(product);
    this.setState({count: this.state.count+1});
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
      const {count} = this.state;
      return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;