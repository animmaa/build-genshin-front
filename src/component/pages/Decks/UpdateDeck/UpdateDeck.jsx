import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../../../context/loginProvider';
import './UpdateDeck.scss';

function UpdateDeck() {
  const { choiceDeck } = useLogin();
  const [urlImage, setUrlImage] = useState({});
  const [listCard, setListCard] = useState([]);
  const navigate = useNavigate();
  const imageBase = 'https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools/genshin-impact/gacha/card_i_85.png';

  const getInfosDeck = async () => {
    await axios
      .get(`http://localhost:8000/api/deck/infosdeck/${choiceDeck}`)
      .then((response) => setUrlImage(response.data));
  };

  const update = async () => {
    await axios.put(
      `http://localhost:8000/api/deck/updatedeck/${choiceDeck}`,
      urlImage,
    );
    navigate('/mydecks');
  };

  const getCardsList = async () => {
    await axios
      .get('http://localhost:8000/api/card/personnage')
      .then((response) => {
        setListCard(response.data);
      })
      .catch(() => {
        navigator('/');
      });
  };
  const keyArray = ['imgdeckthree', 'imgdecktwo', 'imgdeckone'];
  const handleChoiceImage = (urlCard) => {
    for (const element of keyArray) {
      if (urlImage[element] === imageBase) {
        setUrlImage({ ...urlImage, [element]: urlCard.url });
      }
    }
    for (const test of keyArray) {
      if (urlImage[test] === urlCard.url) {
        setUrlImage({ ...urlImage, [test]: imageBase });
      }
    }
  };

  const handleChangeName = (e) => {
    setUrlImage({ ...urlImage, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getCardsList();
    getInfosDeck();
  }, []);

  return (
    <div className="update_deck">
      <div>
        <h1>liste carte</h1>
      </div>
      <div className="card_deck">
        <div className="deck_name">
          <label htmlFor="name-deck" className="name_deck">
            <h4>Nom du deck :</h4>
            <input
              id="name-deck"
              type="text"
              name="namedeck"
              value={urlImage.namedeck}
              onChange={handleChangeName}
            />
          </label>
          <button type="button" onClick={update}>
            valider changement
          </button>
        </div>
        <div className="container-card">
          <div className="container_input_image">
            <div className="image1 size_image">
              <input
                type="image"
                name="imgdeckone"
                value={urlImage.imgdeckone}
                src={urlImage.imgdeckone}
                alt="image1"
              />
            </div>
            <div className="size_image">
              <input
                type="image"
                name="imgdecktwo"
                value={urlImage.imgdecktwo}
                src={urlImage.imgdecktwo}
                alt="image2"
              />
            </div>
            <div className="image3 size_image">
              <input
                type="image"
                name="imgdeckthree"
                value={urlImage.imgdeckthree}
                src={urlImage.imgdeckthree}
                alt="image3"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="zone_card">
        {listCard.map((el) => (
          <div key={el.id}>
            <img
              role="presentation"
              onKeyDown={() => handleChoiceImage(el)}
              onClick={() => handleChoiceImage(el)}
              src={el.url}
              alt="imageCard"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpdateDeck;
