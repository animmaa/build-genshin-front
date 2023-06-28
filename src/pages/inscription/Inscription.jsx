import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Inscription.scss';

function Inscription() {
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    await axios
      .post(`${process.env.REACT_APP_API_URL}/user/createuser`, values)
      .then(() => {
        navigate('/connection');
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <div className="inscription">
      <div className="cadre-inscription">
        <h1>Bienvenue</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="cadre-label">
            <label htmlFor="pseudo">
              <input
                id="pseudo"
                placeholder="Pseudo"
                {...register('pseudo', { required: true, maxLength: 30 })}
              />
              {errors.pseudo && errors.pseudo.type === 'required' && (
                <span>This is required</span>
              )}
              {errors.pseudo && errors.pseudo.type === 'maxLength' && (
                <span>Max length exceeded</span>
              )}
              <br />
            </label>
            <label htmlFor="password">
              <input
                {...register('password', { required: true })}
                placeholder="Mot de passe"
                type="password"
                id="password"
              />
              {errors.password && errors.password.type === 'required' && (
                <span>This is required</span>
              )}
            </label>
          </div>
          <h5>{error}</h5>
          <button type="submit">Créer ton compte</button>
        </form>
        <div className="direction-connection">
          <h4>
            Déjà un compte&nbsp;&rarr;&nbsp;
            <a href="/connection">Connection</a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
