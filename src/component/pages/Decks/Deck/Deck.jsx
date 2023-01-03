import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../../../context/loginProvider';
import './Deck.scss';

const Deck = ({ deckName, id_deck }) => {
  const {choiceDeck, setChoiceDeck} = useLogin()
  // clique sur le boutton modif deck pour pouvoir mettre des carte dedans
  // recuperer id du deck
  // afficher les cartes
  const navigate = useNavigate();

  const handleChoice = () => {
    setChoiceDeck(id_deck);
    navigate('/card');
  };

  return (
    <div className="deck_base">
      <h4>{deckName}</h4>
      <br />
      <br />
      <div>futur image du deck</div>
      <button onClick={handleChoice}>modifier deck</button>
    </div>
  );
};

export default Deck;
