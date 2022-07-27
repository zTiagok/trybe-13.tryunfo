import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  componentDidMount() {
    const form = document.querySelector('#card-form');
    const description = form.querySelector('.agent-description-title');
    description.classList.add('agent-description-title-noimage');
  }

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

  descriptionImage = () => {

  }

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      cardClass } = this.props;

    const isTrunfo = (
      <div data-testid="trunfo-card" className="trunfo"> ★ </div>
    );

    const cardImageRender = (
      <img
        src={ cardImage }
        alt={ cardName }
        data-testid="image-card"
        className="agent-image"
      />
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
        {cardTrunfo ? isTrunfo : undefined}
        <div className="background-style" />
        { cardImage
          ? cardImageRender
          : null}
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
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
