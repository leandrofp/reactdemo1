import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

class Listaclubes extends Component {

  
  constructor(props) {
    super(props);
    
      }

   
  render() {
    //console.log(this.state.value);
    return (
      <div>
   
   {this.props.lalista.map( (m) => 
       <Card>
    <Image src={m.url} />
    <Card.Content>
      <Card.Header>
      {m.club}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Fundo en {m.año}
        </span>
      </Card.Meta>
   
   </Card.Content>
 
  </Card>
  )}
       </div>
    );
  }
}

export default Listaclubes;