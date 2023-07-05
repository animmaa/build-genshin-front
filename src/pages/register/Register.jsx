import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Register.scss';

function Register() {
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/createuser`,
        values,
      );
      toast.success(response.data.message);
      setTimeout(() => {
        navigate('/connection');
      }, 1500);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="inscription">
      <div className="cadre-inscription">
        <h1>Bienvenue</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="cadre-label">
            <label htmlFor="email">
              <input
                id="email"
                placeholder="Email"
                {...register('email', { required: true, maxLength: 200 })}
              />
              {errors.pseudo && errors.pseudo.type === 'required' && (
                <span>This is required</span>
              )}
              {errors.pseudo && errors.pseudo.type === 'maxLength' && (
                <span>Max length exceeded</span>
              )}
              <br />
            </label>
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

export default Register;
