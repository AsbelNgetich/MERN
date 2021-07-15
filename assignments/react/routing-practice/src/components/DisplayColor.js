import React from "react";

const DisplayColor = (props)=>{

    return (
        <div style = {{backgroundColor:props.background}} >
            <h3 style = {{color:props.color } }>The word is: {props.word}</h3>
        </div>
    )
}

export default DisplayColor;