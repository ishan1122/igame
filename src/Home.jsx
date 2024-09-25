// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/game');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Crypto Stock Tycoon: X Coin Revolution</h1>
      <button onClick={startGame} className="bg-blue-500 text-white px-4 py-2 rounded">
        Start Game
      </button>
    </div>
  );
};

export default Home;
