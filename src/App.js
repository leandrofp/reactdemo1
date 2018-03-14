import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm';

class App extends Component {

  
  constructor(props) {
    super(props);
   
    this.state = { clubes: [{"club": "river", "año": "1905","url" : "http://a.espncdn.com/i/teamlogos/soccer/500/16.png"},
    {"club": "boca", "año": "1906", "url" : "http://a.espncdn.com/i/teamlogos/soccer/500/5.png"},
    {"club": "racing", "año": "1908", "url" : "http://a.espncdn.com/i/teamlogos/soccer/500/15.png"}]};
   
  }

  render() {
  console.log(this.state);
    return (
      <div>
  
       <MyForm lalista={this.state.clubes}/>
                
       </div>
    );
  }
}

export default App;