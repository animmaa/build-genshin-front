import { Navigate, Outlet } from 'react-router-dom';
import { useLogin } from '../../context/loginProvider';

const Authorized = () => {
  const { user } = useLogin();
  return user ? <Outlet /> : <Navigate to="/connection" />;
};

export default Authorized;