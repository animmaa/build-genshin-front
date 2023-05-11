import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header/Header';
import HomePage from './pages/homePage/HomePage';
import Cards from './pages/cards/Cards';
import Inscription from './pages/inscription/Inscription';
import LoginProvider from './context/loginProvider';
import Profil from './pages/profil/Profil';
import Authorized from './component/authorized/Authorized';
import AllDeck from './pages/allDeck/AllDeck';
import SeeCardDeck from './pages/cardDeck/SeeCardDeck';
import Connection from './pages/connection/Connection';
import CreateDeck from './pages/CreateDeck/CreateDeck';
import UpdateDeck from './pages/UpdateDeck/UpdateDeck';
import './App.css';

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
