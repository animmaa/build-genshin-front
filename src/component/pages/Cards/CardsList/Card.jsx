import React from 'react';
import './Card.scss';
import keqing from '../../../../assets/keqing.JPG';
import { useState } from 'react';

const Card = ({ nameCard, elementCard }) => {
  const [numbreCard, setNumberCard] = useState(0)
  return (
    <div>
      <div className="card">
        <div>{nameCard}</div>
        <div>{elementCard}</div>
      </div>
      <div className='number_card'>
        <button>-</button>
        <div> {numbreCard} </div>
        <button>+</button>
      </div>
    </div>
  );
};

export default Card;
