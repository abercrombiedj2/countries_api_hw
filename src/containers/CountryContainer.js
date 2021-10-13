import React, {useEffect, useState} from 'react';
import CountryList from '../components/CountryList';
import CountryDetail from '../components/CountryDetail';
import CountrySelector from '../components/CountrySelector';


const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const worldPopulation = countries.reduce((total, currentCountry) => {
        return total += currentCountry.population;
    }, 0);

    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = function(){
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(countries => setCountries(countries));
    }

    const onCountrySelected = function(country){
        setSelectedCountry(country);
    }

    return(
        <div class='container'>
            <CountrySelector countries={countries} onCountrySelected={onCountrySelected} />
            <div>
                <h3>World Population: {worldPopulation}</h3>
                {selectedCountry ? <CountryDetail country={selectedCountry} /> : null}
            </div>
        </div>
    )

}

export default CountryContainer;