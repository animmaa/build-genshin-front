import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../cards/Card';
import CardPerson from '../cards/CardPerson';
import { useLogin } from '../../../context/loginProvider';
import './CardsListLog.scss';
import {
  getNumberTotalInTheDeck,
  getPersonnageNumberInTheDeck,
} from '../../../utils/requetes';

function CardsListLog() {
  const arrayTypeCard = ['personnage', 'event', 'equipement', 'support'];
  const { choiceDeck } = useLogin();
  const [cardList, setCardList] = useState([]);
  const navigator = useNavigate();
  const [triCarte, setTriCarte] = useState('personnage');
  const [nomberPersonnage, setNomberPersonnage] = useState(0);
  const [nomberCardInTheDeck, setNomberCardInTheDeck] = useState(0);

  const getPersonnageNumberCardInTheDeck = async () => {
    if (choiceDeck) {
      const response = await getPersonnageNumberInTheDeck(choiceDeck);
      setNomberPersonnage(response.data.numberPersonnageCard);
    }
  };

  const getNumberTotalCardInTheDeck = async () => {
    if (choiceDeck) {
      const response = await getNumberTotalInTheDeck(choiceDeck);
      setNomberCardInTheDeck(response.data.numberCard);
    }
  };

  const getCardsList = async () => {
    await axios
      .get(`http://localhost:8000/api/card/${triCarte}`)
      .then((response) => {
        setCardList(response.data);
      })
      .catch(() => {
        navigator('/');
      });
  };

  useEffect(() => {
    getCardsList();
  }, [triCarte]);
  return (
    <div className="cards_list_log">
      <div>
        <h3>Liste des cartes</h3>
      </div>
      <div className="select_type_cards">
        {arrayTypeCard.map((type) => (
          <button
            className={triCarte === type ? 'is_button' : 'button'}
            type="button"
            onClick={() => setTriCarte(type)}
            key={type}
          >
            {`cartes ${type}`}
          </button>
        ))}
      </div>
      {choiceDeck && (
        <>
          <h4>
            Nombre carte personnage &#129;
            {nomberPersonnage}
            &#129; / 3
          </h4>
          <h4>
            Nombre carte dans le deck &#129;
            {nomberCardInTheDeck}
            &#129; / 30
          </h4>
        </>
      )}
      <div className="grid_cards">
        {cardList.map((el) => (
          <div className="zone_card" key={el.id}>
            <div>
              <img src={el.url} alt="" />
            </div>
            {triCarte === 'personnage' ? (
              <CardPerson
                nameCard={el.name}
                elementCard={el.element}
                idCard={el.id}
                getPersonnageNumberCardInTheDeck={
                  getPersonnageNumberCardInTheDeck
                }
                getNumberTotalCardInTheDeck={getNumberTotalCardInTheDeck}
              />
            ) : (
              <Card
                nameCard={el.name}
                elementCard={el.element}
                idCard={el.id}
                getPersonnageNumberCardInTheDeck={
                  getPersonnageNumberCardInTheDeck
                }
                getNumberTotalCardInTheDeck={getNumberTotalCardInTheDeck}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsListLog;
