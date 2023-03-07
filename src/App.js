import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from './pages/RegistrationPage';
import MainPage from './pages/MainPage';
import CoinPage from './pages/CoinPage';
import GuessTheDoorPage from './pages/GuessTheDoorPage';
import GuessTheNumberPage from './pages/GuessTheNumberPage';
import CongratulationsPage from './pages/CongratulationsPage';
import LossPage from './pages/LossPage';
import ComponentWithHeader from './components/ComponentWithHeader';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exaxt path='/' element=<RegistrationPage /> />
          <Route exaxt path='/main' element=<ComponentWithHeader />>
            <Route exaxt path="/main" element=<MainPage /> />
            <Route exaxt path="/main/coin" element=<CoinPage /> />
            <Route exaxt path="/main/door" element=<GuessTheDoorPage /> />
            <Route exaxt path="/main/number" element=<GuessTheNumberPage /> />
            <Route exaxt path="/main/congratulation" element=<CongratulationsPage /> />
            <Route exaxt path="/main/loss" element=<LossPage /> />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;