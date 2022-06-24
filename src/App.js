import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  changeState = () => {

  }

  render() {
    return (
      <div>
        <h1>Valorant Trunfo</h1>
        <Form onInputChange={ this.changeState } />
        <Card />
      </div>
    );
  }
}

export default App;
