import axios from 'axios';

/* requetes pour Card.jsx */

export const getNumberCard = async (choiceDeck, idCard) => {
  try {
    return await axios.get(
      `http://localhost:8000/api/deck/number/${idCard}/${choiceDeck}`
    );
  } catch (error) {
    console.error(error);
  }
};

export const addCard = async (choiceDeck, idCard) => {
  try {
    return await axios.post(
      `http://localhost:8000/api/card/addcardindeck/${choiceDeck}/${idCard}`,
      {
        card_id: idCard,
      }
    );
  } catch (err) {
    console.error(err);
  }
};

export const deleteCard = async (choiceDeck, idCard) => {
  try {
    return await axios.delete(
      `http://localhost:8000/api/card/deletecardindeck/${choiceDeck}/${idCard}`
    );
  } catch (err) {
    console.error(err);
  }
};

/* requetes pour cardsListLog.jsx */

export const getPersonnageNumberInTheDeck = async (choiceDeck) => {
  try {
    return await axios.get(
      `http://localhost:8000/api/deck/totalpersonnage/${choiceDeck}`
    );
  } catch (err) {
    console.error(err);
  }
};

export const getNumberTotalInTheDeck = async (choiceDeck) => {
  try {
    return await axios.get(
      `http://localhost:8000/api/deck/totalcard/${choiceDeck}`
    );
  } catch (err) {
    console.error(err);
  }
};
