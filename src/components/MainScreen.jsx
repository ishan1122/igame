import React, { useState, useEffect } from 'react';
import './MainScreen.css';
import MiningSection from './MiningSection/MiningSection';
import StockMarketSection from './StockMarketSection/StockMarketSection';
import CoinMarketSection from './CoinMarketSection/CoinMarketSection';

const MainScreen = () => {
  const [xCoinsMined, setXCoinsMined] = useState(0);
  const [miningEfficiency, setMiningEfficiency] = useState(1);
  const [progress, setProgress] = useState(0);

  // Increment coins mined every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setXCoinsMined((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Update the progress bar as the coins are mined
  useEffect(() => {
    setProgress((xCoinsMined % 100) * 1); // Progress resets after every 100 coins
  }, [xCoinsMined]);

  return (
    <div className="main-screen">
      <div className="top-bar">
        <h1 className="title">Wolf of Wall Street: X Coin Revolution</h1>
      </div>

      {/* Coin info and progress bar */}
      <div className="info-bar">
        <div className="coins-mined">
          <h3>Coins Mined: {xCoinsMined}</h3>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="mining-efficiency">
          <h3>Efficiency: {miningEfficiency}</h3>
        </div>
      </div>

      <div className="grid-container">
        <MiningSection setXCoinsMined={setXCoinsMined} />
        <StockMarketSection />
        <CoinMarketSection />
      </div>
    </div>
  );
};

export default MainScreen;
