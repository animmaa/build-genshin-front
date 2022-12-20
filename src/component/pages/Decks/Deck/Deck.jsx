import React from 'react';
import './Deck.scss'

const Deck = ({deckName}) => {
  return (
    <div className='deck_base'>
      <h4>{deckName}</h4>
      <br />
      <br />
      <div>futur image du deck</div>
    </div>
  );
};

export default Deck;
