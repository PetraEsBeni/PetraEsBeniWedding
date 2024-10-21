import './App.css';
import { CountDown } from './Components/CountDown/CountDown';
import { Feedback } from './Components/Feedback/Feedback';
import { ImageHeader } from './Components/ImageHeader/imageHeader';
import { Invitation } from './Components/Invitation/Invitation';
import { MenuTitle } from './Components/MenuTitle/menutitle';
import { TimeTable } from './Components/TimeTable/TimeTable';

const App: React.FC = () => {
  return (
    <div className="App">
      <MenuTitle/>
      <table className='table'>
        <tbody>
          <tr>
            <ImageHeader/>
            <CountDown/>
            {/*<Invitation/> 
            <TimeTable/> 
            <Feedback/>*/}
          </tr>
        </tbody>
      </table>

    </div>
    );
  };

export default App;
