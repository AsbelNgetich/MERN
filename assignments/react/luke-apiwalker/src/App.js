import logo from './logo.svg';
import React, { useState } from 'react';
import { Router, navigate } from '@reach/router';

import People from './components/People';
import Planets from './components/Planets';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [categories, setCategories] = useState(["people","planets"])
  const[category, setCategory]= useState("")
  const [searchId, setSearchId]= useState("")
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputId,setInputId] = useState("")
  

  
  const onChangeCategory= (event)=> {
      setCategory(event.target.value)
  }

  const onChangeId = (event) => {

      setInputId(event.target.value)

  }

  const onClickSearch =()=>{
    setSearchId(inputId)
  }

  const onSubmitSearch= (event)=> {
      event.preventDefault();
      if(category == "planets"){
        navigate(`/planets/${searchId}`)
      }else{
        navigate(`/people/${searchId}`)
      }


  }


  return (
    <div className="App">
    <h2>Star wars</h2>
    <form onSubmit={onSubmitSearch}>
        <div className="NavBar">
            <label className="form-control w-25" >Search for:</label>
            <select className="form-select form-select-lg w-25" onChange={onChangeCategory}>
            {
                categories.map((category)=>{
                    return <option value={category}>{category}</option>
                })
            }
        </select>
            <label className="form-control w-25">Id:</label>
            <input className="form-control w-25" type="text"  onChange={onChangeId}/>
            <input className="btn btn-dark" type="submit" onClick={onClickSearch} value="Search"/>   
        </div>
    </form>

    <Router>
        <People  path= "/people/:searchId" searchId={searchId} />
        <Planets path="/planets/:searchId" searchId= {searchId}  />
    </Router>

     

      
    </div>
  );
}

export default App;
