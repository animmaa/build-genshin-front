import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
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
      <div className="card">{elementCard && <div className="card_element">{elementCard}</div>}</div>
      {choiceDeck && (
        <div className="number_card">
          <button
            type="button"
            onClick={() => deleteCardInTheDeck()}
            disabled={!!disableNegative}
          >
            <BsArrowLeft />
          </button>
          <div className="text_number_card">
            &nbsp;
            {numberCard}
            &nbsp;
          </div>
          <button
            type="button"
            onClick={() => addCardInTheDeck()}
            disabled={!!disablePositif}
          >
            <BsArrowRight />
          </button>
        </div>
      )}
      <div className="name_card">{nameCard}</div>
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
