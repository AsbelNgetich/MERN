import React from 'react';
import { useState } from 'react';

const AddList=(props)=>{
    const {tasks, setTasks} = props;
    const [task, setTask] = useState();
    const onSubmitHandler=(event) =>{
        event.preventDefault();
        let newTask = {
          name:task.name,
          isCompleted: false
        }
        setTasks([...tasks, newTask])
      }

    const onChange = (event)=>{
      setTask({
        name: event.target.value,
        isCompleted: false
      })
    }



return(
    <div className="container">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <input type="text" className="form-control" name="task" onChange={onChange}/>
          <input style={{margin: "10px 10px"}} type="submit" class="btn btn-primary" value="Add"/>
        </div>
      </form>
     </div>
  
)

}

export default AddList;