import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLogin } from '../../../../context/loginProvider';
import './Card.scss';

function Card({
  nameCard,
  elementCard,
  idCard,
  getPersonnageNumberCardInTheDeck,
  getNumberTotalCardInTheDeck,
}) {
  const { choiceDeck } = useLogin();
  const [numberCard, setNumberCard] = useState();
  // console.log(choiceDeck);
  const [disableNegative, setDisableNegative] = useState();
  const [disablePositif, setDisablePositif] = useState();

  const getNumberCardInTheDeck = async () => {
    if (choiceDeck) {
      await axios
        .get(`http://localhost:8000/api/deck/number/${idCard}/${choiceDeck}`)
        .then((response) => {
          setNumberCard(response.data.numberCard);
        })
        .catch((err) => console.log(err));
    }
  };

  const addCardInTheDeck = async () => {
    // console.log(idCard, 'ajout');
    await axios
      .post(
        `http://localhost:8000/api/card/addcardindeck/${choiceDeck}/${idCard}`,
        {
          card_id: idCard,
        },
      )
      .then(() => {
        getNumberCardInTheDeck();
        console.log(`ajout de la carte ${idCard} du deck ${choiceDeck}`);
      })
      .catch((err) => console.log(err));
  };

  const deleteCardInTheDeck = async () => {
    await axios
      .delete(
        `http://localhost:8000/api/card/deletecardindeck/${choiceDeck}/${idCard}`,
      )
      .then(() => {
        getNumberCardInTheDeck();
        console.log(`suppression de la carte ${idCard} du deck ${choiceDeck}`);
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
        {elementCard && <div>{elementCard}</div>}
      </div>
      {choiceDeck && (
        <div className="number_card">
          <button
            type="button"
            onClick={() => deleteCardInTheDeck()}
            disabled={!!disableNegative}
          >
            -
          </button>
          <div>
            {' '}
            {numberCard}
            {' '}
          </div>
          <button
            type="button"
            onClick={() => addCardInTheDeck()}
            disabled={!!disablePositif}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  nameCard: PropTypes.string.isRequired,
  elementCard: PropTypes.string.isRequired,
  idCard: PropTypes.number.isRequired,
  getPersonnageNumberCardInTheDeck: PropTypes.func.isRequired,
  getNumberTotalCardInTheDeck: PropTypes.func.isRequired,
};

export default Card;
