import { useState, createContext, useContext, useEffect } from 'react';

const LoginContext = createContext(null);

const LoginProvider = ({ children }) => {
  const [choiceDeck, setChoiceDeck] = useState();
  const [user, setUser] = useState(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      :  null
  );

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <LoginContext.Provider value={{ user, setUser, choiceDeck, setChoiceDeck }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;
