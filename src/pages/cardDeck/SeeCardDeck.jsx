import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../context/loginProvider';
import DetailCard from '../../component/Decks/allDeck/DetailCard';
import './SeeCardDeck.scss';

function SeeCardDeck() {
  const [listCardDeck, setListCardDeck] = useState([]);
  const { idDeck } = useLogin();
  const navigate = useNavigate();
  const lookAllDeck = async () => {
    if (idDeck) {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/deck/cardlist/${idDeck}`)
        .then((response) => {
          setListCardDeck(response.data);
        })
        .catch((err) => console.error(err));
    } else {
      navigate('/deckuser');
    }
  };

  useEffect(() => {
    lookAllDeck();
  }, []);

  return (
    <div className="grid_cards">
      {listCardDeck.map((details, index) => (
        <div
          className="zone_card"
          // eslint-disable-next-line react/no-array-index-key
          key={`${details.name}-${index}`}
        >
          <div>
            <img src={details.url} alt="" />
          </div>
          <DetailCard nameCard={details.name} elementCard={details.element} />
        </div>
      ))}
    </div>
  );
}

export default SeeCardDeck;
