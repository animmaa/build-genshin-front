import './Header.scss';
import React from 'react';
import logocard from '../../assets/logocard.jpg';

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
          <div className="image-logo">
            <a href="/">
              <img src={logocard} alt="" />
            </a>
          </div>
          <a href="/profil">
            <h4>{user.pseudo}</h4>
          </a>
        </div>
      ) : (
        <div className="align-text">
          <a href="/Connection">
            <button type="button">Connection</button>
          </a>
          <div className="image-logo">
            <a href="/">
              <img src={logocard} alt="" />
            </a>
          </div>
          <a href="/inscription">
            <button type="button">Inscription</button>
          </a>
        </div>
      )}
    </div>
  );
}

export default Header;
