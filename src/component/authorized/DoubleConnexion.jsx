import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLogin } from '../../context/loginProvider';

function DoubleConnexion() {
  const { user } = useLogin();
  return user ? <Navigate to="/mydecks" /> : <Outlet />;
}

export default DoubleConnexion;
