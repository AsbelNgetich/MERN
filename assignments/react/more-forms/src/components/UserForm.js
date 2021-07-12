import React, { useState } from  'react';
    
    
    const UserForm = (props) => {

        const[form, setForm] = useState({
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            conpassword:"",
            name:""
        })

        const onChangeHandler=(e)=>{
            setForm({
                ...form,
                [e.target.name]:e.target.value
            })
        }

        const isValidFirstname=(input)=>{
            if(input.length < 2 && input.length !== 0){
                return false;
            }else {
                return true;
            }
        }

        const isValidLastname=(input)=>{
            if(input.length < 2 && input.length !== 0){
                return false;
            }else {
                return true;
            }
        }

        const isValidEmail=(input)=>{
            if(input.length < 5 && input.length !== 0){
                return false;
            }else {
                return true;
            }
        }
        const isValidPassword=(input)=>{
            if(input.length < 8 && input.length !== 0){
                return false;
            }else {
                return true;
            }
        }
        const isValidConpassword=(input)=>{
            if(input.length < 8 && input.length !== 0){
                console.log("password " + form.password);
                console.log("confirm Pasword "+ input);
                return false;
            }else {
                return true;
            }
        }
        const isMatching=(input)=>{
            if(input.length !== 0 && input!==form.password){
                console.log("password " + form.password);
                console.log("confirm Pasword "+ input);
                return false;
            }else {
                return true;
            }
        }
    
    return(<div>
        <form >
            <div class="form-group">
                <label>First Name:</label> 
                <input type="text" class="form-control" name="firstname" onChange={onChangeHandler}/>
                {!isValidFirstname(form.firstname) && <span className="alert-danger">You need atleast 2 characters</span>}
               
            </div>
            <div class="form-group">
                <label>Last Name:</label> 
                <input type="text" class="form-control" name="lastname" onChange={onChangeHandler}/>
                {!isValidLastname(form.lastname) && <span className="alert-danger">You need atleast 2 characters</span>}
            </div>
            <div class="form-group">
                <label>Email Address:</label> 
                <input type="text" class="form-control" name="email" onChange={onChangeHandler} />
                {!isValidEmail(form.email) && <span className="alert-danger">You need atleast 5 characters</span>}   
            </div>
            <div class="form-group">
                <label>Password:</label>
                <input type="text" class="form-control" name="password" onChange={onChangeHandler}/>
                {!isValidPassword(form.password) && <span className="alert-danger">You need atleast 8 characters</span>}
            </div>
            <div class="form-group">
                <label>Confirm Password:</label>
                <input type="text" class="form-control" name="conpassword" onChange={onChangeHandler}/>
                {!isValidConpassword(form.conpassword) && <span className="alert-danger">You need atleast 8 characters </span>}
                {!isMatching(form.conpassword) && <span className="alert-danger">Password needs to match</span>}
            </div>
            <input type="submit" class="btn btn-primary" value="Create User" />
        </form>              
    </div> );
};
    
export default UserForm;