import React, { useState } from 'react';
import './Country.css'
// const Country =(country) =>{
    function Country({country,handleVisitedCountries,handleVisitedFlags}){
    const [visited, setVisited] = useState(false)
    const Visited = ()=>{
        setVisited(!visited)
        
    }

    return (
        <div className={`country ${visited ? 'country-visited' : ''}`}>
            <p className={visited && 'visited-country'}> <b> Country Name:</b> {country.name.common}</p>
            <p><img width={100} src={country.flags.png} alt="" /></p>
            <p>Independence: {country.independent ? 'Yes' : 'No'} </p>
            <button className={ `visited-btn ${visited ? 'visited-done-btn':''} `} onClick={Visited}>Visited</button>
             <button onClick={()=> handleVisitedFlags(country.flags.png)} className='visited-btn'> Visited Flag</button>
        </div>
    );
};

export default Country;
