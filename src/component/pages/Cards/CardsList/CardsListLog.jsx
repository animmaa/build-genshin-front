import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import { useLogin } from '../../../../context/loginProvider';
import './CardsListLog.scss';

function CardsListLog() {
  const { choiceDeck } = useLogin();
  const [cardList, setCardList] = useState([]);
  const navigator = useNavigate();
  const [triCarte, setTriCarte] = useState('personnage');
  const [nomberPersonnage, setNomberPersonnage] = useState(0);
  const [nomberCardInTheDeck, setNomberCardInTheDeck] = useState(0);

  const getPersonnageNumberCardInTheDeck = async () => {
    if (choiceDeck) {
      await axios
        .get(`http://localhost:8000/api/deck/totalpersonnage/${choiceDeck}`)
        .then((response) => {
          setNomberPersonnage(response.data.numberPersonnageCard);
        })
        .catch((err) => console.log(err));
    }
  };

  const getNumberTotalCardInTheDeck = async () => {
    if (choiceDeck) {
      await axios
        .get(`http://localhost:8000/api/deck/totalcard/${choiceDeck}`)
        .then((response) => {
          setNomberCardInTheDeck(response.data.numberCard);
        })
        .catch((err) => console.log(err));
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
        <button
          className={triCarte === 'personnage' ? 'is_button' : 'button'}
          type="button"
          onClick={() => setTriCarte('personnage')}
        >
          Cartes personnages
        </button>
        <button
          className={triCarte === 'event' ? 'is_button' : 'button'}
          type="button"
          onClick={() => setTriCarte('event')}
        >
          Cartes évènement
        </button>
        <button
          className={triCarte === 'equipement' ? 'is_button' : 'button'}
          type="button"
          onClick={() => setTriCarte('equipement')}
        >
          Cartes équipement
        </button>
        <button
          className={triCarte === 'support' ? 'is_button' : 'button'}
          type="button"
          onClick={() => setTriCarte('support')}
        >
          Cartes support
        </button>
      </div>
      {choiceDeck ? (
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
      ) : null}
      <div className="grid_cards">
        {cardList.map((el) => (
          <div className="test" key={el.id}>
            <div>
              <img src={el.url} alt="" />
            </div>
            <Card
              nameCard={el.name}
              elementCard={el.element}
              idCard={el.id}
              getPersonnageNumberCardInTheDeck={
                getPersonnageNumberCardInTheDeck
              }
              getNumberTotalCardInTheDeck={getNumberTotalCardInTheDeck}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsListLog;
