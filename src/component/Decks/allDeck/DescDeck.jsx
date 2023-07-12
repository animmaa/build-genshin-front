import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLogin } from '../../../context/loginProvider';
import './DescDeck.scss';

function DescDeck({
  deckName,
  idClick,
  deckImageTwo,
  deckImageOne,
  deckImageThree,
}) {
  const { setIdDeck } = useLogin();

  const navigate = useNavigate();

  const handleChoiceDeck = () => {
    setIdDeck(idClick);
    navigate('/lookallcard');
  };

  return (
    <div className="deck_all_user">
      <div className="name_deck">
        <h4>{deckName}</h4>
      </div>
      <div className="card_deck">
        <img className="image1" src={deckImageOne} alt="" />
        <img src={deckImageTwo} alt="" />
        <img className="image3" src={deckImageThree} alt="" />
      </div>
      <button type="button" onClick={handleChoiceDeck}>
        voir le deck
      </button>
    </div>
  );
}

DescDeck.propTypes = {
  deckName: PropTypes.string.isRequired,
  idClick: PropTypes.number.isRequired,
  deckImageOne: PropTypes.string.isRequired,
  deckImageTwo: PropTypes.string.isRequired,
  deckImageThree: PropTypes.string.isRequired,
};

export default DescDeck;
