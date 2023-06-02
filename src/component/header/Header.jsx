import './Header.scss';
import React, { useMemo } from 'react';
import { GrLogout } from 'react-icons/gr';
import { IconContext } from 'react-icons';

import { useLogin } from '../../context/loginProvider';

function Header() {
  const logoutIcon = useMemo(() => ({ className: 'global-class-logout' }), []);
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
          <a href="/Connection" className="test">
            <IconContext.Provider value={logoutIcon}>
              <button type="button" onClick={handleDeleteLocalStorage}>
                <GrLogout color="blue" onClick={handleDeleteLocalStorage} />
              </button>
            </IconContext.Provider>
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
