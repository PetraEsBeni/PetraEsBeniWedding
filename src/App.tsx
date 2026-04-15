import React, { useState } from 'react';
import './App.css';
import { CountDown } from './Components/CountDown/CountDown';
import { Footer } from './Components/Footer/Footer';
import { ImageHeader } from './Components/ImageHeader/imageHeader';
import { Invitation } from './Components/Invitation/Invitation';
import { LoveStory } from './Components/LoveStory/LoveStory';
import { MenuTitle } from './Components/MenuTitle/menutitle';
import { Playlist } from './Components/Playlist/Playlist';
import OpeningEnvelope from './Components/OpeningEnvelope/OpeningEnvelope';

const App: React.FC = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleEnvelopeOpen = () => {
    document.body.style.overflow = 'auto';
    setIsEnvelopeOpen(true);
  };

  return (
    <div className="App">
      {!isEnvelopeOpen ? (
        <OpeningEnvelope onOpen={handleEnvelopeOpen} />
      ) : (
        <>
          <MenuTitle />
          <ImageHeader />
          <div className="gradient-background-section">
            <Invitation />
            <CountDown />
            <LoveStory />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
