
import 'bootstrap/dist/css/bootstrap.min.css';
import AddList from './components/AddList';
import DisplayTasks from './components/DisplayTasks';
import './App.css';
import {useState} from 'react'

function App() {
  const [tasks, setTasks]=useState([]);
 

 


  return (
    <div className="App">
     <h1>Todo List</h1> <br/>
     <AddList tasks = {tasks} setTasks={setTasks}/>
      {tasks.map((task, i)=>(
        <DisplayTasks task = {task} tasks={tasks} setTasks={setTasks} index={i} />
      ))}
     </div>
  );
}

export default App;
