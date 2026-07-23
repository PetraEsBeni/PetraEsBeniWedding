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
import { TimeTable } from './Components/TimeTable/TimeTable';
import { WeddingVideo } from './Components/WeddingVideo/WeddingVideo';
import { WeddingHeroPhoto } from './Components/WeddingHeroPhoto/WeddingHeroPhoto';
import { ThankYou } from './Components/ThankYou/ThankYou';
import { GalleryLinks } from './Components/GalleryLink/GalleryLink';
import { WeddingGallery } from './Components/WeddingGalery/WeddingGallery';

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
            {/*<CountDown />
            <IconRow />
            <div id="timetable">
              <TimeTable />
            </div>
            <div id="menu">
              <MenuDetails />
            </div>
            <div id="invitation">
              <Invitation />
            </div>*/}
            <div id="thankYou">
              <ThankYou/>
            </div>
            <div id="heroPhoto">
              <WeddingHeroPhoto/>
            </div>
            <div id="weddingGalery">
              <WeddingGallery/>
            </div>
            <div id="galleryLink">
              <GalleryLinks/>
            </div>
            <div id="video">
              <WeddingVideo />
            </div>
            {/*<div id="lovestory">
              <LoveStory />
            </div>*/}
          </div>
         {/* <Footer />*/}
        </>
     {/*} )}*/}
    </div>
  );
};

export default App;
