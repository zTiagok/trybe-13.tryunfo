import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      cardClass, deleteButton, deleteEvent } = this.props;

    const btn = (
      <button
        type="button"
        name={ cardName }
        onClick={ deleteEvent }
        data-testid="delete-button"
      >
        Excluir
      </button>
    );

    return (
      <div className="agent">
        <p data-testid="name-card" className="agent-name">
          {`${cardName}`}
        </p>
        <p className="agent-class">
          { cardClass === 'Iniciador'
            ? <div className="iniciador" /> : undefined}
          { cardClass === 'Sentinela'
            ? <div className="sentinela" /> : undefined}
          { cardClass === 'Duelista'
            ? <div className="duelista" /> : undefined}
          { cardClass === 'Controlador'
            ? <div className="controlador" /> : undefined}
        </p>
        <p data-testid="attr1-card" className="agent-attr1">
          {`Velocidade: ${cardAttr1}`}
        </p>
        <p data-testid="attr2-card" className="agent-attr2">
          {`Inteligência: ${cardAttr2}`}
        </p>
        <p data-testid="attr3-card" className="agent-attr3">
          {`Técnica: ${cardAttr3}`}
        </p>
        <p data-testid="rare-card" className="agent-rarity">
          {`Raridade: ${cardRare}`}
        </p>
        {cardTrunfo ? <p data-testid="trunfo-card"> Super Trunfo </p> : undefined}
        {deleteButton
          ? btn
          : undefined}
        <div className="background-style" />
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          className="agent-image"
        />
        <div className="agent-description">
          <p className="agent-description-title">Informações</p>
          <p data-testid="description-card">
            { cardDescription }
          </p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardClass: PropTypes.string.isRequired,
  deleteButton: PropTypes.bool.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
