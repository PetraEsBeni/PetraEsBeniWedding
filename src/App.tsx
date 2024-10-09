import './App.css';
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
          </tr>
        </tbody>
      </table>

    </div>
    );
  };

export default App;
