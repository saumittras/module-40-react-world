import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Counteries.css";

const Countries = () => {
  const url = "https://restcountries.com/v3.1/all";
  const [counteris, setCounteries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch(url).then((res) => res.json().then((data) => setCounteries(data)));
  }, []);

  const handlevisitedCountry = (country) => {
    console.log("add this to your visited countries");
    console.log(country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  return (
    <div>
      <h3>Countries: {counteris.length}</h3>
      <div>
        <h5>Visited Counrtries: {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="country-container">
        {counteris.map((country) => (
          <Country
            key={country.cca3}
            handlevisitedCountry={handlevisitedCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
