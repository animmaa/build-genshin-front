import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../../context/loginProvider';
import './Profil.scss';

const Profil = () => {
  const navigator = useNavigate();

  const { user } = useLogin();

  // useEffect(() => {
  //   if (user) {
  //     axios.get('card', {
  //       headers: {
  //         authorization: `Bearer ${user.jwt}`,
  //       },
  //     });
  //   } else {
  //     navigator('/');
  //   }
  // }, []);

  return (
    <div className="profil">
      <div className="list-btn">
        <a href="mydecks">
          <button>Mes decks</button>
        </a>
        <a href="newdeck">
          <button>New deck</button>
        </a>
        <a href="profildetails">
          <button>Profil</button>
        </a>
      </div>
    </div>
  );
};

export default Profil;
