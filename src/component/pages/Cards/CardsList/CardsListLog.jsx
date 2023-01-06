import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import { useLogin } from '../../../../context/loginProvider';
import './CardsListLog.scss';

function CardsListLog() {
  const { user, choiceDeck } = useLogin();
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
      <div>
        <button type="button" onClick={() => setTriCarte('personnage')}>
          Cartes personnages
        </button>
        <button type="button" onClick={() => setTriCarte('event')}>
          Cartes évènement
        </button>
        <button type="button" onClick={() => setTriCarte('equipement')}>
          Cartes équipement
        </button>
        <button type="button" onClick={() => setTriCarte('support')}>
          Cartes support
        </button>
      </div>
      <h4>
        Nombre carte personnage
        {nomberPersonnage}
      </h4>
      <h4>
        Nombre carte dans le deck
        {nomberCardInTheDeck}
      </h4>
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

// CardsListLog.propTypes = {
//   children: PropTypes.element.isRequired,
// };

export default CardsListLog;
