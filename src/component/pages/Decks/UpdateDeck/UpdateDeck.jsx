import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './UpdateDeck.scss';

const UpdateDeck = () => {
  const [listCard, setListCard] = useState([]);
  const getCardsList = async () => {
    await axios
      .get(`http://localhost:8000/api/card/personnage`)
      .then((response) => {
        setListCard(response.data);
      })
      .catch(() => {
        navigator('/');
      });
  };

  useEffect(() => {
    getCardsList();
  }, []);

  console.log(listCard);
  return (
    <div className="update_deck">
      <div>
        <h1>liste carte</h1>
      </div>
      {listCard.map((el) => (
        <div className="zone_card" key={el.id}>
          <img src={el.url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default UpdateDeck;
