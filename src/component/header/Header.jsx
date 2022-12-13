import './Header.scss';
import logocard from './../../assets/logocard.jpg';

import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="align-text">
        <a href="/Connection">
          <button>Connection</button>
        </a>
        <div className='image-logo'>
          <img src={logocard} alt="" />
        </div>
        <a href="/inscription">
          <button>Inscription</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
