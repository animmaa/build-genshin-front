import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdAddToPhotos } from 'react-icons/md';
import Deck from '../../component/Decks/Deck/Deck';
import { useLogin } from '../../context/loginProvider';
import './CreateDeck.scss';

function CreateDeck() {
  const {
    user: { id },
  } = useLogin();
  const [decks, setDecks] = useState([]);

  const getDeck = () => {
    axios.get(`http://localhost:8000/api/deck/${id}`).then((response) => {
      setDecks(response.data);
    });
  };

  const addDeck = async () => {
    await axios.post(`http://localhost:8000/api/deck/deckadd/${id}`, {
      namedeck: 'New Deck',
    });
    getDeck();
  };

  useEffect(() => {
    getDeck();
  }, []);

  return (
    <div className="createDeck">
      <div className="grid_deck">
        <div className="blanckDeck">
          <div
            className="cadre"
            role="presentation"
            type="submit"
            value="creer deck"
            onClick={() => addDeck()}
            onKeyDown={() => addDeck()}
          >
            <MdAddToPhotos size={60} />
          </div>
        </div>
        {decks.map((deck) => (
          <div className="deck" key={deck.id}>
            <Deck
              deckName={deck.namedeck}
              idDeck={deck.id}
              deckImageOne={deck.imgdeckone}
              deckImageTwo={deck.imgdecktwo}
              deckImageThree={deck.imgdeckthree}
              getDeck={getDeck}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateDeck;
