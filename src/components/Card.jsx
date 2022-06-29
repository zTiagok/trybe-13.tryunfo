import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      cardClass, deleteButton, deleteEvent } = this.props;

    const a = { d: 'delete-button', c: deleteEvent, h: 'Excluir' };

    return (
      <div className="agent">
        <p data-testid="name-card" id="agent-name">
          {`${cardName}`}
        </p>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          id="agent-image"
        />
        <p id="agent-class">
          {`Classe: ${cardClass}`}
        </p>
        <p data-testid="attr1-card" id="agent-attr1">
          {`Velocidade: ${cardAttr1}`}
        </p>
        <p data-testid="attr2-card" id="agent-attr2">
          {`Inteligência: ${cardAttr2}`}
        </p>
        <p data-testid="attr3-card" id="agent-attr3">
          {`Técnica: ${cardAttr3}`}
        </p>
        <p data-testid="rare-card" id="agent-rarity">
          {`Raridade: ${cardRare}`}
        </p>
        <p data-testid="description-card" id="agent-description">
          {`Descrição: ${cardDescription}`}
        </p>
        {cardTrunfo ? <p data-testid="trunfo-card"> Super Trunfo </p> : undefined}
        {deleteButton
          ? <button type="button" data-testid={ a.d } onClick={ a.c }> Excluir </button>
          : undefined}
        <div id="background-style" />
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
