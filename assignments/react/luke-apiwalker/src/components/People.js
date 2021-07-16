import React, { useState, useEffect } from 'react';
import axios from 'axios';
import obi from '../images/obi.jpg';

const People = (props) => {
    const [person, setPerson] = useState([]);
    const personId = props.searchId;
    const [hasResults,setHasResults] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${personId}/`)
        .then(res => {setPerson(res.data)
            setHasResults(true)
            console.log(res.data)
        })
     
        .catch((err) => {
            setHasResults(false)
            console.log(err)});
    }, [personId]);

    return (
             <div>
                    <h1>{person.name}</h1>
                    <p>Height: {person.height}</p>
                    <p>Mass: {person.mass}</p>
                    <p>Hair Color: {person.hair_color}</p>
                    <p>Skin Color: {person.skin_color}</p>

                    {!hasResults && <>
                        (<h2> These aren't droids you're looking for! </h2> 
                        <img src={obi} />)
                        </>
                      }
                   
                </div>
                
    );
};

export default People;