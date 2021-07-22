import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from "@reach/router";
import AllProducts from './AllProducts';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateProduct=()=>{
    const [formInfo, setFormInfo] = useState({
        title:"",
        price:" ",
        description:""
    })

    const [formErrors, setFormErrors] = useState({})

    //handles the changes in the input
    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    //handles the form
    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/new", formInfo)
            .then(res=> {

                console.log("response below.......")
                console.log(res)
                
                //if there are errors, stay on page and set the erros
                if(res.data.error){
                    console.log("Please fill out the form correctly!")
                    setFormErrors(res.data.error.errors) 

                //if there arent any errosc go to home page
                }else{
                   
                    navigate("/")
                }

            })
            .catch(err=> console.log("There were errors submitting the form!", err))
    }

    return (
        <div className = "container">
        <h2>Product Manager.</h2>  
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label>Title:</label>
                <input onChange= {changeHandler} type="text" name="title" id="" className="form-control" />
                {formErrors.title? <p className="text-danger">{formErrors.title.message}</p>:""}
            </div>
            <div className="form-group">
                <label>Price</label>
                <input onChange= {changeHandler} type="text" name="price" id="" className="form-control" />
                {formErrors.price? <p className="text-danger">{formErrors.title.message}</p>: ""}

            </div>
            <div className="form-group">
                <label>Description:</label>
                <input  onChange= {changeHandler} type="text" name="description" id="" className="form-control" />
            </div>
            <input type="submit" value="Create" />
        </form>
        <AllProducts path="/"/>
      </div>
    )

}

export default CreateProduct;