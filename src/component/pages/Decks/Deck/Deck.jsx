import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../../../context/loginProvider';
import './Deck.scss';

function Deck({ deckName, idDeck }) {
  const { setChoiceDeck } = useLogin();
  // clique sur le boutton modif deck pour pouvoir mettre des carte dedans
  // recuperer id du deck
  // afficher les cartes
  const navigate = useNavigate();

  const handleChoice = () => {
    setChoiceDeck(idDeck);
    navigate('/card');
  };

  return (
    <div className="deck_base">
      <h4>{deckName}</h4>
      <br />
      <br />
      <div>futur image du deck</div>
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
