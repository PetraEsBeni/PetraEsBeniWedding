import './App.css';
import { CountDown } from './Components/CountDown/CountDown';
import { ImageHeader } from './Components/ImageHeader/imageHeader';
import { MenuTitle } from './Components/MenuTitle/menutitle';

const App: React.FC = () => {
  return (
    <div className="App">
      <MenuTitle/>
      <table className='table'>
        <tbody>
          <tr>
            <ImageHeader/>
            <CountDown/>
          </tr>
        </tbody>
      </table>

    </div>
    );
  };

export default App;
