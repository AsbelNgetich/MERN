import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [conpassword, setConpassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password };
        console.log("Welcome", newUser);
    };
    
    return(<div>
        <form onSubmit={ createUser } >
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConpassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>

            <div className="userInfo" >
           
            <label>First Name: {firstname} </label>
             <label>Last Name: {lastname}</label>
             <label>Email Address: {email}</label>
             <label>Password: {password}</label>
             <label>Confirm Password: {conpassword}</label>  
           
            </div>
    </div> );
};
    
export default UserForm;
