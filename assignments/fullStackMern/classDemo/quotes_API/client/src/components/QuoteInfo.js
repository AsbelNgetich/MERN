import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';



const QuoteInfo = (props) => {

    const [quoteInfo, setQuoteInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/quotes/${props.id}`)
            .then(res=> {
               
                console.log(res.data.results)
               
                setQuoteInfo(res.data.results)

            })
            .catch(err=> console.log("error", err))
    },[])


    const deleteQuote =(e)=>{
        console.log("inside delete function")
        axios.delete(`http://localhost:8000/api/quotes/${props.id}`)
            .then(res=>{
                console.log(res)
                
                //navigate back to home after deleting
                navigate("/")

            })
            .catch(err=> console.log("error", err))
    }
    
    return (
        <div>
            <h3>Details about this quote.</h3>
            <p>Id of the quote: {props.id} </p>
            <p>Quote Author: {quoteInfo.author}</p>
            <p>Quote Content: {quoteInfo.content}</p>
            <p>Quoted on this date: {quoteInfo.quotedOn}</p>
            <button onClick= {deleteQuote} className="btn btn-danger">Delete</button>
        </div>
        
    );
};


export default QuoteInfo;