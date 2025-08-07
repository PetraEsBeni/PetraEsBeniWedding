import { useRef } from 'react';
import './App.css';
import { CountDown } from './Components/CountDown/CountDown';
import { Feedback } from './Components/Feedback/Feedback';
import { Footer } from './Components/Footer/Footer';
import { ImageHeader } from './Components/ImageHeader/imageHeader';
import { Invitation } from './Components/Invitation/Invitation';
import { LoveStory } from './Components/LoveStory/LoveStory';
import { MenuTitle } from './Components/MenuTitle/menutitle';
import { TimeTable } from './Components/TimeTable/TimeTable';

const App: React.FC = () => {
  return (
    <div className="App">
      <MenuTitle />
      <ImageHeader />
      <CountDown />
      {/*<Invitation/>
      <TimeTable />
      <LoveStory />
      <Footer />*/}
    </div>
  );
};

export default App;
