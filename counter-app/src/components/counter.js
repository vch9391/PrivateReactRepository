import React, { Component } from 'react';

class Counter extends Component {
  state = { 
    tags:[]
  };
  
  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tags</p>
    return <ui>{this.state.tags.map(o=> <li key={o}> {o} </li> )}</ui>
  }

  render() {
    return (
    <div>
      {this.state.tags.length === 0 && "Please create new Tags"}
      {this.renderTags()}
    </div>
    );
  }
}
 
export default Counter;