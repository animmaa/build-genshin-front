import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header/Header';
import HomePage from './component/homePage/HomePage';
import Cards from './component/pages/Cards/Cards';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/card' element={<Cards />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
