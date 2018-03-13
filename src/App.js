import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
  super(props);
  this.state = {nombre: '',apellido: '',sexo: '',club: '',url: '' };

  //this.setHandler = this.setHandler.bind(this);
  //this.submitHandler = this.submitHandler.bind(this);

  }

  /*
  setHandler = (event) => {
    this.setState({[event.target.name]:event.target.value});
  }
  summitHandler = (event) => {    
  }
*/

  setHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});  // name:value
    //if(this.state.club==='boca') this.setState({url: 'http://a.espncdn.com/i/teamlogos/soccer/500/5.png' });
    //if(this.state.club==='river') this.setState({url: 'http://a.espncdn.com/i/teamlogos/soccer/500/16.png'});
  }
  submitHandler = (event) => {
    if(this.state.club==='boca') this.setState({url: 'http://a.espncdn.com/i/teamlogos/soccer/500/5.png' });
    if(this.state.club==='river') this.setState({url: 'http://a.espncdn.com/i/teamlogos/soccer/500/16.png'});
    event.preventDefault();
  }


  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
          <label>nombre:
          <input type="text" name="nombre" value={this.state.nombre} onChange={this.setHandler} />
          </label>
          <label>apellido:
          <input type="text" name="apellido" value={this.state.apellido} onChange={this.setHandler} />
          </label>
          <label>sexo:
          <input type="text" name="sexo" value={this.state.sexo} onChange={this.setHandler} />
          </label>
          <label>club:
          <input type="text" name="club" value={this.state.club} onChange={this.setHandler} />
          </label>
          <input type="submit" value={this.club}/>
        </form>

        <h1> {this.state.club}</h1>

        <img src ={this.state.url} />


      </div>
    );
  }
}

export default App;
