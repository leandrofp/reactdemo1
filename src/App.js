import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Icon, Image } from 'semantic-ui-react';
import MyForm from './components/MyForm';

class App extends Component {

  constructor(props){
  super(props);
  
  this.state = { clubes: [{"club": "river", "año": "1905","url" : "http://a.espncdn.com/i/teamlogos/soccer/500/16.png"},
      {"club": "boca", "año": "1906", "url" : "http://a.espncdn.com/i/teamlogos/soccer/500/5.png"},
      {"club": "racing", "año": "1908", "url" : "http://a.espncdn.com/i/teamlogos/soccer/500/15.png"} ,
      {"club": "independiente" , "año": "1905" , "url" : "https://www.ogol.com.br/img/logos/equipas/2211_imgbank.png"}]};

  }

  render() {
    return (
      <div className="App">
       
        <MyForm/>
        {/*Recorre todo*/}
        {this.state.clubes.map( (m) => 
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
        {/*solo posicion 0*/}
        <Card>
          <Image src={this.state.clubes[0].url} />
          <Card.Content>
            <Card.Header>
            {this.state.clubes[0].club}
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Fundo en {this.state.clubes[0].año}
              </span>
            </Card.Meta>
          </Card.Content>
       
        </Card>
      </div>
    );
  }
}

export default App;
