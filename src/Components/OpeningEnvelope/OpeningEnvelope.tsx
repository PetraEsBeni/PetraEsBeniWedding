import React, { useState } from 'react';
import './OpeningEnvelope.css';

const OpeningEnvelope = ({ onOpen }: { onOpen: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isOpen) return;
    setIsOpen(true);
    setTimeout(onOpen, 1700);
  };

  return (
    <div className={`envelope-wrapper ${isOpen ? 'open' : ''}`}>
      <div className="envelope" onClick={handleClick}>
        <img src="/THELogoBolder.png" alt="Logo" className="envelope-logo" />
        <div className="envelope-text-container">
          <p className="envelope-title">Meghívó</p>
          <p className="click-to-open-text">Kattints a kinyitáshoz!</p>
        </div>
        <div className="flap front"></div>
        <div className="flap back"></div>
      </div>
    </div>
  );
};

export default OpeningEnvelope;
