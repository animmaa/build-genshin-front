import React from 'react';

import './Profil.scss';

const Profil = () => {
  return (
    <div className="profil">
      <div className="list-btn">
        <a href="mydecks">
          <button>Mes decks</button>
        </a>
        <a href="cardlist">
          <button>liste cartes</button>
        </a>
        <a href="profildetails">
          <button>Profil</button>
        </a>
      </div>
    </div>
  );
};

export default Profil;
