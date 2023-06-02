import React from 'react';
import { IconContext } from 'react-icons';
import { BiEditAlt } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { GiCardDraw } from 'react-icons/gi';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLogin } from '../../../context/loginProvider';
import './Deck.scss';

function Deck({
  deckName,
  idDeck,
  deckImageOne,
  getDeck,
  deckImageTwo,
  deckImageThree,
}) {
  const { setChoiceDeck } = useLogin();

  const navigate = useNavigate();

  const handleDeleteDeck = async () => {
    await axios.delete(`http://localhost:8000/api/deck/deckdelete/${idDeck}`);
    getDeck();
  };

  const handleChoiceAddCards = () => {
    setChoiceDeck(idDeck);
    navigate('/cardlist');
  };
  const handleChoiceModifDeck = () => {
    setChoiceDeck(idDeck);
    navigate('/modifdeck');
  };
  //const styleIcon = {color: "red", size: {50} }
  return (
    <div className="deck_base">
      <div className="name_deck">
        <h3>{deckName}</h3>
      </div>
      <div className="card_deck">
        <img className="image1" src={deckImageOne} alt="" />
        <img src={deckImageTwo} alt="" />
        <img className="image3" src={deckImageThree} alt="" />
      </div>
      <div className="logo">
        <IconContext.Provider value={{ className: 'global-class-name' }}>
          <BiEditAlt size={30} color="blue" onClick={handleChoiceModifDeck} />
          <GiCardDraw size={30} onClick={handleChoiceAddCards} />
          <MdDeleteForever size={30} color="red" onClick={handleDeleteDeck} />
        </IconContext.Provider>
      </div>
      {/* <button type="button" onClick={handleChoiceAddCards}>
        ajout carte
      </button>
      <button type="button" onClick={handleDeleteDeck}>
        supprimer deck
      </button>
      <button type="button" onClick={handleChoiceModifDeck}>
        modif deck
      </button> */}
    </div>
  );
}

Deck.propTypes = {
  deckName: PropTypes.string.isRequired,
  idDeck: PropTypes.number.isRequired,
  deckImageOne: PropTypes.string.isRequired,
  deckImageTwo: PropTypes.string.isRequired,
  deckImageThree: PropTypes.string.isRequired,
  getDeck: PropTypes.func.isRequired,
};

export default Deck;
