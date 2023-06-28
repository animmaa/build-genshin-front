import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './component/header/Header';
import Cards from './pages/cards/Cards';
import Inscription from './pages/inscription/Inscription';
import { useLogin } from './context/loginProvider';
import Profil from './pages/profil/Profil';
import Authorized from './component/authorized/Authorized';
import AllDeck from './pages/allDeck/AllDeck';
import SeeCardDeck from './pages/cardDeck/SeeCardDeck';
import Connection from './pages/connection/Connection';
import CreateDeck from './pages/CreateDeck/CreateDeck';
import UpdateDeck from './pages/UpdateDeck/UpdateDeck';
import './App.css';

function App() {
  const { user } = useLogin();
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              user ? <Navigate to="/mydecks" /> : <Navigate to="/connection" />
            }
          />
          <Route path="/cardlist" element={<Cards />} />
          <Route path="/lookallcard" element={<SeeCardDeck />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/deckuser" element={<AllDeck />} />
          <Route element={<Authorized />}>
            <Route path="/mydecks" element={<CreateDeck />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/modifdeck" element={<UpdateDeck />} />
          </Route>
        </Routes>
        <ToastContainer autoClose={2000} />
      </Router>
    </div>
  );
}

export default App;
