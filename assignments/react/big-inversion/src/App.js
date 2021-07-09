import './App.css';
import PersonalCard from './components/PersonalCard';


function App() {
  return (
    <div className="App">
        <PersonalCard className="personalCard" firstName="Jane" lastName="Doe" age={45} hairColor="green"/>
        <PersonalCard className="personalCard" firstName="John" lastName="Smith" age={32} hairColor="purple"/>
        <PersonalCard className="personalCard" firstName="Millard" lastName="Fillmore" age={50} hairColor="black"/>
        </div>
  );
}

export default App;
