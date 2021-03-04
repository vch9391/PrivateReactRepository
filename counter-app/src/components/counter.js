import React, { Component } from 'react';

class Counter extends Component {
  state = { 
    count: 0,
    tags:["tag1","tag2","tag3"]
  
  };

    render() {
        return (
          <div>
            <h1 className={this.getBadgeClasses()}>{this.foratCount()}</h1>
            <button className="btn btn-secondary btn-sm">Inc</button>
            <ui>{this.state.tags.map(o=> <li key={o}> {o} </li> )}</ui>
          </div>
        );
    }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

    foratCount(){
      const {count} = this.state;
      return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;