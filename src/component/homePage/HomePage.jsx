import React from 'react';
import './HomePage.scss';

function HomePage() {
  return (
    <div className="homepage">
      <div className="text-pres">texte de presentation</div>
      <div className="list-btn">
        <a href="/card">
          <button type="button">Liste des cartes</button>
        </a>
        <a href="/inscription">
          <button type="button">Inscription</button>
        </a>
        <a href="/connection">
          <button type="button">Connection</button>
        </a>
      </div>
      <div className="anim-home">animation ???</div>
    </div>
  );
}

export default HomePage;
