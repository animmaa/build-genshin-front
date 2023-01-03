import React from 'react';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="text-pres">texte de presentation</div>
      <div className="list-btn">
        <a href="/card">
          <button>Liste des cartes</button>
        </a>
        <a href="/inscription">
          <button>Inscription</button>
        </a>
        <a href="/connection">
          <button>Connection</button>
        </a>
      </div>
      <div className="anim-home">animation ???</div>
    </div>
  );
};

export default HomePage;
