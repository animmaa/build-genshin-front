import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';

const LoginContext = createContext(null);

function LoginProvider({ children }) {
  const [choiceDeck, setChoiceDeck] = useState();
  const [user, setUser] = useState(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null,
  );

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const valueMemo = useMemo(
    () => ({
      user,
      setUser,
      choiceDeck,
      setChoiceDeck,
    }),
    [user, choiceDeck],
  );

  return (
    <LoginContext.Provider value={valueMemo}>{children}</LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;
