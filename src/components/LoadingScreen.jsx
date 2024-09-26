import React from "react";
import "./LoadingScreen.css";
import earth2 from "../earth2.jpeg"; // Updated path


const LoadingScreen = () => {
  const backgroundStyle = {
    backgroundImage: `url(${earth2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end', // Align items to the bottom of the screen
    paddingBottom: '50px', // Move the loading bar a bit higher
  };

  const loadingBarStyle = {
    width: '50%',
    height: '20px',
    backgroundColor: '#000', // Black background for the loading bar
    borderRadius: '10px',
    overflow: 'hidden',
    position: 'relative',
  };

  const fillerStyle = {
    height: '100%',
    width: '0%', // Start with 0% and animate to 100%
    backgroundColor: '#00f', // Blue color for the loading liquid
    transition: 'width 3s ease', // Slower animation duration
  };

  return (
    <div style={backgroundStyle}>
      <div style={loadingBarStyle}>
        <div style={fillerStyle}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
