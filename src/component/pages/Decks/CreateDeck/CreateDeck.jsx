import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useLogin } from '../../../../context/loginProvider';

const CreateDeck = () => {
  const [nameNewDeck, setNameNewDeck] = useState();
  const { user: {id} } = useLogin();
  const addDeck = async (deckName) => {
    await axios
      .post(`http://localhost:8000/api/deck/deckadd/${id}`, {
        namedeck: deckName
      })
  };
  console.log(nameNewDeck)
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
        <input type="submit" value="creer deck" onClick={() => addDeck(nameNewDeck)} />
      </div>
    </div>
  );
};

export default CreateDeck;
