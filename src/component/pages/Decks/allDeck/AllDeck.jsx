import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DescDeck from './DescDeck';

function AllDeck() {
  const [allDeck, setAllDeck] = useState([]);

  const lookAllDeck = async () => {
    await axios
      .get('http://localhost:8000/api/deck/fulldeck')
      .then((response) => {
        setAllDeck(response.data);
      });
  };

  useEffect(() => {
    lookAllDeck();
  }, []);

  return (
    <div>
      {allDeck.map((deck) => (
        <div className="deck" key={deck.deck_id}>
          <DescDeck deckName={deck.namedeck} idClick={deck.deck_id} />
        </div>
      ))}
    </div>
  );
}

export default AllDeck;
