import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DescDeck from '../../component/Decks/allDeck/DescDeck';
import './AllDeck.scss';

function AllDeck() {
  const [allDeck, setAllDeck] = useState([]);

  const lookAllDeck = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/deck/fulldeck`)
      .then((response) => {
        setAllDeck(response.data);
      });
  };
  console.log(allDeck);
  useEffect(() => {
    lookAllDeck();
  }, []);

  return (
    <div className="flex_deck">
      {allDeck.map((deck) => (
        <div className="deck" key={deck.deck_id}>
          <DescDeck
            deckName={deck.namedeck}
            idClick={deck.deck_id}
            deckImageOne={deck.imgdeckone}
            deckImageTwo={deck.imgdecktwo}
            deckImageThree={deck.imgdeckthree}
          />
        </div>
      ))}
    </div>
  );
}

export default AllDeck;
