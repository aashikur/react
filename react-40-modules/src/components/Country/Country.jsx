import React, { useState } from 'react';
import './Country.css'
// const Country =(country) =>{
    function Country({country,handleVisitedCountries}){
    const [visited, setVisited] = useState(false)
    const Visited = ()=>{
        setVisited(!visited)
        handleVisitedCountries(country)
    }

    return (
        <div className={`country ${visited ? 'country-visited' : ''}`}>
            <p className={visited && 'visited-country'}> <b> Country Name:</b> {country.name.common}</p>
            <p><img width={100} src={country.flags.png} alt="" /></p>
            <p>Independence: {country.independent ? 'Yes' : 'No'} </p>
            <button className={ `visited-btn ${visited ? 'visited-done-btn':''} `} onClick={Visited}>Visited</button>
        </div>
    );
};

export default Country;