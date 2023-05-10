import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './UpdateDeck.scss';
import { useLogin } from '../../../../context/loginProvider';

const UpdateDeck = () => {
  const { setChoiceDeck, choiceDeck } = useLogin();
  console.log(choiceDeck);
  const [urlImage, setUrlImage] = useState({
    // namedeck: '',
    // imgdeckone: '',
    // imgdecktwo: '',
    // imgdeckthree: ''

    namedeck: 'change name',
    imgdeckone:
      'https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools/genshin-impact/gacha/card_i_53.png',
    imgdecktwo:
      'https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools/genshin-impact/gacha/card_i_11.png',
    imgdeckthree:
      'https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools/genshin-impact/gacha/card_i_12.png',
  });
  const [listCard, setListCard] = useState([]);

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

  const handleChoiceImage = (urlCard) => {
    setUrlImage({ ...urlImage, imgdeckone: urlCard.url });
  };

  const handleChangeName = (e) => {
    setUrlImage({...urlImage, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    getCardsList();
  }, []);

  return (
    <div className="update_deck">
      <div>
        <h1>liste carte</h1>
      </div>
      <div>
        <input type="text" name="namedeck" value={urlImage.namedeck} onChange={handleChangeName}/>
        <input type="text" name="imgdeckone" value={urlImage.imgdeckone}/>
        <input type="text" name="imgdecktwo" value={urlImage.imgdecktwo}/>
        <input type="text" name="imgdeckthree" value={urlImage.imgdeckthree}/>
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
