import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({ countriesPromise }) => {

    const [visitedCountries,setVisitedCountries] = useState([])

    const handleVisitedCountries = (country)=>{
        // console.log("HandelVisited Countries", country.name.common);
        const newCountryList = visitedCountries;
              newCountryList.push(country.name.common)
              setVisitedCountries(newCountryList);
        console.log("visited ",visitedCountries)
    }

    const countries = use(countriesPromise);
    // console.log('countries :', countries);



    return (
        <div>
            <h1> This is Country : {countries.length}</h1>

            <div className='countries'>
         {

                    countries.map(country => <Country
                         key={country.cca3} 
                         country={country}
                         handleVisitedCountries={handleVisitedCountries}
                         ></Country>)
                }

            </div>


        </div>
    );
};

export default Countries;