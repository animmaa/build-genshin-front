import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DescDeck from '../../component/Decks/allDeck/DescDeck';

function AllDeck() {
  const [allDeck, setAllDeck] = useState([]);

  const lookAllDeck = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/deck/fulldeck`)
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
