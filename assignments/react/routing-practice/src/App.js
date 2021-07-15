import logo from './logo.svg';
import {Router} from "@reach/router"
import Home from './components/Home';
import DisplayNumber from './components/DisplayNumber';
import DisplayColor from './components/DisplayColor';

import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Home path="/home"/>
      <DisplayNumber path=":numWord"/>
      <DisplayColor path="/:word/:background/:color"/>
    </Router>
  
    </div>
  );
}

export default App;
