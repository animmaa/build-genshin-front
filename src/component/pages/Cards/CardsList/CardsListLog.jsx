import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';
import './CardsListLog.scss';
import keqing from '../../../../assets/keqing.JPG';
import { useLogin } from '../../../../context/loginProvider';
import { useNavigate } from 'react-router-dom';

const CardsListLog = () => {
  const { user } = useLogin();
  const [cardList, setCardList] = useState([]);
  const navigator = useNavigate();

  const getCardsList = async () => {
    await axios
      .get(`http://localhost:8000/api/card`, {
        headers: {
          authorization: `${user.token}`,
        },
      })
      .then((response) => {
        setCardList(response.data);
      })
      .catch(() => {
        navigator('/');
      });
  };

  useEffect(() => {
    getCardsList();
  }, []);
  //console.log(cardList);
  return (
    <div className="cards_list_log">
      <div>
        <h3>Liste des cartes</h3>
      </div>
      <div>
        <div>Cartes personnages</div>
        <div>Cartes évènement</div>
        <div>Cartes autres</div>
      </div>
      <div className="grid_cards">
        {cardList.map((el) => (
          <div className="test" key={el.id}>
            <div>
              <img src={keqing} alt="" />
            </div>
            <Card nameCard={el.name} elementCard={el.element} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsListLog;
