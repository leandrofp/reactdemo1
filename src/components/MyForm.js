import React, { Component } from 'react';
import Club from './Club';
import { Button, Form } from 'semantic-ui-react'


class MyForm extends Component {

    constructor(props){
    super(props);
     this.state = {nombre: '',apellido: '',sexo: '',club: '',url: ''};
    }
  
    setHandler = (event) => {
      this.setState({[event.target.name]: event.target.value});  // name:value
      
    
    }
    submitHandler = (event) => {
      if(this.state.club==='boca') this.setState({url: 'http://a.espncdn.com/i/teamlogos/soccer/500/5.png' });
      if(this.state.club==='river') this.setState({url: 'http://a.espncdn.com/i/teamlogos/soccer/500/16.png'});
      event.preventDefault();
    }
    
    render() {
      return (
        <div className="App">
          <Form onSubmit={this.submitHandler}>
            <Form.Field>
              <label>nombre:
              <input type="text" name="nombre" value={this.state.nombre} onChange={this.setHandler} />
              </label>
            </Form.Field>
            <Form.Field>
              <label>apellido:
              <input type="text" name="apellido" value={this.state.apellido} onChange={this.setHandler} />
              </label>
            </Form.Field>
            <Form.Field>
              <label>sexo:
              <input type="text" name="sexo" value={this.state.sexo} onChange={this.setHandler} />
              </label>
            </Form.Field>
            <Form.Field>
              <label>club:
              <input type="text" name="club" value={this.state.club} onChange={this.setHandler} />
              </label>
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
  
          {/* <Club club={this.state.club} url={this.state.url}/> */}
  
        </div>
      );
    }
  }
  
  export default MyForm;