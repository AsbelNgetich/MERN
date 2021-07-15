import React, { useState } from 'react';


const Pokemon = props => {
    

    const [pokemons, setPokemons] = useState([]);

    const fetchPokemon = ()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => {
                return response.json()})
            .then(response=>{
               setPokemons(response.results)
              console.log(response.results);

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