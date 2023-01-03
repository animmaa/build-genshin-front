import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';
import './CardsListLog.scss';
import { useLogin } from '../../../../context/loginProvider';
import { useNavigate } from 'react-router-dom';

const CardsListLog = () => {
  const { user, choiceDeck } = useLogin();
  const [cardList, setCardList] = useState([]);
  const navigator = useNavigate();
  const [triCarte, setTriCarte] = useState("personnage")

  const getCardsList = async () => {
    await axios
      .get(`http://localhost:8000/api/card/${triCarte}`, {
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
  const getNumberCardInTheDeck = async () => {
    await axios.get(`localhost:8000/api/deck/number/4/3`).then((response) => {
      console.log(response)
    })
  }
//console.log(choiceDeck)
  useEffect(() => {
    getCardsList();
  }, [triCarte]);
  //console.log(cardList);
  return (
    <div className="cards_list_log">
      <div>
        <h3>Liste des cartes</h3>
      </div>
      <div>
        <button onClick={() => setTriCarte("personnage")}>Cartes personnages</button>
        <button onClick={() => setTriCarte("event")}>Cartes évènement</button>
        <button onClick={() => setTriCarte("equipement")}>Cartes équipement</button>
        <button onClick={() => setTriCarte("support")}>Cartes support</button>
      </div>
      <div className="grid_cards">
        {cardList.map((el) => (
          <div className="test" key={el.id}>
            <div>
              <img src={el.url} alt="" />
            </div>
            <Card nameCard={el.name} elementCard={el.element} id_card={el.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsListLog;
