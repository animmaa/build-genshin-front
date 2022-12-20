import './Header.scss';
import logocard from './../../assets/logocard.jpg';

import React from 'react';
import { useLogin } from '../../context/loginProvider';

const Header = () => {
  const { user, setUser } = useLogin();

  const handleDeleteLocalStorage = () => {
    localStorage.removeItem('user');
  };

  return (
    <div className="header">
      {user ? (
        <div className="align-text">
          <a href="/Connection">
            <button onClick={handleDeleteLocalStorage}>deconnection</button>
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
            <button>Connection</button>
          </a>
          <div className="image-logo">
            <a href="/">
              <img src={logocard} alt="" />
            </a>
          </div>
          <a href="/inscription">
            <button>Inscription</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
