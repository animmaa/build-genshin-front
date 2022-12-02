import './Header.scss';
import logocard from './../../assets/logocard.jpg';

import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className='align-text'>
        <button>Connection</button>
        <div>
          <img src={logocard} alt="" />
        </div>
        <button>Inscription</button>
      </div>
    </div>
  );
};

export default Header;
