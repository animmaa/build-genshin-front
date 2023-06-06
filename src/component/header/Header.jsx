import { NavLink } from 'react-router-dom';
import React, { useMemo } from 'react';
import { GrLogout } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import { useLogin } from '../../context/loginProvider';
import './Header.scss';

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
          <NavLink
            to="/profil"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <button type="button">Mon profil</button>
          </NavLink>
          <NavLink
            to="/mydecks"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <button type="button">Mes decks</button>
          </NavLink>
          <NavLink
            to="/cardlist"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <button type="button">Liste des cartes</button>
          </NavLink>
          <NavLink
            to="/deckuser"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <button type="button">Liste deck user</button>
          </NavLink>
          <a href="/Connection">
            <IconContext.Provider value={logoutIcon}>
              <button type="button" onClick={handleDeleteLocalStorage}>
                <GrLogout color="blue" onClick={handleDeleteLocalStorage} />
              </button>
            </IconContext.Provider>
          </a>
        </div>
      ) : (
        <div className="align-text">
          <NavLink
            to="/inscription"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <button type="button">Inscription</button>
          </NavLink>
          <NavLink
            to="/cardlist"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <button type="button">Liste des cartes</button>
          </NavLink>
          <NavLink
            to="/Connection"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <button type="button">Connexion</button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Header;
