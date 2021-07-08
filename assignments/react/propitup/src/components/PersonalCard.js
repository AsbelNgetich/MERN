
import React, {Component} from "react";

class PersonalCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: props.age
        };
   
    } 

    render(){
        const addAge = () => {
            this.setState({ age: this.state.age + 1 });
        }
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={addAge}>Birthday button for {this.props.firstName} {this.props.lastName}</button>
            </div>);
       
    }
}
export default PersonalCard;