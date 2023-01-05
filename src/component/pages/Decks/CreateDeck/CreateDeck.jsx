import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLogin } from '../../../../context/loginProvider';
import Deck from '../Deck/Deck';

function CreateDeck() {
  const [nameNewDeck, setNameNewDeck] = useState();
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
    <div>
      <div>
        <label htmlFor="nameDeck">
          Nom du deck
          <input
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
      <br />
      <br />
      <div className="grid_deck">
        {decks.map((deck) => (
          <div className="deck">
            <Deck deckName={deck.namedeck} idDeck={deck.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateDeck;
