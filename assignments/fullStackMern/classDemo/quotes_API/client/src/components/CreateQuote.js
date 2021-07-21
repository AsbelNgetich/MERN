import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateQuote=()=>{
    const [formInfo, setFormInfo] = useState({
        content:"",
        author:"",
        quotedOn:""
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
        axios.post("http://localhost:8000/api/quotes/create", formInfo)
            .then(res=> {

                console.log(res)

                //the there are results go to page
                if(res.data.results){
                    navigate("/")

                //if there are errors, stay on page and set the erros
                }else{
                    console.log("OOPSIEEE you gota fill this out properly!")
                    setFormErrors(res.data.error.errors)
                }

            })
            .catch(err=> console.log("errorr thooo when submitting the form!", err))
    }



    return (
        <div className = "container">
        <h3>Use this form to upload a new quote!</h3>  
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label>Quoted By(Author):</label>
                <input onChange= {changeHandler} type="text" name="author" id="" className="form-control" />
                {formErrors.author? <p className="text-danger">{formErrors.author.message}</p>:""}
            </div>
            <div className="form-group">
                <label>Content</label>
                <textarea  onChange= {changeHandler} name="content" id="" cols="30" rows="10" className="form-control"></textarea>
                {formErrors.content? <p className="text-danger">{formErrors.content.message}</p>: ""}

            </div>
            <div className="form-group">
                <label>Quoted on:</label>
                <input  onChange= {changeHandler} type="date" name="quotedOn" id="" className="form-control" />
            </div>
            <input type="submit" value="Add Quote" />
        </form>
      </div>
    )

}

export default CreateQuote;