import './App.css';
import { ImageHeader } from './Components/ImageHeader/imageHeader';
import { MenuTitle } from './Components/MenuTitle/menutitle';

const App: React.FC = () => {
  return (
    <div className="App">
      <MenuTitle/>
      <ImageHeader/>

    </div>
    );
  };

export default App;
