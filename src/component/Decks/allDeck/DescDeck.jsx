import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLogin } from '../../../context/loginProvider';

function DescDeck({ deckName, idClick }) {
  const { setIdDeck } = useLogin();

  const navigate = useNavigate();

  const handleChoiceDeck = () => {
    setIdDeck(idClick);
    navigate('/lookallcard');
  };

  return (
    <div className="deck_base">
      <div className="card_deck">
        <h4>{deckName}</h4>
      </div>
      <button type="button" onClick={handleChoiceDeck}>
        voir le deck
      </button>
    </div>
  );
}

DescDeck.propTypes = {
  deckName: PropTypes.string.isRequired,
  idClick: PropTypes.number.isRequired,
};

export default DescDeck;
