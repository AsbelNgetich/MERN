import axios from 'axios';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {navigate} from '@reach/router'

const Edit = (props) => {

    const [quoteInfo, setQuoteInfo]= useState({
        content:"",
        author:"",
        quotedOn:"",
        isMotivational: false
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/quotes/${props.id}`)
            .then(res=>{
                console.log("response below........")
                console.log(res)
               
                setQuoteInfo(res.data.results)

            })
            .catch(err=> console.log(err))
    },[])

    const changehandler = (e)=>{

        if(e.target.type == "checkbox"){
            setQuoteInfo({
                ...quoteInfo,
                [e.target.name]:e.target.checked
            })
        }else{
            setQuoteInfo({
                ...quoteInfo,
                [e.target.name]:e.target.value
            })

        }
    }


    const submithandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/quotes/${props.id}`, quoteInfo )
            .then(res=> {
                console.log("Updating.........")
                console.log(res)
              
                navigate("/")

            })
            .catch(err=> console.log(err))
    }

    return (
        <div className="container">
           <h1>Editing quote number: {props.id} </h1> 
           <form onSubmit={submithandler}>
              <div className="form-group">
                  <label>Quoted By(Author):</label>
                  <input onChange= {changehandler} type="text" name="author" id="" className="form-control" value={quoteInfo.author} />
                {/**  {formErrors.author? <p className="text-danger">{formErrors.author.message}</p>:""} */} 
              </div>
              <div className="form-group">
                  <label>Content</label>
                  <textarea onChange= {changehandler} name="content" id="" cols="30" rows="10" className="form-control" value={quoteInfo.content}></textarea>
                 {/*  {formErrors.content? <p className="text-danger">{formErrors.content.message}</p>: ""} */} 

              </div>
              <div className="form-group">
                  <label>Quoted on:</label>
                  <input onChange= {changehandler} type="date" name="quotedOn" id="" className="form-control" value={moment(quoteInfo.quotedOn).format('YYYY-MM-DD')} />
              </div>
              <div className="form-group">
                <label>Is Motivational?</label>
                <input onChange= {changehandler} checked = {quoteInfo.isMotivational}  type="checkbox" name="isMotivational" id="" />
            </div>

              <input type="submit" value="Update Quote" />
          </form>
        </div>
    );
};


export default Edit;