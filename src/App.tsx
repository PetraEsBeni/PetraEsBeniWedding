import './App.css';
import { CountDown } from './Components/CountDown/CountDown';
import { Footer } from './Components/Footer/Footer';
import { ImageHeader } from './Components/ImageHeader/imageHeader';
import { Invitation } from './Components/Invitation/Invitation';
import { LoveStory } from './Components/LoveStory/LoveStory';
import { MenuTitle } from './Components/MenuTitle/menutitle';

const App: React.FC = () => {
  return (
    <div className="App">
      <MenuTitle />
      <ImageHeader />
      <div className="gradient-background-section">
        <Invitation />
        <CountDown />
        <LoveStory />
      </div>
        <Footer />
    </div>
  );
};

export default App;
