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
  const [nomberCardActionInTheDeck, setNomberCardActionInTheDeck] = useState(0);

  const getPersonnageNumberCardInTheDeck = async () => {
    if (choiceDeck) {
      const response = await getPersonnageNumberInTheDeck(choiceDeck);
      setNomberPersonnage(response.data.numberPersonnageCard);
    }
  };

  const getNumberTotalCardInTheDeck = async () => {
    if (choiceDeck) {
      const response = await getNumberTotalInTheDeck(choiceDeck);
      setNomberCardActionInTheDeck(response.data.numberCard);
    }
  };

  const getCardsList = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/card/${triCarte}`)
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
        <div className="nb_card">
          <h4>
            Nombre carte personnage &#129;
            {nomberPersonnage}
            &#129; / 3
          </h4>
          <h4>
            Nombre carte action &#129;
            {nomberCardActionInTheDeck}
            &#129; / 30
          </h4>
        </div>
      )}
      <div className="grid_cards">
        {cardList.map((el) => (
          <div className="zone_card" key={el.id}>
            <div className="image_card">
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
