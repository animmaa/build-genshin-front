import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../../context/loginProvider';

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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="pseudo">
          Pseudo
          <input
            type="text"
            id="pseudo"
            {...register('pseudo', { required: true })}
          />
          {errors.pseudo && errors.pseudo.type === 'required' && (
            <span>This is required</span>
          )}
        </label>
        <br />
        <label htmlFor="password">
          Password
          <input
            type="text"
            id="password"
            {...register('password', { required: true })}
          />
          {errors.password && errors.password.type === 'required' && (
            <span>This is required</span>
          )}
        </label>
        <br />
        <h5>{error}</h5>
        <input type="submit" value="connection" />
      </form>
    </div>
  );
}

export default Connection;
