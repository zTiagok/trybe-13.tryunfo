import React from 'react';

class Form extends React.Component {
  preventReload = (origin) => {
    origin.preventDefault();
  };

  render() {
    return (
      <>
        <form id="newAgentForm">
          <label htmlFor="newAgentName">
            {'Agente: '}
            <input
              type="text"
              name="newAgentName"
              id="newAgentName"
              data-testid="name-input"
              required
            />
          </label>
          <br />
          <label htmlFor="newAgentDesc">
            {'Descrição: '}
            <input
              type="textarea"
              name="newAgentDesc"
              id="newAgentDesc"
              data-testid="description-input"
              required
            />
          </label>
          <br />
          <label htmlFor="newAgentAttr1">
            {'Velocidade: '}
            <input
              type="number"
              name="newAgentAttr1"
              id="newAgentAttr1"
              data-testid="attr1-input"
              min="1"
              max="10"
              required
            />
          </label>
          <br />
          <label htmlFor="newAgentAttr2">
            {'Inteligência: '}
            <input
              type="number"
              name="newAgentAttr2"
              id="newAgentAttr2"
              data-testid="attr2-input"
              min="1"
              max="10"
              required
            />
          </label>
          <br />
          <label htmlFor="newAgentAttr3">
            {'Técnica: '}
            <input
              type="number"
              name="newAgentAttr3"
              id="newAgentAttr3"
              data-testid="attr3-input"
              min="1"
              max="10"
              required
            />
          </label>
          <br />
          <label htmlFor="newAgentPicture">
            {'Imagem (URL): '}
            <input
              type="text"
              name="newAgentPicture"
              id="newAgentPicture"
              data-testid="image-input"
              required
            />
          </label>
          <br />
          <label htmlFor="newAgentRarity">
            {'Raridade: '}
            <select
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
          <label htmlFor="newAgentSuper">
            {'Super Trunfo: '}
            <input
              type="checkbox"
              name="newAgentSuper"
              id="newAgentSuper"
              data-testid="trunfo-input"
            />
          </label>
          <br />
        </form>

        <button
          type="submit"
          form="newAgentForm"
          data-testid="save-button"
          onClick={ (origin) => this.preventReload(origin) }
        >
          Salvar
        </button>
      </>
    );
  }
}

export default Form;
