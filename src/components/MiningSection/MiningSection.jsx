import React from 'react';
import './MiningSection.css';
import storGif from '../stor.gif'; // Ensure the path to the GIF is correct

const MiningSection = ({ setXCoinsMined }) => {
  const upgradeRig = () => {
    // Logic for upgrading mining rig (not implemented)
  };

  const upgradeCooling = () => {
    // Logic for upgrading cooling system (not implemented)
  };

  const upgradeRenewable = () => {
    // Logic for upgrading renewable energy source (not implemented)
  };

  return (
    <div className="mining-section">
      <div className="gif-container">
        <img src={storGif} alt="Mining GIF" className="mining-gif" />
      </div>

      {/* Upgrade Buttons */}
      <div className="upgrade-buttons">
        <button onClick={upgradeRig} className="upgrade-button">Upgrade Mining Rig</button>
        <button onClick={upgradeCooling} className="upgrade-button">Upgrade Cooling System</button>
        <button onClick={upgradeRenewable} className="upgrade-button">Upgrade Energy Source</button>
      </div>
    </div>
  );
};

export default MiningSection;
