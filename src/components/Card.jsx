import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  rarityChecker = (origin) => {
    if (origin === 'Raro') {
      return (
        <p className="rare-rarity">
          {origin}
        </p>
      );
    } if (origin === 'Normal') {
      return (
        <p className="normal-rarity">
          {origin}
        </p>
      );
    } if (origin === 'Muito Raro') {
      return (
        <p className="rarer-rarity">
          {origin}
        </p>
      );
    }
  }

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

        <div className="agent-attr">
          <div data-testid="attr1-card" className="agent-attr1">
            <p className="agent-attr1-value">
              {cardAttr1}
            </p>
          </div>
          <div data-testid="attr2-card" className="agent-attr2">
            <p className="agent-attr2-value">
              {cardAttr2}
            </p>
          </div>
          <div data-testid="attr3-card" className="agent-attr3">
            <p className="agent-attr3-value">
              {cardAttr3}
            </p>
          </div>
        </div>

        <p data-testid="rare-card" className="agent-rarity">
          {this.rarityChecker(cardRare)}
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
