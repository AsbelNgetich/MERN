import React,{useState, useEffect} from 'react';
import axios from 'axios';

const AllQuotes = () => {
    const [Quotes, setQuotes] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/quotes")
        .then(res => {
            console.log("logging response!!", res)
            setQuotes(res.data.results)
        
        })
        .catch(err=> console.log("errorrr with axios call", err))
    }, [])
    

    return (
        <div>
            <h2>All quotes</h2>
            {Quotes.map(q=>{
                return <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{q.author}</h4>
                    <p class="card-text">
                    {q.content}
                    </p>
                    <p>Quoted on this day:{q.quotedOn}</p>
                   
                </div>
            </div>
            })}
            
        </div>
    );
};

export default AllQuotes;