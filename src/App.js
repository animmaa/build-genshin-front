import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header/Header';
import HomePage from './component/homePage/HomePage';
import Cards from './component/pages/Cards/Cards';
import './App.css';
import Inscription from './component/pages/inscription/Inscription';
import Connection from './component/pages/connection/Connection';
import LoginProvider from './context/loginProvider';

function App() {
  return (
    <div className="App">
      {/* <LoginProvider> */}
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/card" element={<Cards />} />
            <Route path="/connection" element={<Connection />} />
            <Route path="/inscription" element={<Inscription />} />
          </Routes>
        </Router>
      {/* </LoginProvider> */}
    </div>
  );
}

export default App;
