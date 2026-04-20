import React, { useState } from 'react';
import './App.css';
import { CountDown } from './Components/CountDown/CountDown';
import { Footer } from './Components/Footer/Footer';
import { ImageHeader } from './Components/ImageHeader/imageHeader';
import { Invitation } from './Components/Invitation/Invitation';
import { IconRow } from './Components/IconRow/IconRow';
import { MenuDetails } from './Components/MenuDetails/MenuDetails';
import { TimeLine } from './Components/TimeLine/TimeLine';
import { LoveStory } from './Components/LoveStory/LoveStory';
import { MenuTitle } from './Components/MenuTitle/menutitle';

const App: React.FC = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleEnvelopeOpen = () => {
    document.body.style.overflow = 'auto';
    setIsEnvelopeOpen(true);
  };

  return (
    <div className="App">
      {/*} {!isEnvelopeOpen ? (
        <OpeningEnvelope onOpen={handleEnvelopeOpen} />
      ) : (*/}
        <>
          <MenuTitle />
          <ImageHeader />
          <div className="gradient-background-section">
            <CountDown />
            <IconRow />
            <div id="invitation">
              <Invitation />
            </div>
            <div id="menu">
              <MenuDetails />
            </div>
            <div id="timeline">
              <TimeLine />
            </div>
            <div id="lovestory">
              <LoveStory />
            </div>
          </div>
          <Footer />
        </>
     {/*} )}*/}
    </div>
  );
};

export default App;
