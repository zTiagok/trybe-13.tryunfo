import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick, cardClass, hasTrunfo } = this.props;

    const superTrunfo = (
      <label htmlFor="newAgentSuper">
        {'Super Trunfo: '}
        <input
          checked={ cardTrunfo }
          onChange={ onInputChange }
          type="checkbox"
          name="newAgentSuper"
          id="newAgentSuper"
          data-testid="trunfo-input"
        />
      </label>
    );

    return (
      <>
        <form id="newAgentForm">
          {/* NOME-------------------------------------------------------------------------------- */}
          <label htmlFor="newAgentName">
            {'Agente: '}
            <input
              value={ cardName }
              onChange={ onInputChange }
              type="text"
              name="newAgentName"
              id="newAgentName"
              data-testid="name-input"
              placeholder="Omen"
              required
            />
          </label>
          <br />
          {/* DESC-------------------------------------------------------------------------------- */}
          <label htmlFor="newAgentDesc">
            {'Descrição: '}
            <input
              value={ cardDescription }
              onChange={ onInputChange }
              type="textarea"
              name="newAgentDesc"
              id="newAgentDesc"
              data-testid="description-input"
              placeholder="Agente com habilidades das sombras."
              required
            />
          </label>
          <br />
          {/* CLASSE-------------------------------------------------------------------------------- */}
          <label htmlFor="newAgentClass">
            {'Classe: '}
            <select
              value={ cardClass }
              onChange={ onInputChange }
              name="newAgentClass"
              id="newAgentClass"
              required
            >
              <option value="Iniciador">Iniciador</option>
              <option value="Sentinela">Sentinela</option>
              <option value="Duelista">Duelista</option>
              <option value="Controlador">Controlador</option>
            </select>
          </label>
          <br />
          {/* VELOCIDADE---------------------------------------------------------------------------- */}
          <label htmlFor="newAgentAttr1">
            {'Velocidade: '}
            <input
              value={ cardAttr1 }
              onChange={ onInputChange }
              type="number"
              name="newAgentAttr1"
              id="newAgentAttr1"
              data-testid="attr1-input"
              min="1"
              max="10"
              placeholder="1"
              required
            />
          </label>
          <br />
          {/* INTELIGÊNCIA-------------------------------------------------------------------------- */}
          <label htmlFor="newAgentAttr2">
            {'Inteligência: '}
            <input
              value={ cardAttr2 }
              onChange={ onInputChange }
              type="number"
              name="newAgentAttr2"
              id="newAgentAttr2"
              data-testid="attr2-input"
              min="1"
              max="10"
              placeholder="1"
              required
            />
          </label>
          <br />
          {/* TÉCNICA------------------------------------------------------------------------------- */}
          <label htmlFor="newAgentAttr3">
            {'Técnica: '}
            <input
              value={ cardAttr3 }
              onChange={ onInputChange }
              type="number"
              name="newAgentAttr3"
              id="newAgentAttr3"
              data-testid="attr3-input"
              min="1"
              max="10"
              placeholder="1"
              required
            />
          </label>
          <br />
          {/* IMAGEM-------------------------------------------------------------------------------- */}
          <label htmlFor="newAgentPicture">
            {'Imagem (URL): '}
            <input
              value={ cardImage }
              onChange={ onInputChange }
              type="text"
              name="newAgentPicture"
              id="newAgentPicture"
              data-testid="image-input"
              placeholder="https://image.com/image"
              required
            />
          </label>
          <br />
          {/* RARIDADE------------------------------------------------------------------------------ */}
          <label htmlFor="newAgentRarity">
            {'Raridade: '}
            <select
              value={ cardRare }
              onChange={ onInputChange }
              name="newAgentRarity"
              id="newAgentRarity"
              data-testid="rare-input"
              required
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <br />
          {/* SUPERTRUNFO--------------------------------------------------------------------------- */}
          {hasTrunfo
            ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : superTrunfo}
        </form>

        <button
          disabled={ isSaveButtonDisabled }
          type="submit"
          form="newAgentForm"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  cardClass: PropTypes.string.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
