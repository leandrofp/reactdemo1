import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import Club from './Club';
import Listaclubes from './Listaclubes';
class MyForm extends Component {

  
    constructor(props) {
      super(props);
  
      this.state = {nombre: '',
      apellido: '',
      sexo: '',
      club: '',
      url:'' };
  
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
      
        }
  
        
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
     // console.log(event.target.value + event.target.name);
     
    }
  
    handleSubmit(event) {
      if (this.state.club==='boca')  this.setState({url: 'http://a.espncdn.com/i/teamlogos/soccer/500/5.png'});
      if (this.state.club==='river')  this.setState({url: 'http://a.espncdn.com/i/teamlogos/soccer/500/16.png'});
      if (this.state.club==='racing')  this.setState({url: 'http://a.espncdn.com/i/teamlogos/soccer/500/15.png'});
      event.preventDefault();
    }
  
     
    render() {
      //console.log(this.state.value);
      return (         <Form onSubmit={this.handleSubmit}>
    
        <Form.Field>
            <label>
              Nombre:
              <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange} />
            </label>
        </Form.Field>
        <Form.Field>
            <label>
               Apellido:
              <input type="text" name="apellido" value={this.state.apellido} onChange={this.handleChange} />
            </label>
            </Form.Field>
        <Form.Field>
            <label>
              Sexo:
              <input type="text" name="sexo" value={this.state.sexo} onChange={this.handleChange} />
            </label>
            </Form.Field>
            <Form.Field>
            <label>
              Club:
              <input type="text" name="club" value={this.state.club} onChange={this.handleChange} />
            </label>
       
            </Form.Field>
            <Form.Field>
            <Club club={this.state.club} url={this.state.url} />
            </Form.Field>
            <Button  type="submit">Submit</Button>
            <Form.Field>
            <Listaclubes lalista={this.props.lalista} />
            </Form.Field>
  
  
          </Form>
  
                 
      );
    }
  }
  
  export default MyForm;