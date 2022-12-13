// import { useState, createContext, useContext, useEffect } from 'react';

// const LoginContext = createContext(null);

// const LoginProvider = ({ children }) => {
//   const [log, setLog] = useState(
//     localStorage.getItem('log')
//       ? JSON.parse(localStorage.getItem('log'))
//       : null
//   );

//   useEffect(() => {
//     if (log) {
//       localStorage.setItem('log', JSON.stringify(log));
//     } else {
//       localStorage.removeItem('log');
//     }
//   }, [log]);

//   return (
//     <LoginContext.Provider value={{ log, setLog }}>
//       {children}
//     </LoginContext.Provider>
//   );
// };

// export const useLogin = () => useContext(LoginContext);

// export default LoginProvider;
