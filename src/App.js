import './App.css';
import Body from './components/Body/Body';
import Functionality from './components/Functionality/Functionality';
import Header from './components/Header/Header';
import LeftNavBar from './components/LeftNavBar/LeftNavBar';
import TopTabs from './components/TopTabs/TopTabs';

function App() {
  return (
    <div className="App">
     <Header/>
     <LeftNavBar/>
     <TopTabs/>
     <Functionality/>
     <Body/>
    </div>
  );
}

export default App;
