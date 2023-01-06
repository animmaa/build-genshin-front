import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../../context/loginProvider';
import './Connection.scss';

function Connection() {
  const { setUser } = useLogin();
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    axios
      .post('http://localhost:8000/api/user/login', values)
      .then(({ data }) => {
        setUser({
          token: data.credential,
          pseudo: values.pseudo,
          id: data.id,
        });
        localStorage.setItem('jwt', data.credential);
        navigate('/profil');
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <div className="connexion">
      <div className="cadre-connexion">
        <h1>Connexion</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="cadre-label">
            <label htmlFor="pseudo">
              <input
                type="text"
                placeholder="Pseudo"
                id="pseudo"
                {...register('pseudo', { required: true })}
              />
              {errors.pseudo && errors.pseudo.type === 'required' && (
                <span>This is required</span>
              )}
            </label>
            <label htmlFor="password">
              <input
                placeholder="Mot de passe"
                type="password"
                id="password"
                {...register('password', { required: true })}
              />
              {errors.password && errors.password.type === 'required' && (
                <span>This is required</span>
              )}
            </label>
          </div>
          <h5>{error}</h5>
          <button type="submit">Connection</button>
        </form>
        <div className="direction-inscription">
          <h4>
            Pas encore inscrit&nbsp;&rarr;&nbsp;
            <a href="/inscription">Créer un compte</a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Connection;
