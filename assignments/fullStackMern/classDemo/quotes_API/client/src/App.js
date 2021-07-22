import './App.css';
import AllQuotes from './components/AllQuotes';
import {Link, Router} from "@reach/router"
import CreateQuote from './components/CreateQuote';
import QuoteInfo from './components/QuoteInfo';
import Edit from './components/EditQuote';
import FilteredQuotes from './components/FilteredQuotes';

function App() {
  return (
    <div className="App">
      <h1>Quotes</h1>
      <Link to="/quotes/new">Create a new quote </Link>
      <Router>
        <AllQuotes path="/"/>
        <CreateQuote path="/quotes/new"/>
        <QuoteInfo path="/quotes/info/:id"/>
        <Edit path="/quotes/edit/:id"/>
        <FilteredQuotes path= "/filtered"/>
      </Router>
    </div>
  );
}

export default App;
