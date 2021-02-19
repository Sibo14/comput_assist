import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar";
import MainGrid from "./Components/MainGrid";
import Drawer from "./Components/Drawer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApiExample from "./Components/ApiExample";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <MainGrid />
        <Switch>
          <Route path="/ApiExample" component={ApiExample} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
