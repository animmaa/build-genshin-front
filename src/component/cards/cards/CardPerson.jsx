import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLogin } from '../../../context/loginProvider';
import { addCard, deleteCard, getNumberCard } from '../../../utils/requetes';
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
  const [disableNegative, setDisableNegative] = useState();
  const [disablePositif, setDisablePositif] = useState();

  const getNumberCardInTheDeck = async () => {
    if (choiceDeck) {
      const response = await getNumberCard(choiceDeck, idCard);
      setNumberCard(response.data.numberCard);
    }
  };

  const addCardInTheDeck = async () => {
    await addCard(choiceDeck, idCard);
    await getNumberCardInTheDeck(choiceDeck, setNumberCard, idCard);
  };

  const deleteCardInTheDeck = async () => {
    await deleteCard(choiceDeck, idCard);
    await getNumberCardInTheDeck(choiceDeck, setNumberCard, idCard);
  };

  useEffect(() => {
    if (numberCard === 1) {
      setDisablePositif(true);
    } else {
      setDisablePositif(false);
    }
    if (numberCard === 0) {
      setDisableNegative(true);
    } else {
      setDisableNegative(false);
    }
    getNumberCardInTheDeck();
    getPersonnageNumberCardInTheDeck();
    getNumberTotalCardInTheDeck();
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
            &nbsp;
            {numberCard}
            &nbsp;
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
