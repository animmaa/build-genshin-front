import React, { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { BiEditAlt } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { Tooltip as ReactTooltip } from 'react-tooltip';
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
  const addIcon = useMemo(() => ({ className: 'global-class-add-card' }), []);
  const editIcon = useMemo(() => ({ className: 'global-class-edit' }), []);
  const deleteIcon = useMemo(() => ({ className: 'global-class-delete' }), []);

  const navigate = useNavigate();

  const handleDeleteDeck = async () => {
    const result = window.confirm('supprimer ce deck definitivement ?');
    if (result) {
      await axios.delete(`http://localhost:8000/api/deck/deckdelete/${idDeck}`);
      getDeck();
    }
  };

  const handleChoiceAddCards = () => {
    setChoiceDeck(idDeck);
    navigate('/cardlist');
  };
  const handleChoiceModifDeck = () => {
    setChoiceDeck(idDeck);
    navigate('/modifdeck');
  };

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
        <IconContext.Provider value={addIcon}>
          <AiOutlineFileAdd
            size={30}
            id="icon-add-card"
            onClick={handleChoiceAddCards}
          />
        </IconContext.Provider>
        <IconContext.Provider value={editIcon}>
          <BiEditAlt size={30} id="icon-edit" onClick={handleChoiceModifDeck} />
        </IconContext.Provider>
        <IconContext.Provider value={deleteIcon}>
          <MdDeleteForever
            size={30}
            id="icon-delete"
            onClick={handleDeleteDeck}
          />
        </IconContext.Provider>
      </div>
      <ReactTooltip
        anchorId="icon-add-card"
        place="bottom"
        content="Ajouter les cartes dans le deck"
      />
      <ReactTooltip
        anchorId="icon-edit"
        place="bottom"
        content="Modifier image et nom du deck"
      />
      <ReactTooltip
        anchorId="icon-delete"
        place="bottom"
        content="Supprimer le deck"
      />
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
