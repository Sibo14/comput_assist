import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar";
import MainGrid from "./Components/MainGrid";
import Drawer from "./Components/Drawer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainGrid />
      <Router>
        <ApiExample />
      </Router>
    </div>
  );
}

export default App;
