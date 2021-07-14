import React from 'react';

const DisplayTasks =(props) =>{
  const  {task, index, tasks, setTasks} = props;

  const onClick =()=>{
      setTasks(()=>{
          return tasks.filter(chore=> tasks.indexOf(chore)!==index)
      });

  };

  const onChange = ()=>{
      tasks[index].isCompleted= !tasks[index].isCompleted;
      setTasks([...tasks])

  }


    return(
        <div>
            <h4>
            {task.isCompleted
                ? <span style={{textDecoration: "line-through"}}> {task.name} </span>
                : <span style={{color: "green"}}> {task.name} </span>
              }
            <input onChange={onChange} style={{marginLeft: "10px"}} type="checkbox" name="" checked = {task.isCompleted}/> 
            <button style={{marginLeft: "10px"}} className="btn btn-sm btn-danger" onClick={onClick}>X</button>
            
            </h4>
           
        </div>
       
    )

}

export default DisplayTasks;