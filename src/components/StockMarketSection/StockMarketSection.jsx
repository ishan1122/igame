// src/components/StockMarketSection/StockMarketSection.jsx

import React, { useState } from 'react';
import './StockMarketSection.css';

const StockMarketSection = () => {
  const [stockPrices, setStockPrices] = useState({
    AAPL: 150,
    TSLA: 700,
    BTC: 30000,
  });

  const handleBuyStock = (ticker) => {
    // Logic to buy stock (not implemented here)
    alert(`Buying ${ticker}`);
  };

  return (
    <div className="stock-market-section">
      <h2>Stock Market</h2>
      <ul>
        {Object.entries(stockPrices).map(([ticker, price]) => (
          <li key={ticker} className="stock-item">
            <span>{ticker}</span>
            <span>${price}</span>
            <button onClick={() => handleBuyStock(ticker)} className="buy-button">
              Buy
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockMarketSection;
