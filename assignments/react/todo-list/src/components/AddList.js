import React from 'react';
import { useState } from 'react';

const AddList=(props)=>{
    const {tasks, setTasks} = props;
    const [task, setTask] = useState({
      name:"",
      isCompleted:false
    });
    const onSubmitHandler=(event) =>{
        event.preventDefault();
        setTasks([task,...tasks])
    //    console.log(tasks);
  //      console.log("Single task " + task);
      }

    const onChange = (event)=>{
      setTask({
        name: event.target.value,
        isCompleted: false
      })
  //    console.log(task)
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