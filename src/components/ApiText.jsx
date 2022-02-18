import { useState, useEffect } from "react";
import axios from "axios";

const ApiText = () => {
  const [countries, setCountries] = useState([]);
  const [countryMatches, setCountryMatches] = useState([]);

  const loadApi = async () => {
    const resp = await axios.get("https://restcountries.com/v3.1/all");
    // const resp = await axios.get("https://restcountries.com/v2/all");
    // console.log('From api',resp.data);
    setCountries(resp.data);
  };

  useEffect(() => {
    loadApi();
  }, []);

  const searchCountries = (txt) => {
    let matches = countries.filter((country) => {
      const regex = new RegExp(`${txt}`, "gi");
      if (txt !== "") {
        return country.name.common.match(regex);
        // return country.name.match(regex); // for api v2
      }
    });
    setCountryMatches(matches);
    // console.log('all countries: ', countries);
    // console.log('search country: ', setCountryMatches);
  };

  return { searchCountries, loadApi, countryMatches, countries };
};

export default ApiText;
