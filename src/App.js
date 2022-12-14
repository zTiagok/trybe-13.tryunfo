import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import agents from './components/Agents';
import './App.css';

// TO DO LIST
// FAZER UM SLIDER NOS ATRIBUTOS DO AGENTE
// LIMITAR NO <FORM> A QUANTIDADE DE CARACTERES PARA O NOME
// TIRAR CORES TRANSPARENTES NO CSS DO <CARD>

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      stateName: '',
      stateDesc: '',
      stateAttr1: '0',
      stateAttr2: '0',
      stateAttr3: '0',
      stateRare: 'Normal',
      stateTrunfo: '',
      stateClass: 'Iniciador',
      stateImage: '',
      hasTrunfo: false,
      cardArray: [],
      deleteCard: '',
    };
  }

  changeState = (origin) => {
    const { target } = origin;
    const className = 'agent-description-title-noimage';

    if (target.name === 'newAgentPicture') {
      const form = document.querySelector('#card-form');
      const description = form.querySelector('.agent-description-title');

      if (description.classList.contains(className)) {
        description.classList.remove(className);
      } else {
        description.classList.add(className);
      }
    }

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
    case 'newAgentClass': this.setState({ stateClass: target.value });
      break;
    case 'newAgentPicture': this.setState({ stateImage: target.value });
      break;
    default: console.log('Error');
    }
  }

  deleteHandler = (origin) => {
    this.setState({ deleteCard: origin });

    if (origin.target.parentElement.innerHTML.includes('Super Trunfo')) {
      this.setState({ hasTrunfo: false });
    }
  };

  saveChanges = (origin) => {
    origin.preventDefault();
    const { stateTrunfo, stateName, stateDesc, stateImage, stateAttr1,
      stateAttr2, stateAttr3, stateClass, stateRare } = this.state;

    if (stateTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }

    const cardInfo = {
      stateName,
      stateDesc,
      stateImage,
      stateAttr1,
      stateAttr2,
      stateAttr3,
      stateClass,
      stateRare,
      stateTrunfo,
    };

    const newArray = [];

    newArray.push(<Card
      cardName={ cardInfo.stateName }
      cardDescription={ cardInfo.stateDesc }
      cardClass={ cardInfo.stateClass }
      cardAttr1={ cardInfo.stateAttr1 }
      cardAttr2={ cardInfo.stateAttr2 }
      cardAttr3={ cardInfo.stateAttr3 }
      cardRare={ cardInfo.stateRare }
      cardTrunfo={ cardInfo.stateTrunfo }
      cardImage={ cardInfo.stateImage }
      deleteButton
      deleteEvent={ this.deleteHandler }
    />);

    this.setState((prevState) => ({
      stateName: '',
      stateDesc: '',
      stateImage: '',
      stateAttr1: '0',
      stateAttr2: '0',
      stateAttr3: '0',
      stateClass: 'Iniciador',
      stateRare: 'Normal',
      cardArray: [...prevState.cardArray, newArray],
    }));
  };

  render() {
    const { stateName, stateDesc, stateAttr1,
      stateAttr2, stateAttr3, stateTrunfo, stateRare,
      stateClass, stateImage, hasTrunfo, cardArray, deleteCard } = this.state;

    const agentsCards = agents;

    let button = true;
    const greaterThan = 90;
    const minorThan = 0;
    const stateSum = parseInt(stateAttr1, 10)
      + parseInt(stateAttr2, 10) + parseInt(stateAttr3, 10);
    const stateMax = 210;

    if (stateName === '' || stateImage === '' || stateDesc === ''
      || stateAttr1 > greaterThan || stateAttr1 < minorThan
      || stateAttr2 > greaterThan || stateAttr2 < minorThan
      || stateAttr3 > greaterThan || stateAttr3 < minorThan
      || stateSum > stateMax) {
      button = true;
    } else {
      button = false;
    }

    if (deleteCard !== '') {
      deleteCard.target.parentElement.remove();
    }

    return (
      <div>
        <h1 id="title">Valorant Trunfo</h1>
        <h3 id="subtitle">Crie seu agente</h3>
        <div id="card-form">
          <Form
            onInputChange={ this.changeState }
            isSaveButtonDisabled={ button }
            onSaveButtonClick={ this.saveChanges }
            cardName={ stateName }
            cardDescription={ stateDesc }
            cardClass={ stateClass }
            cardAttr1={ stateAttr1 }
            cardAttr2={ stateAttr2 }
            cardAttr3={ stateAttr3 }
            cardRare={ stateRare }
            cardTrunfo={ stateTrunfo }
            cardImage={ stateImage }
            hasTrunfo={ hasTrunfo }
          />
          <div id="card-creator">
            <Card
              cardName={ stateName }
              cardDescription={ stateDesc }
              cardClass={ stateClass }
              cardAttr1={ stateAttr1 }
              cardAttr2={ stateAttr2 }
              cardAttr3={ stateAttr3 }
              cardRare={ stateRare }
              cardTrunfo={ stateTrunfo }
              cardImage={ stateImage }
            />
          </div>
        </div>
        <h1 id="card-box-title">Agentes</h1>
        <div id="card-box">
          {cardArray}
          {agentsCards}
        </div>
        <div id="footer">
          <div id="footer-legend">
            <div id="footer-attr1-symbol" />
            <p id="footer-attr1-text"> Velocidade </p>
            <div id="footer-attr2-symbol" />
            <p id="footer-attr2-text"> Intelig??ncia </p>
            <div id="footer-attr3-symbol" />
            <p id="footer-attr3-text"> T??cnica </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
