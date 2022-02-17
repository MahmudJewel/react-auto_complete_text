import { useState, useEffect } from "react";
import axios from "axios";


const ApiText =() =>{
    const [countries, setCountries] = useState([]);
    const [countryMatches, setCountryMatches] = useState([]);

    const loadApi= async ()=>{
        const resp = await axios.get("https://restcountries.com/v3.1/all");
        // console.log('From api',resp.data);
        setCountries(resp.data);
    }

    const searchCountries = (txt) =>{
        let matches = countries.filter((country)=>{
            const regex = new RegExp(`${txt}`, "gi");
            return country.name.match(regex) || country.capital.match(regex);
        });
        setCountryMatches(matches);
        console.log('search country: ', countryMatches);
    }
    
    return(
        {searchCountries, loadApi, countryMatches}
    );
}

export default ApiText;
