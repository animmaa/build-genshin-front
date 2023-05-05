import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLogin } from '../../../../context/loginProvider';
import Deck from '../Deck/Deck';
import './CreateDeck.scss';

function CreateDeck() {
  const [nameNewDeck, setNameNewDeck] = useState('New Deck');
  const {
    user: { id },
  } = useLogin();
  const [decks, setDecks] = useState([]);

  const getDeck = () => {
    axios.get(`http://localhost:8000/api/deck/${id}`).then((response) => {
      setDecks(response.data);
    });
  };

  const addDeck = async (deckName) => {
    await axios.post(`http://localhost:8000/api/deck/deckadd/${id}`, {
      namedeck: deckName,
    });
    getDeck();
  };

  useEffect(() => {
    getDeck();
  }, []);

  return (
    <div className="createDeck">
      <br />
      <br />
      <div className="grid_deck">
        {decks.map((deck) => (
          <div className="deck" key={deck.id}>
            <Deck
              deckName={deck.namedeck}
              idDeck={deck.id}
              deckImage={deck.imgdeckone}
              getDeck={getDeck}
            />
          </div>
        ))}
        <div className="blanckDeck">
          <img
            src="https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools/genshin-impact/gacha/card_i_85.png"
            alt="imagebase"
          />

          <label htmlFor="nameDeck">
            <input
              value={nameNewDeck}
              type="text"
              id="nameDeck"
              onChange={(event) => setNameNewDeck(event.target.value)}
            />
          </label>
          <input
            type="submit"
            value="creer deck"
            onClick={() => addDeck(nameNewDeck)}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateDeck;
