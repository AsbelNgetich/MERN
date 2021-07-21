import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "@reach/router"

const AllQuotes = () => {
    const [Quotes, setQuotes] = useState([])
    const [deleteclicked, setDeleteClicked] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/quotes")
        .then(res => {
            console.log("logging response!!", res)
            setQuotes(res.data.results)
        
        })
        .catch(err=> console.log("errorrr with axios call", err))
    }, [deleteclicked])

    const deleteQuote=(e, quoteid )=>{

        console.log(quoteid)
        axios.delete(`http://localhost:8000/api/quotes/${quoteid}`)
            .then(res=>{
            
                console.log(res)
                
                setDeleteClicked(!deleteclicked)

            })
            .catch(err=> console.log(err))

    }
    

    return (
        <div>
            <h2>All quotes</h2>
            {Quotes.map((q,idx)=>{
                return <div key = {idx} className="card">
                <div class="card-body">
                    <h4 class="card-title">{q.author}</h4>
                    <p class="card-text">
                    {q.content}
                    </p>
                    {/*<p>Quoted on this day:{q.quotedOn}</p>*/}
                    <Link to={`/quotes/info/${q._id}`} className="btn btn-primary m-2">More Info</Link>
                    <Link to={`/quotes/edit/${q._id}`} className="btn btn-primary m-2">Edit</Link>
                    <button onClick={(e)=>deleteQuote(e, q._id)} className="btn btn-danger">Delete</button>

                </div>
            </div>
            })}
            
        </div>
    );
};

export default AllQuotes;