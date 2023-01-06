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
          <a href="/Connection">
            <button type="button" onClick={handleDeleteLocalStorage}>
              deconnection
            </button>
          </a>
          <a href="/cardlist">
            <button type="button">Liste des cartes</button>
          </a>
          <a href="/profil">
            <h4>{user.pseudo}</h4>
          </a>
        </div>
      ) : (
        <div className="align-text">
          <a href="/Connection">
            <button type="button">Connection</button>
          </a>
          <a href="/cardlist">
            <button type="button">Liste des cartes</button>
          </a>
          <a href="/inscription">
            <button type="button">Inscription</button>
          </a>
        </div>
      )}
    </div>
  );
}

export default Header;
