import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header/Header';
import HomePage from './component/homePage/HomePage';
import Cards from './component/pages/Cards/Cards';
import Inscription from './component/pages/inscription/Inscription';
import Connection from './component/pages/connection/Connection';
import LoginProvider from './context/loginProvider';
import Profil from './component/pages/profil/Profil';
import CreateDeck from './component/pages/Decks/CreateDeck/CreateDeck';
import Authorized from './component/authorized/Authorized';
import AllDeck from './component/pages/Decks/allDeck/AllDeck';
import './App.css';
import SeeCardDeck from './component/pages/Decks/allDeck/SeeCardDeck';
import UpdateDeck from './component/pages/Decks/UpdateDeck/UpdateDeck';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cardlist" element={<Cards />} />
            <Route path="/lookallcard" element={<SeeCardDeck />} />
            <Route path="/connection" element={<Connection />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/deckuser" element={<AllDeck />} />
            <Route element={<Authorized />}>
              <Route path="/profil" element={<Profil />} />
              <Route path="/mydecks" element={<CreateDeck />} />
              <Route path="/modifdeck" element={<UpdateDeck />} />
            </Route>
          </Routes>
        </Router>
      </LoginProvider>
    </div>
  );
}

export default App;
