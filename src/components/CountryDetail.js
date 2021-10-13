import React from 'react';

const CountryDetail = ({country}) => {

    const getLanguages = (country) => {
        const languages  = country.languages.map((language) => {
            return language.name;
    })

    return languages.join(', ');
    
    }

    return(
        <div>
            <h3>{country.name}</h3>
            <p>Language: {getLanguages(country)}</p>
            <p>Flag: <img class='flag' src={country.flag} /></p>
        </div>
    )
}

export default CountryDetail;