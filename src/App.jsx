import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import GameScreen from './components/MainScreen';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Loading screen duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? <LoadingScreen /> : <GameScreen />}
    </div>
  );
};

export default App;



