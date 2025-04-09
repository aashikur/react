import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise);

    const [visitedCountries,setVisitedCountries] = useState([])
    const [visitedFlags,setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country)=>{
        const newCountry = [...visitedCountries,country.name.common];
        setVisitedCountries(newCountry);
    }


    const handleVisitedFlags = (flag)=>{
        console.log("visited flag: ", flag);
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }





    return (
        <div>
            <h1> This is Country : {countries.length}</h1>
            <p>Visited Country: {visitedCountries.length}</p>
            <ol>
                {
                    visitedCountries.map(country => <li>{country}</li>)
                }
            </ol>

                <p>Flages Visited: </p> 
                <div className='VisitedFlg'>
                                    
                {
                  visitedFlags.map(visitedFlag => <img src={visitedFlag}></img>)
                }

                </div>
            <div className='countries'>
                 {

                    countries.map(country => 
                    <Country
                         key={country.cca3} 
                         country={country}
                         handleVisitedCountries={handleVisitedCountries}
                         handleVisitedFlags={handleVisitedFlags}
                    ></Country>)
                }

            </div>


        </div>
    );
};

export default Countries;