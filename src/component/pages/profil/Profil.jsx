import React from 'react';

import './Profil.scss';

function Profil() {
  return (
    <div className="profil">
      <div className="list-btn">
        <a href="mydecks">
          <button type="button">Mes decks</button>
        </a>
        <a href="cardlist">
          <button type="button">liste cartes</button>
        </a>
        <a href="profildetails">
          <button type="button">Profil</button>
        </a>
      </div>
    </div>
  );
}

export default Profil;
