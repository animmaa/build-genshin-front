import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../../../context/loginProvider';
import Deck from '../Deck/Deck';

const CreateDeck = () => {
  const [nameNewDeck, setNameNewDeck] = useState();
  const {
    user: { id },
  } = useLogin();
  const [decks, setDecks] = useState([]);
  //const navigator = useNavigate()
  const addDeck = async (deckName) => {
    await axios.post(`http://localhost:8000/api/deck/deckadd/${id}`, {
      namedeck: deckName,
    });
    getDeck();
  };

  const getDeck = () => {
    axios.get(`http://localhost:8000/api/deck/${id}`).then((response) => {
      setDecks(response.data);
    });
  };

  useEffect(() => {
    getDeck();
  }, []);

  return (
    <div>
      <div>
        <label htmlFor="">
          Nom du deck
          <input
            type="text"
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
            <Deck deckName={deck.namedeck} id_deck={deck.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateDeck;
