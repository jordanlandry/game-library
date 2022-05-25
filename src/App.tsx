import { Route, Routes } from 'react-router';
import { isMobile } from 'react-device-detect';
import Navbar from './components/Navbar';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      {isMobile && <h1 className="mobile-note">**NOTE** Some games do not currently support mobile devices. Full mobile support is in development. Sorry for the inconvenience.</h1>}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game-library/games" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
