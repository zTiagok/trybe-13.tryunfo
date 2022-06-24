import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      stateName: 'Agente',
    };
  }

  changeState = (origin, cardName) => {
    const { target } = origin;

    if (target.value === cardName) {
      this.setState({ stateName: target.value });
    }
  }

  render() {
    const { stateName } = this.state;
    return (
      <div>
        <h1>Valorant Trunfo</h1>
        <Form
          onInputChange={ this.changeState }
          cardName="oi"
        />
        <Card cardName={ stateName } />
      </div>
    );
  }
}

export default App;
