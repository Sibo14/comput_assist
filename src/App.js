import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import MainGrid from './Components/MainGrid';
import Drawer from './Components/Drawer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainGrid/>
    </div>
  );
}

export default App;
