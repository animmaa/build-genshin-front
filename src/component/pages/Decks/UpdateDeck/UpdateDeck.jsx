import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './UpdateDeck.scss';
import { useLogin } from '../../../../context/loginProvider';

const UpdateDeck = () => {
  const { setChoiceDeck, choiceDeck } = useLogin();
  console.log(choiceDeck);
  const [urlImage, setUrlImage] = useState({});
  const [listCard, setListCard] = useState([]);
  const imageBase =
    'https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools/genshin-impact/gacha/card_i_85.png';

  const getInfosDeck = async () => {
    await axios
      .get(`http://localhost:8000/api/deck/infosdeck/${choiceDeck}`)
      .then((response) => setUrlImage(response.data));
  };
  console.log(urlImage);
  const update = async () => {
    await axios.put(
      `http://localhost:8000/api/deck/updatedeck/${choiceDeck}`,
      urlImage
    );
  };

  const getCardsList = async () => {
    await axios
      .get(`http://localhost:8000/api/card/personnage`)
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
      if (urlImage[element] === urlCard.url) {
        setUrlImage({ ...urlImage, [element]: imageBase });
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
        <div>
          <input
            type="text"
            name="namedeck"
            value={urlImage.namedeck}
            onChange={handleChangeName}
          />
        </div>
        <div className="image1 size_image">
          <input
            type="image"
            name="imgdeckone"
            value={urlImage.imgdeckone}
            src={urlImage.imgdeckone}
          />
        </div>
        <div className="size_image">
          <input
            type="image"
            name="imgdecktwo"
            value={urlImage.imgdecktwo}
            src={urlImage.imgdecktwo}
          />
        </div>
        <div className="image3 size_image">
          <input
            type="image"
            name="imgdeckthree"
            value={urlImage.imgdeckthree}
            src={urlImage.imgdeckthree}
          />
        </div>
      </div>
      <div className="zone_card">
        {listCard.map((el) => (
          <div key={el.id}>
            <img onClick={() => handleChoiceImage(el)} src={el.url} alt="" />
          </div>
        ))}
      </div>
      <button onClick={update}>valider</button>
    </div>
  );
};

export default UpdateDeck;
