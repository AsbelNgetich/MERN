import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Planets = (props) => {
    const [planet, setplanet] = useState([]);
    const planetId = props.searchId;

    useEffect(() => {
        
        axios.get(`https://swapi.dev/api/planets/${planetId}/`)
            .then((res) => {
                setplanet(res.data)
                console.log(res.data)
            })
           
            .catch((err) => console.log(err.message));
    }, [planetId]);

    return (
        <div>
            <h1>{planet.name}</h1>
            <p>
                Climate: {planet.climate}
            </p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>
        </div>
       
    );
};

export default Planets;
