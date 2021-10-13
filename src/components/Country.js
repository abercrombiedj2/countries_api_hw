import React from 'react';

const Country = ({country, index, onCountryClick}) => {

    const handleClick = function(){
        onCountryClick(country);
    }

    return(
        <li onClick={handleClick} key={index}>{country.name}</li>
    )

}

export default Country;