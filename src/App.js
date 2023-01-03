import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header/Header';
import HomePage from './component/homePage/HomePage';
import Cards from './component/pages/Cards/Cards';
import './App.css';
import Inscription from './component/pages/inscription/Inscription';
import Connection from './component/pages/connection/Connection';
import LoginProvider from './context/loginProvider';
import Profil from './component/pages/profil/Profil';
import Decks from './component/pages/Decks/Decks';
import CreateDeck from './component/pages/Decks/CreateDeck/CreateDeck';
import Authorized from './component/authorized/Authorized';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/card" element={<Cards />} />
            <Route path="/connection" element={<Connection />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route element={<Authorized />}>
              <Route path="/profil" element={<Profil />} />
              <Route path="/cardlist" element={<Cards />} />
              <Route path="/mydecks" element={<CreateDeck />} />
            </Route>
          </Routes>
        </Router>
      </LoginProvider>
    </div>
  );
}

export default App;
