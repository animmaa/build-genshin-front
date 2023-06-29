import React, { useEffect, useMemo, useState } from 'react';
import { IconContext } from 'react-icons';
import { BiEditAlt } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useLogin } from '../../../context/loginProvider';
import './Deck.scss';
import 'react-toggle/style.css';

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
  const [checkNumberCard, setCheckNumberCard] = useState(true);

  const navigate = useNavigate();

  const handleDeleteDeck = async () => {
    const result = window.confirm('supprimer ce deck definitivement ?');
    if (result) {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/deck/deckdelete/${idDeck}`,
      );
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

  const getNumberCardTotalInTheDeck = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/deck/totalcardinthedeck/${idDeck}`,
    );
    if (response.data.numberCard === 33) {
      setCheckNumberCard(false);
    }
  };
  useEffect(() => {
    getNumberCardTotalInTheDeck();
  }, []);

  const handleChangePublishDeck = async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_API_URL}/deck/publish/${idDeck}`,
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <div className="deck_base">
        <div className="container_publish">
          <div id={`publish-${idDeck}`}>
            <Toggle
              defaultChecked={false}
              disabled={checkNumberCard}
              onClick={handleChangePublishDeck}
            />
          </div>
        </div>
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
              id={`icon-add-card-${idDeck}`}
              onClick={handleChoiceAddCards}
            />
          </IconContext.Provider>
          <IconContext.Provider value={editIcon}>
            <BiEditAlt
              size={30}
              id={`icon-edit-${idDeck}`}
              onClick={handleChoiceModifDeck}
            />
          </IconContext.Provider>
          <IconContext.Provider value={deleteIcon}>
            <MdDeleteForever
              size={30}
              id={`icon-delete-${idDeck}`}
              onClick={handleDeleteDeck}
            />
          </IconContext.Provider>
        </div>
      </div>
      <ReactTooltip
        anchorId={`publish-${idDeck}`}
        place="bottom"
        content={
          checkNumberCard
            ? 'nécessite 33 cartes dans le deck pour poster le deck'
            : 'Publie ou retire le deck'
        }
      />
      <ReactTooltip
        anchorId={`icon-add-card-${idDeck}`}
        place="bottom"
        content="Ajouter les cartes dans le deck"
      />
      <ReactTooltip
        anchorId={`icon-edit-${idDeck}`}
        place="bottom"
        content="Modifier image et nom du deck"
      />
      <ReactTooltip
        anchorId={`icon-delete-${idDeck}`}
        place="bottom"
        content="Supprimer le deck"
      />
    </>
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
