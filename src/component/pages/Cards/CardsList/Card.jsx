import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLogin } from '../../../../context/loginProvider';
import './Card.scss';

const Card = ({
  nameCard,
  elementCard,
  id_card,
  getPersonnageNumberCardInTheDeck,
  getNumberTotalCardInTheDeck,
}) => {
  const { choiceDeck } = useLogin();
  const [numberCard, setNumberCard] = useState();
  // console.log(choiceDeck);
  const [disableNegative, setDisableNegative] = useState();
  const [disablePositif, setDisablePositif] = useState();

  const getNumberCardInTheDeck = async () => {
    if (choiceDeck) {
      await axios
        .get(`http://localhost:8000/api/deck/number/${id_card}/${choiceDeck}`)
        .then((response) => {
          setNumberCard(response.data.numberCard);
        })
        .catch((err) => console.log(err));
    }
  };

  const addCardInTheDeck = async () => {
    // console.log(id_card, 'ajout');
    await axios
      .post(`http://localhost:8000/api/card/addcardindeck/${choiceDeck}`, {
        card_id: id_card,
      })
      .then(() => {
        getNumberCardInTheDeck();
        console.log(`ajout de la carte ${id_card} du deck ${choiceDeck}`);
      })
      .catch((err) => console.log(err));
  };

  const deleteCardInTheDeck = async () => {
    await axios
      .delete(
        `http://localhost:8000/api/card/deletecardindeck/${choiceDeck}/${id_card}`
      )
      .then(() => {
        getNumberCardInTheDeck();
        console.log(`suppression de la carte ${id_card} du deck ${choiceDeck}`);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (numberCard !== 0) {
      setDisableNegative(false);
    } else {
      setDisableNegative(true);
    }
    if (numberCard !== 3) {
      setDisablePositif(false);
    } else {
      setDisablePositif(true);
    }
    getNumberCardInTheDeck();
    getPersonnageNumberCardInTheDeck();
    getNumberTotalCardInTheDeck();

    console.log('test useeffect');
  }, [numberCard]);

  return (
    <div>
      <div className="card">
        <div>{nameCard}</div>
        <div>{elementCard}</div>
      </div>
      {choiceDeck && (
        <div className="number_card">
          <button
            onClick={() => deleteCardInTheDeck()}
            disabled={disableNegative ? true : false}
          >
            -
          </button>
          <div> {numberCard} </div>
          <button
            onClick={() => addCardInTheDeck()}
            disabled={disablePositif ? true : false}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
