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
import { useLogin } from './context/loginProvider';
import Authorized from './component/authorized/Authorized';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import AllDeck from './pages/allDeck/AllDeck';
import SeeCardDeck from './pages/cardDeck/SeeCardDeck';
import CreateDeck from './pages/CreateDeck/CreateDeck';
import UpdateDeck from './pages/UpdateDeck/UpdateDeck';
import './App.css';
import DoubleConnexion from './component/authorized/DoubleConnexion';

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
          <Route path="/inscription" element={<Register />} />
          <Route path="/deckuser" element={<AllDeck />} />
          <Route path="/lookallcard" element={<SeeCardDeck />} />
          <Route element={<DoubleConnexion />}>
            <Route path="/connection" element={<Login />} />
          </Route>
          <Route element={<Authorized />}>
            <Route path="/mydecks" element={<CreateDeck />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/modifdeck" element={<UpdateDeck />} />
          </Route>
        </Routes>
        <ToastContainer autoClose={2000} />
      </Router>
    </div>
  );
}

export default App;
