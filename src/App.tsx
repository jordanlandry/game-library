import React from 'react';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import MinesweeperPage from './pages/MinesweeperPage';
import Twenty48Page from './pages/Twenty48Page';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamePage />} />
        <Route path="/minesweeper" element={<MinesweeperPage />} />
        <Route path="/2048" element={<Twenty48Page />} />
      </Routes>
    </div>
  );
}

export default App;
