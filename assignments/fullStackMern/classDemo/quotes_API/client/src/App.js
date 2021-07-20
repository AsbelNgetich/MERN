import './App.css';
import AllQuotes from './components/AllQuotes';
import {Link, Router} from "@reach/router"
import CreateQuote from './components/CreateQuote';

function App() {
  return (
    <div className="App">
      <h1>Quotes</h1>
      <Link to="/quotes/new">Create a new quote </Link>
      <Router>
        <AllQuotes path="/"/>
        <CreateQuote path="/quotes/new"/>
      </Router>
    </div>
  );
}

export default App;
