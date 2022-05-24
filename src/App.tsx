import { Route, Routes } from 'react-router';
import { isMobile } from 'react-device-detect';
import Navbar from './components/Navbar';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import MinesweeperPage from './pages/MinesweeperPage';
import Twenty48Page from './pages/Twenty48Page';

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      {isMobile && <h1 className="mobile-note">**NOTE** Some games do not currently support mobile devices. Full mobile support is in development. Sorry for the inconvenience.</h1>}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamePage />} />
        <Route path="/minesweeper" element={<MinesweeperPage />} />
        <Route path="/2048" element={<Twenty48Page />} />
        <Route path="/pong" element={<Twenty48Page />} />
      </Routes>
    </div>
  );
}

export default App;
