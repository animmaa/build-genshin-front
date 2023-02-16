import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../../../context/loginProvider';
import './Deck.scss';

function Deck({ deckName, idDeck }) {
  const { setChoiceDeck } = useLogin();

  const navigate = useNavigate();

  const handleChoice = () => {
    setChoiceDeck(idDeck);
    navigate('/cardlist');
  };

  return (
    <div className="deck_base">
      <div className="card_deck">
        <h4>{deckName}</h4>
      </div>
      <button type="button" onClick={handleChoice}>
        modifier deck
      </button>
    </div>
  );
}

Deck.propTypes = {
  deckName: PropTypes.string.isRequired,
  idDeck: PropTypes.number.isRequired,
};

export default Deck;
