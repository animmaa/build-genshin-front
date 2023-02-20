import './Header.scss';
import React from 'react';

import { useLogin } from '../../context/loginProvider';

function Header() {
  const { user } = useLogin();

  const handleDeleteLocalStorage = () => {
    localStorage.removeItem('user');
  };

  return (
    <div className="header">
      {user ? (
        <div className="align-text">
          <a href="/profil">
            <button type="button">Mon profil</button>
          </a>
          <a href="/mydecks">
            <button type="button">Mes decks</button>
          </a>
          <a href="/cardlist">
            <button type="button">Liste des cartes</button>
          </a>
          <a href="/deckuser">
            <button type="button">Liste deck user</button>
          </a>
          <a href="/Connection">
            <button type="button" onClick={handleDeleteLocalStorage}>
              Deconnexion
            </button>
          </a>
        </div>
      ) : (
        <div className="align-text">
          <a href="/inscription">
            <button type="button">Inscription</button>
          </a>
          <a href="/cardlist">
            <button type="button">Liste des cartes</button>
          </a>
          <a href="/Connection">
            <button type="button">Connexion</button>
          </a>
        </div>
      )}
    </div>
  );
}

export default Header;
