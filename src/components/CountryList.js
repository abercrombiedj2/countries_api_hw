import React from 'react';
import Country from './Country';

const CountryList = ({countries, onCountryClick}) => {

    const countriesList = countries.map((country, index) => {
        return <Country country={country} key={index} onCountryClick={onCountryClick} />
    });

    return(
        <div>
            {countriesList}
        </div>
    )

}

export default CountryList;