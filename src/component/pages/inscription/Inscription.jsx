import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
      .post('http://localhost:8000/api/user/createuser', values)
      .then(() => {
        // console.log(data)
        navigate('/connection');
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
            id="pseudo"
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
          Password
          <input {...register('password', { required: true })} id="password" />
          {errors.password && errors.password.type === 'required' && (
            <span>This is required</span>
          )}
        </label>
        <h5>{error}</h5>
        <input type="submit" value="Creer compte" />
      </form>
    </div>
  );
}

export default Inscription;
