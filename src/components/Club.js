import React, { Component } from 'react';


class Club extends Component {

  constructor(props){
  super(props);
  
  }

  render() {
    return (
      <div className="Club">
      

        <h1> {this.props.club}</h1>

        <img src ={this.props.url} />


      </div>
    );
  }
}

export default Club;