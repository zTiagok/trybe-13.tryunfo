import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      stateName: '',
      stateDesc: '',
      stateAttr1: '',
      stateAttr2: '',
      stateAttr3: '',
      stateRare: '',
      stateTrunfo: '',
    };
  }

  changeState = (origin) => {
    const { target } = origin;

    switch (target.name) {
    case 'newAgentName': this.setState({ stateName: target.value });
      break;
    case 'newAgentDesc': this.setState({ stateDesc: target.value });
      break;
    case 'newAgentAttr1': this.setState({ stateAttr1: target.value });
      break;
    case 'newAgentAttr2': this.setState({ stateAttr2: target.value });
      break;
    case 'newAgentAttr3': this.setState({ stateAttr3: target.value });
      break;
    case 'newAgentRarity': this.setState({ stateRare: target.value });
      break;
    case 'newAgentSuper': this.setState({ stateTrunfo: target.checked });
      break;
    default: console.log('Error');
    }
  }

  render() {
    const { stateName, stateDesc, stateAttr1,
      stateAttr2, stateAttr3, stateTrunfo, stateRare } = this.state;
    return (
      <div>
        <h1>Valorant Trunfo</h1>
        <Form
          onInputChange={ this.changeState }
        />
        <Card
          cardName={ stateName }
          cardDescription={ stateDesc }
          cardAttr1={ stateAttr1 }
          cardAttr2={ stateAttr2 }
          cardAttr3={ stateAttr3 }
          cardRare={ stateRare }
          cardTrunfo={ stateTrunfo }
        />
      </div>
    );
  }
}

export default App;
