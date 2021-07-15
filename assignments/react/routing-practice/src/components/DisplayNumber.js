import React from "react";

const DisplayNumber = (props)=>{

    

    return (
        <div>
        {isNaN(props.numWord)
            ? <h3>The word is: {props.numWord} </h3>
            : <h3> The number is: {props.numWord} </h3>
          }
        
        
        </div>
    )
}

export default DisplayNumber;