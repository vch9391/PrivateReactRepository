import React, { Component } from 'react';

class Counter extends Component {
  state = { count: this.props.count };
  
  handleIncrement = (product) => {
    console.log(product);
    this.setState({count: this.state.count+1});
  }
  
  render() {
    return (
    <div>
      <span className={this.getBadgeClasses()}>{this.foratCount()}</span>
      <button onClick={()=>this.handleIncrement({id:1})} 
              className="btn btn-secondary btn-sm m-2">
        Increment
      </button>
      <button onClick={()=>this.props.onDelete(this.props.id)} 
              className="btn btn-danger btn-sm m-2">
        Delete
      </button>
    </div>
    );
  }
  
  foratCount(){
    const {count} = this.state;
    return count === 0 ? "Zero" : count;
  }
  
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}
 
export default Counter;