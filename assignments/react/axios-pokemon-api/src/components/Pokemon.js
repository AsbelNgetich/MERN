import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = props => {
    

    const [pokemons, setPokemons] = useState([]);
    // useEffect(()=>{
    //     axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
    //         .then(response=>{
    //             setPokemons(response.data.results)
    //           //  console.log(response.data.results);

    //         })
    //         .catch(err=>console.log(err));
           
    // }, []); 
    const fetchPokemon = ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response=>{
                setPokemons(response.data.results)
              //  console.log(response.data.results);

            })
            .catch(err=>console.log(err));
           
    }; 

  
    const style = {
        width: '150px',
        margin: "0 auto"

    };

   
    return(
        <div>
          <h3>Pokemons</h3>
          <button onClick={fetchPokemon}>Fetch Pokemon</button>
            <ul style = {style}>
                {
                    pokemons.map(pokemon =>
                    <li>{pokemon.name} </li>)}
            </ul>
        </div>
    )
}




export default Pokemon;