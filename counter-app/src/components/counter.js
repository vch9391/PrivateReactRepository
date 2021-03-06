import React, { Component } from 'react';

class Counter extends Component {

  render() {
    return (
    <div>
      <span className={this.getBadgeClasses()}>{this.foratCount()}</span>
      <button onClick={()=>this.props.onIncrement(this.props.counter)} 
              className="btn btn-secondary btn-sm m-2">
        Increment
      </button>
      <button onClick={()=>this.props.onDelete(this.props.counter.id)} 
              className="btn btn-danger btn-sm m-2">
        Delete
      </button>
    </div>
    );
  }
  
  foratCount(){
    const {count} = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
  
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.count === 0 ? "warning" : "primary";
    return classes;
  }
}
 
export default Counter;